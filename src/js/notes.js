export const notesArray = [
    "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A3",
  "A#3",
  "B3",
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A4",
  "A#4",
  "B4",
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A5",
  "A#5",
  "B5"
];

// pick a random index between 11 and 22, which is any note in the fourth octave.
export let notesArrayIndex;
export let noteName;
export const pickRandomRootNote = () => {
  const rndInt = Math.floor(Math.random() * 20);
  if (rndInt === notesArrayIndex) {
    console.log(
      "::: Same random note has been picked. Re-rolling the dice...."
    );
    pickRandomRootNote();
  } else {
    console.log(
      "::: Debugging: Random index number is: " +
        rndInt +
        " which is note " +
        notesArray[rndInt]
    );
    notesArrayIndex = rndInt;
    noteName = notesArray[notesArrayIndex]
  }
};

