export default function Board({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);
  // function handleSelectSquare(rowIdx, colIdx) {
  //   setGameBoard((prevBoard) => {
  //     // immutable update
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIdx][colIdx] = activePlayer;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
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
