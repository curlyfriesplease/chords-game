import React, { useEffect } from "react";
import $ from "jquery";
import { AnswerButtonsContainer } from "./buttons.js";
import { Feedback, ScoreResults } from "./feedback";
import { currentScore, newChord } from "./onclick";
import { piano } from "../App.js";
import { CountDown } from "./timer.js";

export class HomeScreen extends React.Component {
  startGame = () => {
    $("#homescreenDiv").toggle("fast");
    $("#contentBody").toggle("fast");
    // let $newCountdown = $("<CountDown /><span>fdfd</span>")
    // $("#scoreAndTimer").append($newCountdown)
    newChord(piano)
    // CountDown(99);
  };

  render() {
    return (
      <div id="homescreenDiv" onClick={this.startGame}>
        <h1>Click to start</h1>
      </div>
    );
  }
}



export class ContentBody extends React.Component {
  render() {
    return (
      <div id="contentBody">
        {/* <div id="pianoContainer"></div> */}
        <br />
        <Feedback score={currentScore} />
        <br />

        <AnswerButtonsContainer />
        <ScoreResults />
      </div>
    );
  }
}
