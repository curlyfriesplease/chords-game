import { notesArray, notesArrayIndex } from "./notes";

export let chordIsMajorOrMinor;
export let chordInversionPosition;
export let notesInChord;

// Func to randomly choose if it's major/minor, and which position.
export const pickRandomChordType = () => {
  const rndInt1 = Math.floor(Math.random() * 2) + 1;
  //console.log("rndInt1 : " + rndInt1)
  if (rndInt1 === 1) {
    chordIsMajorOrMinor = "MAJOR";
  } else {
    chordIsMajorOrMinor = "MINOR";
  }

  const rndInt2 = Math.floor(Math.random() * 3) + 1;
  //console.log("rndInt2 : " + rndInt2)
  if (rndInt2 === 2) {
    chordInversionPosition = "1STINVERSION";
  } else if (rndInt2 === 3) {
    chordInversionPosition = "2NDINVERSION";
  } else {
    chordInversionPosition = "ROOTPOSITION";
  }
};

// Func to find the three notes
export const findNotesInChord = () => {
  // The first note, aka Root note, never changes if it's a major or minor.
  // With inversions, the root note will move up an octave in either the first or second inversion.
  let firstNote;
  if (chordInversionPosition === "ROOTPOSITION") {
    firstNote = notesArray[notesArrayIndex];
  } else {
    firstNote = notesArray[notesArrayIndex + 12];
  }

  // The second note, aka the Third, is 3 semitones up from the root if it's a minor chord, and 4 up if it's major.
  // With inversions, the third does not move.
  let secondNote;
  if (chordIsMajorOrMinor === "MAJOR") {
    secondNote = notesArray[notesArrayIndex + 4];
  } else {
    secondNote = notesArray[notesArrayIndex + 3];
  }

  // The third note, aka the Fifth, is 7 semitones up from the root also doesn't change between major or minor chords, just like the root.
  // With inversions, the fifth will move up an octave if it's the 2nd inversion.
  let thirdNote = notesArray[notesArrayIndex + 7];
  if (chordInversionPosition === "2NDINVERSION") {
    thirdNote = notesArray[notesArrayIndex + 19];
  } else {
    thirdNote = notesArray[notesArrayIndex + 7];
  }
  notesInChord = [firstNote, secondNote, thirdNote];

  console.log(notesInChord);
};

