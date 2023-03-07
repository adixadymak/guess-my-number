import React, { useContext } from "react";
import GuessContext from "../store/guess-context";

import "../App.css";

const Header = () => {
  const guessCtx = useContext(GuessContext);
  const winGuess = guessCtx.winGuess;

  const playAgainHandler = () => {
    guessCtx.setScore(10);
    guessCtx.setMessage("Start guessing...");
    guessCtx.setGuess("");
    guessCtx.setSecretNum(Math.trunc(Math.random() * 20 + 1));
    guessCtx.setWinGuess(false);
  };

  return (
    <div className="header">
      <h1>Guess My Number!</h1>
      <p className="between">
        (Between 1 and 20) Build with React by Imran Yaqub.
      </p>
      <button className={"btn again"} onClick={playAgainHandler}>
        Again!
      </button>
      <div className={winGuess ? "number-win" : "number"}>
        {winGuess ? guessCtx.secretNum : "?"}
      </div>
    </div>
  );
};

export default Header;
