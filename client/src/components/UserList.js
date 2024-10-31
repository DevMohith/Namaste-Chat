import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('userList', (userList) => setUsers(userList));
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h3>Online Users</h3>
      <ul>
        {users.map((user, idx) => <li key={idx}>{user}</li>)}
      </ul>
    </div>
  );
};

export default UserList;