import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { useMessages } from '../hooks/useMessages';
import { STYLE } from '../styles';
import { IMessage } from '../types';
import { Message } from './Message';

export function Room() {
  const user = useContext(UserContext);
  const [text, setText] = useState('');

  // TODO : récupérer la liste de message
  // AIDE : récupérer les valeurs du custom hook "useMessages"

  function handleSend() {
    if (!text) return;

    const message: IMessage = {
      user,
      text,
      date: Date.now(),
    };

    // TODO : ajouter le nouveau message
    // TODO : réinitialiser le state "text"
  }

  // TODO : transformer la liste "messages" en liste d'éléments JSX Message
  const Messages = [];

  return (
    <div className="flex flex-col space-y-2 flex-grow max-h-full">
      <div className="flex-grow flex flex-col space-y-2 overflow-auto px-2">
        {Messages}
      </div>
      <div className="flex flex-col space-y-2">
        <textarea
          className={STYLE.INPUT}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={STYLE.BUTTON} onClick={handleSend}>
          Envoyer
        </button>
      </div>
    </div>
  );
}
