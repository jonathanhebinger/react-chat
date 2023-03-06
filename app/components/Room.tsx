import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { useMessage } from '../hooks/useMessages';
import { STYLE } from '../styles';
import { Message } from './Message';

export function Room() {
  const user = useContext(UserContext);

  const { addMessage, sortedMessages } = useMessage();

  const [text, setText] = useState('');

  function handleSend() {
    const date = Date.now();
    const message = { user, text, date };

    addMessage(message);
  }

  const Messages = sortedMessages.map((message) => {
    return <Message message={message} />;
  });

  return (
    <div className="flex flex-col space-y-2 flex-grow">
      <div className="flex-grow flex flex-col space-y-2">{Messages}</div>
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
