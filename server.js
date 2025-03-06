const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: 'Name is required.' });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});