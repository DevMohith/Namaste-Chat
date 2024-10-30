const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.json());  // I used this command for parsing JSON from client to server understanding

app.get('/',(req, res) => {
  res.send("Welcome to Namaste Chat!");
});

io.on('connection', (socket) => {
   console.log('A user connected');
   socket.on('disconnect', () => {
    console.log('User disconnected');
   });
});

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
     });

     // adding user authentication router to this server

     const authRoutes = require('./routes/auth');
     app.use('/auth', authRoutes);


     // Hosting a DataBase Connection

     const { pool } = require('pg');
     const pool = new pool({
        user: 'postgres',
        host: 'localhost',
        database: 'namaste_chat',
        password: 'postgres',
        port: 5432,
     })

     pool.connect().then(() => console.log('Connected to PostgreSQL')).catch(err => console.log(err));