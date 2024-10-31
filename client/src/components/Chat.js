import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chatMessage', (msg) => setMessages((prev) => [...prev, msg]));
    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit('chatMessage', message);
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;