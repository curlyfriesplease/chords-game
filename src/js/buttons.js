/* eslint-disable no-unused-vars */
import React from "react";
import { currentScore, formattedChordName } from "./onclick";
import { updateScore, newChord } from "./onclick";

export class AnswerButton extends React.Component {
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
            this.checkCorrectness(this.props.chordName);
          }}
        >
          {this.props.chordName}
        </button>
      </div>
    );
  }
}
