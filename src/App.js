import "./css/App.css";
import "./css/Buttons.scss";
import "./css/Header.css";
import "./css/Piano.css";
import "./css/Feedback.css";
import "./css/Homescreen.css";
import chordsLogo from "./media/chords.png";

import { newChord } from "./js/onclick";
import { newPiano } from "./js/piano.js";
import React, { useEffect } from "react";

import { ContentBody, HomeScreen } from "./js/mainscreens";
// import $ from "jquery";

export let piano;

function App() {
  useEffect(() => {
    piano = newPiano();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span
          className="material-icons"
          id="homeButton"
          onClick={() => newChord(piano)}
        >
          home
        </span>
        <img src={chordsLogo} alt="Piano chord test" />
        <span className="material-icons">settings</span>
      </header>
      <div id="pianoContainer"></div>
      <HomeScreen />
      <ContentBody />
    </div>
  );
}

export default App;
