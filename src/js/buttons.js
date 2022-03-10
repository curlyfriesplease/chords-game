import React from "react";

export class AnswerButton extends React.Component {
  render() {
    return <div className="buttonBlock">
        <button className="answerButton bigClicky">
            {this.props.chordName}
        </button>
    </div>;
  }
}



