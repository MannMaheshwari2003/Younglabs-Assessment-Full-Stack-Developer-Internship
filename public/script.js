
document.getElementById('nameInput').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;
    input.value = value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim(); 
    const responseMessage = document.getElementById('responseMessage');

    if (!name) {
        responseMessage.textContent = 'Name is required.';
        responseMessage.style.opacity = 1;
        return;
    }

    fetch(`http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                responseMessage.textContent = data.error;
            } else {
                responseMessage.textContent = data.message;
            }
            responseMessage.style.opacity = 1;
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.textContent = 'An error occurred. Please try again.';
            responseMessage.style.opacity = 1;
        });
});