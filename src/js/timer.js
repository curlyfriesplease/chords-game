import React from "react";
import $ from "jquery";

export const CountDown = ({ seconds = 60 }) => {
  // const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);

  const tick = () => {
    if (over) return;
    if ($("#contentBody").is(":hidden")) return;
    if (s === 0) {
      endOfRound();
    } else {
      setTime([s - 1]);
    }
  };

  const endOfRound = () => {
    setOver(true);
    $("#answerButtonsContainer").toggle("normal"); // Hide all the buttons
    $("#resultsContainer").toggle("normal"); // Show the results div instead of them
    let score = [];
    score[0] = $("#displayScore").text(); // Get the current displayed score
    console.log(score);

    let storedScores = JSON.parse(localStorage.scores) // Get the existing saved scores
    storedScores.push(score)  // Add on the new score
    localStorage.setItem("scores", JSON.stringify(storedScores)); // Save that to local storage

    // let storedScores = JSON.parse(localStorage.scores)
    console.log("stored scores are " + storedScores) 
    $("#previousScores").text(storedScores)
  };

  // const reset = () => {
  //   setTime(parseInt(seconds));
  //   setPaused(false);
  //   setOver(false);
  // };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000); // every second, decrease timer by 1 sec
    return () => clearInterval(timerID);
  });

  return (
    <div>
      {/* <p>{`${s.toString().padStart(2, "0")}`}</p> */}
      <p>{over ? "Time's up!" : `${s.toString().padStart(2)}`}</p>
      {/* <div>{over ? "Time's up!" : `${s.toString().padStart(2, "0")}`}</div> */}
      {/* <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button> */}
      {/* <button onClick={() => reset()}>Restart</button> */}
    </div>
  );
};
