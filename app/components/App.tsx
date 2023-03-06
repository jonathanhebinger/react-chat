import React from 'react';
import { useState } from 'react';
import { Login } from './Login';
import { Logout } from './Logout';
import { Room } from './Room';

export default function App() {
  const [user, setUser] = useState('');

  function handleLogout() {
    setUser('');
  }
  function handleLogin(user: string) {
    setUser(user);
  }

  return (
    <div className="">
      {!user && <Login onLogin={handleLogin} />}
      {user && <Logout onLogout={handleLogout} />}
      {user && <Room />}
    </div>
  );
}
