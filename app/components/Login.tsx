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
      // TODO : notifier le parent de la validation du nom d'utilisateur
      // NOTE : utiliser la prop onLogin
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col space-y-2 p-4">
      <input
        placeholder="User"
        className={STYLE.INPUT}
        // TODO : synchroniser le input et le state user
        // TODO : compléter value et onChange
        // NOTE : utiliser user, setUser et event.target.value
        value={''}
        onChange={(event) => null}
      />
      {error && Error}
      <button className={STYLE.BUTTON} onClick={handleLogin}>
        Se Connecter
      </button>
    </div>
  );
}
