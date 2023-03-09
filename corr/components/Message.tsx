import React, { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { useTimeLabel } from '../hooks/useTimeLabel';
import { IMessage } from '../types';

export function Message({ message }: { message: IMessage }) {
  const user = useContext(UserContext);
  const time = useTimeLabel(message.date);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-blue-400 text-sm -mb-1">
        <div className="">{message.user === user ? 'Vous' : message.user}</div>
        <div className="">{time}</div>
      </div>
      <div className="text-blue-900">{message.text}</div>
    </div>
  );
}
