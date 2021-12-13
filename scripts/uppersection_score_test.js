import {
    upperSection,
} from "./data.js";
import {
    fiveDiceArray,
    diceSummation,
} from "./dice_roll.js";

function upperSectionTest() {

    for (let i = 1; i <= 6; i++) {
        scoreTest(i);
    }

    function scoreTest(number) {
    let diceNumber = fiveDiceArray.find(element => element === number);
        if (diceNumber === 1) {
            upperSection.aces = diceSummation;
        }
        if (diceNumber === 2) {
            upperSection.twos = diceSummation;
        }
        if (diceNumber === 3) {
            upperSection.threes = diceSummation;
        }
        if (diceNumber === 4) {
            upperSection.fours = diceSummation;
        }
        if (diceNumber === 5) {
            upperSection.fives = diceSummation;
        }
        if (diceNumber === 6) {
            upperSection.sixes = diceSummation;
        }
    }
    return upperSection;
}
console.log(upperSectionTest());

export default upperSection;