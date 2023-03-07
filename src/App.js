import React, { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import GuessContext from "./store/guess-context";

function App() {
  const guessCtx = useContext(GuessContext);

  return (
    <div className={guessCtx.winGuess ? "app" : ""}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
