import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { useMessage } from '../hooks/useMessages';
import { STYLE } from '../styles';
import { Message } from './Message';

export function Room() {
  const user = useContext(UserContext);

  const { addMessage, messages } = useMessage();

  const [text, setText] = useState('');

  function handleSend() {
    if (!text) return;

    const date = Date.now();
    const message = { user, text, date };

    addMessage(message);
    setText('');
  }

  const Messages = messages.map((message) => {
    return <Message message={message} key={message.user + message.date} />;
  });

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
