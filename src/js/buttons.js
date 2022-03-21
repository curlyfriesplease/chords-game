/* eslint-disable no-unused-vars */
import React from "react";
import { currentScore, formattedChordName } from "./onclick";
import { updateScore, newChord } from "./onclick";
import { piano } from "../App";

export class AnswerButton extends React.Component {
  clickActions = () => {
    this.checkCorrectness(this.props.chordName);
    newChord(piano);
  };

  checkCorrectness = (chord) => {
    const feedbackText = document.getElementById("feedbackText");
    // eslint-disable-next-line eqeqeq
    if (chord == formattedChordName) {
      console.log("::: ✅ Correct! Button was clicked: " + chord);

      updateScore(1);
      console.log("::: Score is now " + currentScore);

      feedbackText.textContent = "Correct. That was " + formattedChordName;
      feedbackText.className = "previousAnswerCorrect";
    } else {
      console.log(
        "::: ❌ Wrong. Button was clicked: " +
          chord +
          ". Correct answer was: " +
          formattedChordName
      );

      feedbackText.textContent = "Wrong. That was " + formattedChordName;
      feedbackText.className = "previousAnswerWrong";
    }
  };

  render() {
    return (
      <div className="buttonBlock">
        <button
          className="answerButton bigClicky"
          onClick={() => {
            this.clickActions();
          }}
        >
          {this.props.chordName}
        </button>
      </div>
    );
  }
}

export class AnswerButtonsContainer extends React.Component {
  render() {
    return (
      <div id="answerButtonsContainer">
        <div id="answerButtonsFirstRow" className="buttonsRow">
          <div className="spacerBlock"></div>
          <AnswerButton chordName="C#" />
          <AnswerButton chordName="D#" />
          <div className="buttonBlock"></div>
          <AnswerButton chordName="F#" />
          <AnswerButton chordName="G#" />
          <AnswerButton chordName="A#" />
          <div className="spacerBlock"></div>
        </div>
        <div id="answerButtonsSecondRow" className="buttonsRow">
          <AnswerButton chordName="C" />
          <AnswerButton chordName="D" />
          <AnswerButton chordName="E" />
          <AnswerButton chordName="F" />
          <AnswerButton chordName="G" />
          <AnswerButton chordName="A" />
          <AnswerButton chordName="B" />
        </div>
        <br />
        <div id="answerButtonsThirdRow" className="buttonsRow minorKeyButtons">
          <div className="spacerBlock"></div>
          <AnswerButton chordName="C#m" />
          <AnswerButton chordName="D#m" />
          <div className="buttonBlock"></div>
          <AnswerButton chordName="F#m" />
          <AnswerButton chordName="G#m" />
          <AnswerButton chordName="A#m" />
          <div className="spacerBlock"></div>
        </div>
        <div id="answerButtonsFourthRow" className="buttonsRow minorKeyButtons">
          <AnswerButton chordName="Cm" />
          <AnswerButton chordName="Dm" />
          <AnswerButton chordName="Em" />
          <AnswerButton chordName="Fm" />
          <AnswerButton chordName="Gm" />
          <AnswerButton chordName="Am" />
          <AnswerButton chordName="Bm" />
        </div>
      </div>
    );
  }
}
