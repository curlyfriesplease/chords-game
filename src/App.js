import './css/App.css';
import './css/Buttons.scss';
import './css/Header.css';
import './css/Piano.css';
import './css/Feedback.css';
import './css/Homescreen.css';
import chordsLogo from './media/chords.png';

import { newChord } from './js/onclick';
import { newPiano } from './js/piano.js';
import React, { useEffect } from 'react';

import { HomeScreen } from './js/mainscreens';
import { ScoreContext } from './js/scoreContext';

export let piano;

function App() {
  const [currentScore, setCurrentScore] = React.useState(0);

  useEffect(() => {
    piano = newPiano();
  }, []);

  return (
    <ScoreContext.Provider value={{ currentScore, setCurrentScore }}>
      <div className="App">
        <header className="App-header">
          <span
            className="material-icons"
            id="homeButton"
            onClick={() => newChord(piano)}
          >
            home
          </span>
          <img src={chordsLogo} alt="Piano chord test" />
          <span className="material-icons">settings</span>
        </header>

        <div id="pianoContainer"></div>
        <HomeScreen />
      </div>
    </ScoreContext.Provider>
  );
}

export default App;
