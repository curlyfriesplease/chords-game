import React from "react";
import $ from "jquery";

export const CountDown = ({ seconds = 90 }) => {
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
