import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { useMessage } from '../hooks/useMessages';
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
    <div className="">
      <div className="">{Messages}</div>
      <div className="">
        <input
          className=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="" onClick={handleSend}>
          Envoyer
        </button>
      </div>
    </div>
  );
}
