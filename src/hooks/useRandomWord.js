import { useCallback, useState } from "react";

import { words } from "../words.json";
const useRandomWord = () => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const setRandomWord = useCallback(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return [word, setRandomWord];
};

export default useRandomWord;
