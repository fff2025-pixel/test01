import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Admin() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const res = await fetch('/api/decks');
      const data = await res.json();
      setDecks(data);
    }
    fetchDecks();
  }, []);

  return (
    <div>
      <Head>
        <title>Admin - Flashcards</title>
      </Head>
      <h1>Admin</h1>
      <h2>Manage Decks</h2>
      <ul>
        {decks.map(deck => (
          <li key={deck.id}>{deck.title}</li>
        ))}
      </ul>
    </div>
  );
}