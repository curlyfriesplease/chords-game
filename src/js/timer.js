import React from "react";
import $ from "jquery";

export const CountDown = ({ endOfRound }) => {
  const seconds = 10;
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);
  const tick = () => {
    if (over) return;
    if (s === 0) {
      setOver(true);
      endOfRound();
    } else {
      setTime([s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000); // every second, increase timer by 1 sec
    return () => clearInterval(timerID);
  });
  //TODO: This needs a dependency array

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
