import React from "react";
import { Instrument } from "piano-chart";
import { notesInChord } from "./chords";

export const newPiano = () => {
  const piano = new Instrument(document.getElementById("pianoContainer"), {
    startOctave: 3,
    endOctave: 6,
    keyPressStyle: "vivid",
    // showNoteNames: "never",
  });
  piano.create();
  return piano;
};

export const unpressKeys = (piano) => {
  console.log(
    "unpressing keys " +
      notesInChord[0] +
      " + " +
      notesInChord[1] +
      " + " +
      notesInChord[2]
  );
  piano.keyUp(notesInChord[0]);
  piano.keyUp(notesInChord[1]);
  piano.keyUp(notesInChord[2]);
};

export const pressKeys = (piano) => {
  console.log(
    "pressing new keys " +
      notesInChord[0] +
      " + " +
      notesInChord[1] +
      " + " +
      notesInChord[2]
  );
  piano.keyDown(notesInChord[0]);
  piano.keyDown(notesInChord[1]);
  piano.keyDown(notesInChord[2]);
};

/*
const Piano = props => {

const piano = new Instrument(document.getElementById('pianoContainer'), {
    startOctave: 3,
    endOctave: 5,
  }
);

piano.create();

piano.keyDown(notesInChord[0]);
piano.keyDown(notesInChord[1]);
piano.keyDown(notesInChord[2]);

return piano

}

export default Piano
*/
