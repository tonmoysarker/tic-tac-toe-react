import BoardSquare from "./BoardSquare";

export default function GameBoard() {
  return (
    <section className="game-board grid">
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
      <BoardSquare value={"X"} />
    </section>
  );
}
