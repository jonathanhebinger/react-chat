import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { IMessage } from '../types';

export function useMessages() {
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

  function addMessage(message: IMessage) {
    addDoc(collection(db, 'messages'), message);
  }

  return { messages, addMessage };
}
