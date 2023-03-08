import React from 'react';
import { useState } from 'react';
import { UserContext } from '../contexts/userContext';
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
    /** TODO : renseigner la valeur du context User */
    <UserContext.Provider value={''}>
      <div className="flex flex-col m-4 space-y-4 h-screen pb-20">
        {/** TODO : afficher les éléments selon l'état de l'utilisateur */}
        {/** AIDE : états possibles : connecté (user !== "") ou déconnecté */}
        {true && <Login onLogin={handleLogin} />}
        {false && <Logout onLogout={handleLogout} />}
        {false && <Room />}
      </div>
    </UserContext.Provider>
  );
}
