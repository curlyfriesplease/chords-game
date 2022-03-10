import React from "react";
import { Instrument } from "piano-chart";
import { notesInChord } from "./chords";

export const newPiano = () => {
  const piano = new Instrument(document.getElementById("pianoContainer"), {
    startOctave: 3,
    endOctave: 5,
  });

  piano.create();
return piano
};

export const pressKeys = (piano) => {
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
