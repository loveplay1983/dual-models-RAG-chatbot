from flask import Flask, request, render_template, jsonify, g, Response
import sqlite3
import ollama
from ollama import Client
import json
from duckduckgo_search import DDGS

app = Flask(__name__)

# Initialize Ollama client with custom port
ollama_client = Client(host='http://localhost:11450')  # Add this line


# ----------------------------
# search and vector embedding
# ----------------------------
def perform_search(query, num_results=5):
    """Search the web using Duckduckgo."""
    with DDGS() as ddgs:
        results = ddgs.text(query, max_results=num_results)
        return [result['body'] for result in results]

def get_embedding(text):
    """Generate embedding for text using nomic-embed-text."""
    response = ollama_client.embeddings(model='nomic-embed-text', prompt=text)
    return response['embedding']

def cosine_similarity(vec1, vec2):
    """Calculate cosine similarity between two vectors."""
    dot_product = sum(a * b for a, b in zip(vec1, vec2))
    norm1 = sum(a ** 2 for a in vec1) ** 0.5
    norm2 = sum(b ** 2 for b in vec2) ** 0.5
    # if both norm1 and norm2 are non-zero, else return 0
    return dot_product / (norm1 * norm2) if norm1 and norm2 else 0

def get_most_relevant_context(query, search_results):
    """Find the most relevant search result using embeddings."""
    query_embedding = get_embedding(query)
    similarities = []
    for result in search_results:
        result_embedding = get_embedding(result)
        similarity = cosine_similarity(query_embedding, result_embedding)
        similarities.append(similarity)
    if similarities:
        max_index = similarities.index(max(similarities))
        return search_results[max_index]
    return None



# --------------------------
# Database Configuration
# --------------------------
def get_db():
    """Get or create SQLite database connection."""
    if 'db' not in g:
        g.db = sqlite3.connect('chatbot.db')
        g.db.execute('''CREATE TABLE IF NOT EXISTS messages
                     (id INTEGER PRIMARY KEY AUTOINCREMENT,
                      role TEXT,
                      content TEXT,
                      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)''')
    return g.db

@app.teardown_appcontext
def close_db(error=None):
    """Close database connection at end of request."""
    db = g.pop('db', None)
    if db is not None:
        db.close()

# --------------------------
# Chat Routes
# --------------------------
def save_message(role, content):
    """Save message to database."""
    with app.app_context():
        db = get_db()
        db.execute(
            'INSERT INTO messages (role, content) VALUES (?, ?)',
            (role, content)
        )
        db.commit()

@app.route('/')
def index():
    """Render chat interface with history."""
    db = get_db()
    history = db.execute(
        '''
        SELECT role, content 
        FROM (
            SELECT role, content, timestamp 
            FROM messages 
            ORDER BY timestamp DESC 
            LIMIT 10
        ) AS recent 
        ORDER BY timestamp ASC
        '''
    ).fetchall()
    return render_template('index.html', history=history)

@app.route('/chat', methods=['POST'])
def chat():
    """Handle AJAX chat requests."""
    data = request.json
    user_input = data.get('message')
    search_enabled = data.get('search', False)
    
    # Save user message immediately
    save_message('user', user_input)
    
    # Stream bot response
    def generate():
        try:
            # Step 1: Reasoning with deepseek-r1:1.5b -> reason:latest 
            r1_response = ollama_client.chat(
                model='reason',
                messages=[{'role': 'user', 'content': user_input}],
                stream=False
            )['message']['content']
            
            # Step 2: Get context if search is enabled
            context = None
            if search_enabled:
                search_results = perform_search(user_input)
                if search_results:
                    context = get_most_relevant_context(user_input, search_results)
            
            # Step 3: Combine r1_response and context for text generation model -> mistral:7b
            if context:
                combined_input = f"Based on: {r1_response} and context: {context}. {user_input}. Thank you."
            else:
                combined_input = f"Based on: {r1_response}. {user_input}. Thank you."
            
            # Step 4: Stream final response with mistral:7b
            full_response = []
            for chunk in ollama_client.chat(
                model='mistral:7b',
                messages=[{'role': 'user', 'content': combined_input}],
                stream=True
            ):
                content = chunk['message']['content']
                full_response.append(content)
                yield f"data: {json.dumps({'token': content})}\n\n"
            
            save_message('assistant', ''.join(full_response))
        except Exception as e:
            error_message = f"Error: {str(e)}"
            yield f"data: {json.dumps({'token': error_message})}\n\n"
            save_message('assistant', error_message)
    
    return Response(generate(), mimetype='text/event-stream')
    



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)