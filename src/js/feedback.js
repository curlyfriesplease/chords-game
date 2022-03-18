import React from "react";


export class Feedback extends React.Component {
  render() {
    return (
      <div id="feedbackDiv">
        <span id="feedbackText" class="noActiveScore"></span>
        <br />
        Current score: <span id="displayScore">{this.props.score}</span>
      </div>
    );
  }
}

export class Countdown extends React.Component {
  render() {
    const { seconds } = this.state;
    return (
      <div>
        <h1>Time Remaining: {seconds}</h1>
      </div>
    );
  }
}
// TODO: Finish the above component using this
// https://betterprogramming.pub/building-a-simple-countdown-timer-with-react-4ca32763dda7