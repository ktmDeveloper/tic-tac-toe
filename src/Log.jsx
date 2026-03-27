export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns &&
        gameTurns.map((game, idx) => (
          <li key={idx}>
            {`${game.player} Clicked: ${game.square.rowIdx} ${game.square.colIdx}`}
          </li>
        ))}
    </ol>
  );
}
