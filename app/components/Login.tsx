import { useState } from 'react';
import React from 'react';

export function Login({ onLogin }: { onLogin: (user: string) => void }) {
  const [user, setUser] = useState('');

  function handleLogin() {
    if (user.length > 3) onLogin(user);
  }

  return (
    <div className="">
      <input
        className=""
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="" onClick={handleLogin}>
        Se Connecter
      </button>
    </div>
  );
}
