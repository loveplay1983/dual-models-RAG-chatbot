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

document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messages = chatBox.querySelectorAll('.message.reasoning, .message.assistant');
    messages.forEach(message => {
        const rawMarkdown = message.getAttribute('data-raw');
        const contentDiv = message.querySelector('.message-content');
        contentDiv.innerHTML = converter.makeHtml(rawMarkdown);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const messageDiv = e.target.closest('.message');
        const rawMarkdown = messageDiv.getAttribute('data-raw');
        navigator.clipboard.writeText(rawMarkdown)
            .then(() => alert('Markdown copied to clipboardマークダウンをクリップボードにコピーしました!'))
            .catch(err => console.error('Copy failedコピーに失敗しました:', err));
    }
});

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

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ message: userMessage, search: searchEnabled })
        });
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let partial = '';
        let reasoningDiv = null;
        let reasoningContentDiv = null;
        let finalDiv = null;
        let finalContentDiv = null;
        let fullReasoningMarkdown = '';
        let fullFinalMarkdown = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            partial += decoder.decode(value, { stream: true });
            const lines = partial.split('\n\n');
            partial = lines.pop();

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = JSON.parse(line.slice(6));
                    if (data.type === 'reasoning') {
                        if (!reasoningDiv) {
                            reasoningDiv = document.createElement('div');
                            reasoningDiv.className = 'message reasoning';
                            reasoningContentDiv = document.createElement('div');
                            reasoningContentDiv.className = 'message-content';
                            reasoningDiv.appendChild(reasoningContentDiv);
                            chatBox.appendChild(reasoningDiv);
                        }
                        fullReasoningMarkdown += data.token;
                        reasoningContentDiv.innerHTML = converter.makeHtml(fullReasoningMarkdown);
                        reasoningDiv.setAttribute('data-raw', fullReasoningMarkdown);
                    } else if (data.type === 'final') {
                        if (!finalDiv) {
                            finalDiv = document.createElement('div');
                            finalDiv.className = 'message assistant';
                            finalContentDiv = document.createElement('div');
                            finalContentDiv.className = 'message-content';
                            finalDiv.appendChild(finalContentDiv);
                            const copyBtn = document.createElement('button');
                            copyBtn.className = 'copy-btn';
                            copyBtn.textContent = 'Copy';
                            finalDiv.appendChild(copyBtn);
                            chatBox.appendChild(finalDiv);
                        }
                        fullFinalMarkdown += data.token;
                        finalContentDiv.innerHTML = converter.makeHtml(fullFinalMarkdown);
                        finalDiv.setAttribute('data-raw', fullFinalMarkdown);
                    } else if (data.type === 'error') {
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'message error';
                        errorDiv.textContent = data.content;
                        chatBox.appendChild(errorDiv);
                    }
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
            }
        }
    } catch (error) {
        console.error('Chat errorチャットエラー:', error);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message error';
        errorDiv.textContent = `Errorエラー: ${error.message}`;
        chatBox.appendChild(errorDiv);
    }
});

document.querySelector('input[name="message"]').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('chat-form').dispatchEvent(new Event('submit'));
    }
});