import { useCallback, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "keyDown": {
      return { ...state, guessed: [...state.guessed, action.payload.key] };
    }
    case "won": {
      return { ...state, won: true };
    }
    case "lost": {
      return { ...state, gameOver: true };
    }
    case "wrongGuess": {
      return { ...state, lives: state.lives - 1 };
    }
    case "reset": {
      return { ...state, won: false, gameOver: false, guessed: [], lives: 3 };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  guessed: [],
  won: false,
  gameOver: false,
  lives: 3
};

const useStatistics = (word) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* won handler */
  useEffect(() => {
    if ([...word].every((char) => state.guessed.includes(char))) {
      dispatch({ type: "won" });
    }
  }, [state.guessed, word]);

  /* wrong guess handler */
  useEffect(() => {
    if (state.guessed.filter((char) => !word.includes(char)).length === 3) {
      dispatch({ type: "lost" });
    }
  }, [state.guessed, word]);

  /* reset handler */
  const resetGame = () => {
    dispatch({ type: "reset" });
  };

  /* add character to guessed array */
  const addKeyToGuessed = useCallback(
    (key) => {
      if (!word.includes(key)) {
        dispatch({ type: "wrongGuess" });
      }
      dispatch({ type: "keyDown", payload: { key } });
    },
    [word]
  );

  /* key press handler */
  useEffect(() => {
    const keyPressHandler = (e) => {
      if (state.guessed.includes(e.key)) return;
      addKeyToGuessed(e.key);
    };

    document.addEventListener("keypress", keyPressHandler);

    if (state.lives === 0 || state.won) {
      document.removeEventListener("keypress", keyPressHandler);
    }

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [state.won, state.guessed, addKeyToGuessed, state.lives]);

  return [state, resetGame];
};

export default useStatistics;
