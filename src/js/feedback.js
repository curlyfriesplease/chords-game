import React from "react";
import { CountDown } from "./timer";

export class Feedback extends React.Component {
  render() {
    return (
      <div id="feedbackDiv">
        <span id="feedbackText" className="noActiveScore"></span>
        <br />
        <div id="scoreAndTimer">
          <CurrentScore />
          <CountDown id="countdownDiv" />
        </div>
      </div>
    );
  }
}

class CurrentScore extends React.Component {
  render() {
    return (
      <div>
        <p>
          Score: <span id="displayScore">{this.props.score}</span>
        </p>
      </div>
    );
  }
}

CurrentScore.defaultProps = {
  score: "0",
};



export class ScoreResults extends React.Component {  
  render() {
    return (
      <div id="resultsContainer">
        <h1>Previous scores: <span id="previousScores"></span></h1>
      </div>
    );
  }
}
