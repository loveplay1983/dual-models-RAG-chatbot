const converter = new showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
    disableForced4SpacesIndentedSublists: true,
    literalMidWordUnderscores: true,
    excludeTrailingPunctuationFromURLs: true,
    parseImgDimensions: true,
    openLinksInNewWindow: true,
    sanitize: true
});

// Render Markdown for existing messages on page load and scroll to bottom
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messages = chatBox.querySelectorAll('.message.bot');
    messages.forEach(message => {
        const rawMarkdown = message.getAttribute('data-raw');
        const contentDiv = message.querySelector('.message-content');
        contentDiv.innerHTML = converter.makeHtml(rawMarkdown);
    });
    // Scroll to the bottom after rendering history
    chatBox.scrollTop = chatBox.scrollHeight;
});


// Handle copy button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const messageDiv = e.target.closest('.message');
        const rawMarkdown = messageDiv.getAttribute('data-raw');
        navigator.clipboard.writeText(rawMarkdown)
            .then(() => alert('Markdown copied to clipboardマークダウンをクリップボードにコピーしました!'))
            .catch(err => console.error('Copy failedコピーに失敗しました:', err));
    }
});


// Handle form submission and streaming response
document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.querySelector('input[name="message"]');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value.trim();
    const searchEnabled = document.getElementById('search-toggle').checked;
    
    if (!userMessage) return;

    chatBox.innerHTML += `<div class="message user">${userMessage}</div>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot';
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    botMessageDiv.appendChild(contentDiv);
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    botMessageDiv.appendChild(copyBtn);
    chatBox.appendChild(botMessageDiv);

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ message: userMessage, search: searchEnabled })
        });
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let partial = '';
        let fullMarkdown = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            partial += decoder.decode(value, { stream: true });
            const lines = partial.split('\n\n');
            partial = lines.pop();

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = JSON.parse(line.slice(6));
                    fullMarkdown += data.token;
                    contentDiv.innerHTML = converter.makeHtml(fullMarkdown);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
            }
        }
        botMessageDiv.setAttribute('data-raw', fullMarkdown); // Set raw Markdown after streaming
    } catch (error) {
        console.error('Chat errorチャットエラー:', error);
        botMessageDiv.className = 'message error';
        contentDiv.textContent = `Errorエラー: ${error.message}`;
    }
});

// Enter key binding
document.querySelector('input[name="message"]').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('chat-form').dispatchEvent(new Event('submit'));
    }
});