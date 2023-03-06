import React from 'react';
import { IMessage } from '../types';

export function Message({ message }: { message: IMessage }) {
  const date = new Date(message.date);
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <div className="flex flex-col space-y-4 border rounded-lg">
      <div className="flex space-x-4">
        <div className="w-20">{time}</div>
        <div className="">{message.user}</div>
      </div>
      <div className="">{message.text}</div>
    </div>
  );
}
