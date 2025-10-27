export default function Flashcard({ expression, definition }) {
  return (
    <div>
      <h2>{expression}</h2>
      <p>{definition}</p>
    </div>
  );
}