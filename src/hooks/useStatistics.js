import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "keyDown": {
      return { ...state, guessed: [...state.guessed, action.payload.key] };
    }
    case "won": {
      return { ...state, won: true };
    }
    case "lose": {
      return { ...state, won: false, gameOver: true, guessed: [] };
    }
    case "reset": {
      return { ...state, won: false, gameOver: false, guessed: [] };
    }
    default: {
      return state;
    }
  }
};
const initialState = {
  guessed: [],
  won: false,
  gameOver: false
};

const useStatistics = (word) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* won handler */
  useEffect(() => {
    if ([...word].every((char) => state.guessed.includes(char))) {
      dispatch({ type: "won" });
    }
  }, [state.guessed, word]);

  /* reset handler */
  const resetGame = () => {
    dispatch({ type: "reset" });
  };

  /* add character to guessed array */

  const addKeyToGuessed = (key) => {
    dispatch({ type: "keyDown", payload: { key } });
  };

  return [state, { resetGame, addKeyToGuessed }];
};

export default useStatistics;
