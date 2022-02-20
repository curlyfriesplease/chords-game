import { chordIsMajorOrMinor, chordInversionPosition, pickRandomChordType, findNotesInChord } from "./chords";
import { pickRandomRootNote, noteName  } from "./notes";



export const newChord = () => {
    pickRandomRootNote();
    pickRandomChordType();
    console.log(`::: Chord is: ${noteName} ${chordIsMajorOrMinor} ${chordInversionPosition}`)
    findNotesInChord()
}

