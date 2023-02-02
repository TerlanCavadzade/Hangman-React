import { memo } from "react";

import { charContainer } from "./WordBox.module.css";

import CharBox from "./CharBox";

const WordBox = ({ word, guessedLetters }) => {
  return (
    <div>
      <ul className={charContainer}>
        {[...word].map((char, index) => (
          <CharBox correct={guessedLetters.includes(char)} key={index}>
            {char}
          </CharBox>
        ))}
      </ul>
    </div>
  );
};

export default memo(WordBox);
