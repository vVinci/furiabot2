document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const typingIndicator = document.getElementById('typing-indicator');
    
    // OpenRouter API key
    const apiKey = '';
    
    // Message history for context
let messageHistory = [
  {
      role: 'system',
      content: "You are an AI assistant that ONLY discusses about the company FURIA GG and all the games FURIA has a team in. If users ask about any other topics, politely redirect the conversation back to FURIA GG. Your knowledge includes the games the company plays, the players, the owners, the history of the company, and other aspects of FURIA GG, you can also talk about the games like counter-strike, valorant, apex legends, etc and all the mechanics of the games and strategies of the gmaes. Do not answer questions unrelated to FURIA GG or other gamesunder any circumstances."
  },
  {
      role: 'assistant',
      content: "Hello! I'm your Counter-Strike assistant. I can help you with anything related to CS:GO or CS2 - from gameplay tips and strategies to information about maps, weapons, professional players, and tournaments. What would you like to know about Counter-Strike today?"
  }
];

    // Function to add a message to the chat
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;

        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.textContent = isUser ? 'U' : 'AI';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to get AI response from OpenRouter API
    async function getAIResponse(userMessage) {
        // Show typing indicator
        typingIndicator.style.display = 'block';
        
        // Prepare messages for API
        const apiMessages = messageHistory.map(msg => {
            return {
                role: msg.role,
                content: [
                    {
                        type: "text",
                        text: msg.content
                    }
                ]
            };
        });
        
        // Add user message
        apiMessages.push({
            role: 'user',
            content: [
                {
                    type: "text",
                    text: userMessage
                }
            ]
        });
        
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "HTTP-Referer": window.location.origin,
                    "X-Title": "AI Chat Assistant",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "meta-llama/llama-4-maverick:free",
                    "messages": apiMessages
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error Response:', errorData);
                throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
            }
            
            const data = await response.json();
            const aiResponseContent = data.choices[0].message.content;
            
            // Extract text from response (may be an array for multimodal responses)
            let aiMessage;
            if (Array.isArray(aiResponseContent)) {
                // Find text content in the array
                const textContent = aiResponseContent.find(item => item.type === "text");
                aiMessage = textContent ? textContent.text : "No text response received";
            } else {
                // Plain text response
                aiMessage = aiResponseContent;
            }
            
            // Add AI response to history (in simplified format)
            messageHistory.push({
                role: 'assistant',
                content: aiMessage
            });
            
            // Keep history at a reasonable size (last 10 messages)
            if (messageHistory.length > 10) {
                messageHistory = messageHistory.slice(messageHistory.length - 10);
            }
            
            // Hide typing indicator
            typingIndicator.style.display = 'none';
            
            return aiMessage;
        } catch (error) {
            console.error('Error calling API:', error);
            typingIndicator.style.display = 'none';
            return `Desculpe, encontrei um erro: ${error.message}. Por favor, tente novamente mais tarde.`;
        }
    }

    // Handle send button click
    async function handleSend() {
        const message = userInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, true);
            userInput.value = '';

            // Get and add AI response
            const response = await getAIResponse(message);
            addMessage(response, false);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // Auto-resize textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto';
        userInput.style.height = Math.min(userInput.scrollHeight, 150) + 'px';
    });
}); 