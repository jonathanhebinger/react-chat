import React from 'react';

export function Logout({ onLogout }: { onLogout: () => void }) {
  return <button onClick={onLogout}>Se Déconnecter</button>;
}
