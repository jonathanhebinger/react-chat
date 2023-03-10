import React from 'react';
import { useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { Login } from './Login';
import { Logout } from './Logout';
import { Room } from './Room';

export default function AppCorr() {
  const [user, setUser] = useState('');
  const connected = user !== '';

  function handleLogout() {
    setUser('');
  }
  function handleLogin(user: string) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-col m-4 space-y-4 h-screen pb-20">
        {!connected && <Login onLogin={handleLogin} />}
        {connected && <Logout onLogout={handleLogout} />}
        {connected && <Room />}
      </div>
    </UserContext.Provider>
  );
}
