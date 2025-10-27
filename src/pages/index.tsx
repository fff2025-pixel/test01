import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
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
        <title>Flashcards</title>
      </Head>
      <h1>Decks</h1>
      <ul>
        {decks.map(deck => (
          <li key={deck.id}>{deck.title}</li>
        ))}
      </ul>
    </div>
  );
}