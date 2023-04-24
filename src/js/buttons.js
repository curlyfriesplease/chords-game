/* eslint-disable no-unused-vars */
import React from 'react';
import { formattedChordName } from './onclick';
import { newChord } from './onclick';
import { piano } from '../App';
import { useContext } from 'react';
import { ScoreContext } from './scoreContext';

export const AnswerButton = ({ chordName }) => {
  const clickActions = () => {
    console.log('::: 🎼 AnswerButton clicked 🎼 chordName: ' + chordName);
    checkCorrectness(chordName);
    newChord(piano);
  };

  const { currentScore, setCurrentScore } = useContext(ScoreContext);

  const checkCorrectness = (chord) => {
    const feedbackText = document.getElementById('feedbackText');
    // eslint-disable-next-line eqeqeq
    if (chord == formattedChordName) {
      console.log('::: ✅ Correct! Button was clicked: ' + chord);
      setCurrentScore(currentScore + 1);
      console.log('::: Score is now ' + currentScore);
      feedbackText.textContent = 'Correct. That was ' + formattedChordName;
      feedbackText.className = 'previousAnswerCorrect';
    } else {
      console.log(
        '::: ❌ Wrong. Button was clicked: ' +
          chord +
          '. Correct answer was: ' +
          formattedChordName
      );
      feedbackText.textContent = 'That was ' + formattedChordName;
      feedbackText.className = 'previousAnswerWrong';
    }
  };

  return (
    <div className="buttonBlock">
      <button className="answerButton bigClicky" onClick={clickActions}>
        {chordName}
      </button>
    </div>
  );
};

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
