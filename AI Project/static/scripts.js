function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('You: ' + userInput);

    // Send user input to the server
    fetch('/get_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: userInput,
        }),
    })
    .then(response => response.json())
    .then(data => {
        var botResponse = 'Bot: ' + data.response;
        appendMessage(botResponse);
    })
    .catch(error => console.error('Error:', error));

    // Clear the user input field
    document.getElementById('user-input').value = '';
}

function appendMessage(message) {
    var chatDiv = document.getElementById('chat');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatDiv.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatDiv.scrollTop = chatDiv.scrollHeight;
}
