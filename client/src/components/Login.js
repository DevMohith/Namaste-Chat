import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    }

   return (
    <div>
       <input type= "text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
       <input type= "password" placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} />
       <button onClick={handleLogin}>Login</button>
    </div>
   );
};

export default Login;