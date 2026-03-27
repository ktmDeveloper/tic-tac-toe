export default function Board({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((symbol, colIdx) => (
              <li key={colIdx}>
                <button
                  disabled={symbol !== null}
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
