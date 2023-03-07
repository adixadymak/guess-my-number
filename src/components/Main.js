import React, { useState, useContext } from "react";
import "../App.css";
import GuessContext from "../store/guess-context";

const Main = () => {
  const [highscore, setHighscore] = useState(0);

  const guessCtx = useContext(GuessContext);
  const score = guessCtx.score;
  const message = guessCtx.message;
  const guess = guessCtx.guess;

  let secretNum = guessCtx.secretNum;

  const inputChangeHander = (e) => {
    guessCtx.setGuess(Number(e.target.value));
  };

  const checkGuessHandler = () => {
    if (guess === "") {
      guessCtx.setMessage("⛔️ No number!");
    } else if (guess === 0 || guess > 20) {
      guessCtx.setMessage("Ophs! Enter number between 1 and 20");
    } else if (guess !== secretNum) {
      if (score > 1) {
        guessCtx.setScore(score - 1);

        guessCtx.setMessage(guess > secretNum ? "📈 Too high!" : "📉 Too low!");
      } else {
        guessCtx.setScore(0);
        guessCtx.setMessage("💥 You lost the game!");
      }
    } else if (guess === secretNum) {
      guessCtx.setMessage("🎉 Correct Number!");

      // change the background color of the page to green
      guessCtx.setWinGuess(true);

      if (score > highscore) {
        setHighscore(score);
      }
    }
  };

  return (
    <main>
      <section className="left">
        <input
          type="number"
          className="guess"
          onChange={inputChangeHander}
          value={guess}
        />
        <button
          className={guessCtx.winGuess ? " winGuess" : "btn check"}
          onClick={checkGuessHandler}
          disabled={guessCtx.winGuess}
        >
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
};

export default Main;
