import BoardSquare from "./BoardSquare";

export default function GameBoard({ squares, xIsNext, onPlay }) {
  const gameBoard = squares.map((value, index) => (
    <BoardSquare
      key={index}
      value={value}
      onSquareClick={() => handleSquareClick(index)}
    />
  ));

  const handleSquareClick = (i) => {
    const nextSquares = squares.slice();

    if (nextSquares[i] || calculateWinner(squares)) {
      return;
    }

    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status = "";

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <section className="game-board">
      <p className="status">{status}</p>
      <div className="grid">{gameBoard}</div>
    </section>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
