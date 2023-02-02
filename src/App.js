import "./styles.css";

import Layout from "./components/layout/Layout";
import Button from "./components/UI/Button";
import Statistics from "./components/statistics/Statistics";
import WordBox from "./components/wordBox/WordBox";

import useRandomWord from "./hooks/useRandomWord";
import useGameHandler from "./hooks/useGameHandler";

export default function App() {
  const [word, changeWord] = useRandomWord();

  const [{ won, gameOver, guessed, lives }, resetGame] = useGameHandler(word);

  const resetHandler = () => {
    resetGame();
    changeWord();
  };

  return (
    <Layout>
      <Statistics won={won} lives={lives} word={word} lost={gameOver} />
      <WordBox word={word} guessedLetters={guessed} />
      {(gameOver || won) && <Button onClick={resetHandler}>Reset</Button>}
    </Layout>
  );
}
