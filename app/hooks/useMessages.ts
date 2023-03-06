import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';
import { IMessage } from '../types';

export function useMessage() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const sortedMessages = useMemo(() => {
    return messages.sort((messageA, messageB) => {
      return messageB.date - messageA.date;
    });
  }, [messages]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('date', 'desc'),
      limit(50)
    );

    return onSnapshot(messagesQuery, (querySnapshot) => {
      const messagesBuffer: IMessage[] = [];

      querySnapshot.forEach((doc) => {
        messages.push(doc.data() as IMessage);
      });

      setMessages((messages) => [...messages, ...messagesBuffer]);
    });
  }, []);

  async function addMessage(message: IMessage) {
    await addDoc(collection(db, 'messages'), message);

    setMessages((messages) => [...messages, message]);
  }

  return { messages, sortedMessages, addMessage };
}
