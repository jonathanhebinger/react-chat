import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../../firebase';
import { IMessage } from '../types';

export function useMessage() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('date', 'desc'),
      limit(50)
    );

    return onSnapshot(messagesQuery, (querySnapshot) => {
      const messages: IMessage[] = [];

      querySnapshot.forEach((doc) => {
        messages.push(doc.data() as IMessage);
      });

      setMessages(messages);
    });
  }, []);

  async function addMessage(message: IMessage) {
    await addDoc(collection(db, 'messages'), message);

    setMessages((messages) => [...messages, message]);
  }

  return { messages, addMessage };
}
