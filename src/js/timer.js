import React from "react";
import $ from 'jquery';

export const CountDown = ({ seconds = 4 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]); // IF THIS DOESN'T WORK TRY the FIRST S in []

  const tick = () => {
    if (paused || over) return;
    if (s === 0) {
      setOver(true);
      $("#answerButtonsContainer").toggle("slow");
      $("#resultsContainer").toggle("slow");
    } else {
      setTime([s - 1]);
    }
  };

  //   const reset = () => {
  //     setTime(parseInt(seconds));
  //     setPaused(false);
  //     setOver(false);
  //   };

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
