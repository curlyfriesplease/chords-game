import React, { useEffect, useState } from 'react';
import { Feedback } from './feedback';
import { newChord } from './onclick';
import { piano } from '../App.js';

export function HomeScreen() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [gameInProgress, setGameInProgress] = useState(false);

  const startGame = () => {
    console.log('👍🏻 👍🏻 👍🏻 Starting a new game...');
    setShowStartScreen(false);
    setGameInProgress(true);
    newChord(piano);
    if (localStorage.getItem('scores') === null) {
      console.log('No localStorage item found, creating empty array');
      localStorage.setItem('scores', [33]); // Create an empty array in local storage if absent
    }
  };
  useEffect(() => {
    console.log('Rerendering after showStartScreen change');
  }, [showStartScreen]);

  return (
    <>
      {!showStartScreen && (
        <div id="contentBody">
          <br />
          <Feedback
            gameInProgress={gameInProgress}
            setGameInProgress={setGameInProgress}
          />
          <br />
        </div>
      )}
      {showStartScreen && (
        <div id="homescreenDiv" onClick={() => startGame()}>
          <h1>Click to start</h1>
        </div>
      )}
    </>
  );
}

// export class ContentBody extends React.Component {
//   render() {
//     return (
//       <div id="contentBody">
//         <br />
//         <Feedback
//           gameInProgress={gameInProgress}
//           setGameInProgress={setGameInProgress}
//         />
//         <br />
//       </div>
//     );
//   }
// }
