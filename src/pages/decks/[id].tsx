import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Deck() {
  const router = useRouter();
  const { id } = router.query;
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchDeck() {
        const res = await fetch(`/api/decks/${id}`);
        const data = await res.json();
        setDeck(data);
      }
      fetchDeck();
    }
  }, [id]);

  if (!deck) return <div>Loading...</div>;

  return (
    <div>
      <h1>{deck.title}</h1>
      <ul>
        {deck.cards.map(card => (
          <li key={card.id}>{card.expression}: {card.definition}</li>
        ))}
      </ul>
    </div>
  );
}