import { useEffect } from "react";
import WordBox from "./components/wordBox/WordBox";
import useRandomWord from "./hooks/useRandomWord";
import useStatistics from "./hooks/useStatistics";
import "./styles.css";

export default function App() {
  const [word, changeWord] = useRandomWord();

  const [
    { won, gameOver, guessed },
    { resetGame, addKeyToGuessed }
  ] = useStatistics(word);

  /* key press handler */
  useEffect(() => {
    const keyPressHandler = (e) => {
      if (guessed.includes(e.key)) return;
      addKeyToGuessed(e.key);
    };

    document.addEventListener("keypress", keyPressHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [guessed, addKeyToGuessed]);

  const resetHandler = () => {
    resetGame();
    changeWord();
  };

  return (
    <>
      <WordBox word={word} guessedLetters={guessed} />
      {won && <button onClick={resetHandler}>Reset</button>}
    </>
  );
}
