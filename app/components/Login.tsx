import React, { useState } from 'react';
import { STYLE } from '../styles';

export function Login({ onLogin }: { onLogin: (user: string) => void }) {
  const [user, setUser] = useState('');

  function handleLogin() {
    if (user.length >= 3) onLogin(user);
  }

  return (
    <div className="flex flex-col space-y-2 p-4">
      <input
        className={STYLE.INPUT}
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className={STYLE.BUTTON} onClick={handleLogin}>
        Se Connecter
      </button>
    </div>
  );
}
