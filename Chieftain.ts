import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 0: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class Chieftain extends Difficulty {
  static level(): number {
    return 0;
  }
}

export default Chieftain;
