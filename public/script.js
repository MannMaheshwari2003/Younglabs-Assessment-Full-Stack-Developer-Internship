document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    console.log('Name entered:', name); 

    if (!name) {
        alert('Name is required.');
        return;
    }

    fetch(`http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`)
        .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data); 
            if (data.error) {
                document.getElementById('responseMessage').textContent = data.error;
            } else {
                document.getElementById('responseMessage').textContent = data.message;
            }
            document.getElementById('responseMessage').style.opacity = 1;
        })
        .catch(error => {
            console.error('Error:', error); 
            document.getElementById('responseMessage').textContent = 'An error occurred. Please try again.';
            document.getElementById('responseMessage').style.opacity = 1;
        });
});