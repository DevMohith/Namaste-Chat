const express = require('express');
const router = express.Router();

//Mocking database for users (Later we need to replace with actual DB)
const users = [];

router.post('/register', (req, res) => {
    console.log('Register endpoint hit', req.body);
    const { username, password } = req.body;
    // Adding basic user to "database"
  users.push({ username, password });
  res.send({ message: 'User registered successfully!' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send({ message: 'Login Successful!' });
    
    } else {
        res.status(400).send({ message: 'Invalid credentials (Take time and remember your credentials:) )' })
    }
});

module.exports = router;