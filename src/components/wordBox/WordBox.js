import { memo } from "react";

import { charContainer } from "./WordBox.module.css";

import CharBox from "./CharBox";

const WordBox = ({ word, guessedLetters }) => {
  return (
    <>
      <ul className={charContainer}>
        {[...word].map((char, index) => (
          <CharBox correct={guessedLetters.includes(char)} key={index}>
            {char}
          </CharBox>
        ))}
      </ul>
    </>
  );
};

export default memo(WordBox);
