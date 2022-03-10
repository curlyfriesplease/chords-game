import {
  chordIsMajorOrMinor,
  chordInversionPosition,
  pickRandomChordType,
  findNotesInChord,
  notesInChord,
} from "./chords";
import { pickRandomRootNote, noteName } from "./notes";
import { pressKeys, unpressKeys, newPiano } from "./piano";

export const newChord = (piano) => {
  if (notesInChord) {
    unpressKeys(piano);
  }
  pickRandomRootNote();
  pickRandomChordType();
  console.log(
    `::: Chord is: ${noteName} ${chordIsMajorOrMinor} ${chordInversionPosition}`
  );
  findNotesInChord();
  pressKeys(piano);
};
