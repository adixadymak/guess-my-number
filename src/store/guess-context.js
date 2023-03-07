import React, { useEffect, useState } from "react";

const GuessContext = React.createContext();

export const GuessContextProvider = (props) => {
  const [secretNum, setSecretNum] = useState();
  const [score, setScore] = useState(10);
  const [message, setMessage] = useState("Start guessing...");
  const [guess, setGuess] = useState("");

  // let secretNum;
  const [winGuess, setWinGuess] = useState(false);

  useEffect(() => {
    setSecretNum(Math.trunc(Math.random() * 20 + 1));
  }, [setSecretNum]);

  return (
    <GuessContext.Provider
      value={{
        secretNum,
        setSecretNum,
        winGuess,
        setWinGuess,
        score,
        setScore,
        message,
        setMessage,
        guess,
        setGuess,
      }}
    >
      {props.children}
    </GuessContext.Provider>
  );
};

export default GuessContext;
