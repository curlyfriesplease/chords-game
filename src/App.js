import "./css/App.css";
import "./css/Buttons.scss";
import "./css/Header.css";
import "./css/Piano.css";
import "./css/Feedback.css";
import chordsLogo from "./media/chords.png";

import { newChord } from "./js/onclick";
import { newPiano } from "./js/piano.js";
import React, { useEffect } from "react";
import { AnswerButton, AnswerButtonsContainer } from "./js/buttons.js";
import { Feedback } from "./js/feedback";
import { currentScore } from "./js/onclick";

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
      <div id="contentBody">
        <div id="pianoContainer"></div>
        <br />
        <Feedback score={currentScore} />
        <br />

       <AnswerButtonsContainer />

      </div>
    </div>
  );
}

//export const piano = newPiano()

export default App;

{
  /* <script>$("#homeButton" ).click(function() {
  alert( "Handler for .click() called." );
  newChord(piano)
});</script> */
}
