"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chieftain = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 0: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class Chieftain extends Difficulty_1.default {
    static level() {
        return 0;
    }
}
exports.Chieftain = Chieftain;
exports.default = Chieftain;
//# sourceMappingURL=Chieftain.js.map