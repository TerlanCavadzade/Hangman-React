import { statisticsContainer } from "./Statistics.module.css";

const Statistics = ({ won, lives, lost, word }) => {
  return (
    <div className={statisticsContainer}>
      <p>You Have {lives} lives</p>
      {won && <p>You Won</p>}
      {lost && <p>You lose the game. Word was {word}</p>}
    </div>
  );
};

export default Statistics;
