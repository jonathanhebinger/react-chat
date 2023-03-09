import React from 'react';
import { STYLE } from '../styles';

export function Logout({ onLogout }: { onLogout: () => void }) {
  return (
    <button className={STYLE.BUTTON} onClick={onLogout}>
      Se Déconnecter
    </button>
  );
}
