const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    if (users[username]) {
        return res.status(400).send('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = hashedPassword;
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
    res.send('Registration successful');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    if (!users[username]) {
        return res.status(401).send('User does not exist');
    }

    const match = await bcrypt.compare(password, users[username]);
    if (match) {
        res.send('Login successful');
    } else {
        res.status(401).send('Password is incorrect');
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
