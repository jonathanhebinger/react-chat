import React, { useState } from 'react';
import { STYLE } from '../styles';

const Error = (
  <div className="text-red-500">
    Le nom d'utilisateur doit au moins avoir 3 caractères.
  </div>
);

export function Login({ onLogin }: { onLogin: (user: string) => void }) {
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleLogin() {
    if (user.length >= 3) {
      setError(false);
      onLogin(user);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col space-y-2 p-4">
      <input
        placeholder="User"
        className={STYLE.INPUT}
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {error && Error}
      <button className={STYLE.BUTTON} onClick={handleLogin}>
        Se Connecter
      </button>
    </div>
  );
}
