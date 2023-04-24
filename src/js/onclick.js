/* eslint-disable no-unused-vars */
import {
  chordIsMajorOrMinor,
  chordInversionPosition,
  pickRandomChordType,
  findNotesInChord,
  notesInChord,
  minorMarker,
} from './chords';
import { pickRandomRootNote, noteName } from './notes';
import { pressKeys, unpressKeys } from './piano';
import { useContext } from 'react';

export let formattedChordName;
export let currentScore = 0;

export const newChord = (piano) => {
  if (notesInChord) {
    unpressKeys(piano);
  }
  pickRandomRootNote();
  pickRandomChordType();
  formattedChordName = noteName.substring(0, noteName.length - 1) + minorMarker; // Remove last character of notename which is the Octave number, add on the 'm' minor chord marker if needed
  console.log(
    `::: 🎼 Chord is: ${formattedChordName} (${chordInversionPosition}) 🎼 `
  );
  findNotesInChord();
  pressKeys(piano);
};
