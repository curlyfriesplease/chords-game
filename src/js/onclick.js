import { chordIsMajorOrMinor, chordInversionPosition, pickRandomChordType, findNotesInChord } from "./chords";
import { pickRandomRootNote, noteName  } from "./notes";
import { pressKeys, newPiano } from "./piano";

export const newChord = (piano) => {
    pickRandomRootNote();
    pickRandomChordType();
    console.log(`::: Chord is: ${noteName} ${chordIsMajorOrMinor} ${chordInversionPosition}`)
    findNotesInChord()
    pressKeys(piano)
}

