import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import "./TicTacToe.css";

export default function TicTacToe() {
  return (
    <article className="game grid">
      <GameBoard />
      <GameInfo />
    </article>
  );
}
