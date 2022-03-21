import React from "react";
import { CountDown } from "./timer";

export class Feedback extends React.Component {
  render() {
    return (
      <div id="feedbackDiv">
        <span id="feedbackText" class="noActiveScore"></span>
        <br />
        <div id="scoreAndTimer">
          <CurrentScore /> <CountDown />{" "}
        </div>
      </div>
    );
  }
}

class CurrentScore extends React.Component {
  render() {
    return (
      <div>
        <p>Score: <span id="displayScore">{this.props.score}</span></p>
      </div>
    );
  }
}

CurrentScore.defaultProps = {
  score: "0"
}