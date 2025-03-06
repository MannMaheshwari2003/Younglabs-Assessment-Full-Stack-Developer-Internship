document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    console.log('Name entered:', name); // Debugging log

    if (!name) {
        alert('Name is required.');
        return;
    }

    fetch(`http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`)
        .then(response => {
            console.log('Response:', response); // Debugging log
            return response.json();
        })
        .then(data => {
            console.log('Data:', data); // Debugging log
            if (data.error) {
                document.getElementById('responseMessage').textContent = data.error;
            } else {
                document.getElementById('responseMessage').textContent = data.message;
            }
            document.getElementById('responseMessage').style.opacity = 1;
        })
        .catch(error => {
            console.error('Error:', error); // Debugging log
            document.getElementById('responseMessage').textContent = 'An error occurred. Please try again.';
            document.getElementById('responseMessage').style.opacity = 1;
        });
});