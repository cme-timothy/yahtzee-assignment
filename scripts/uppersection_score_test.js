import {
    upperSection,
} from "./data.js";
import {
    fiveDiceArray,
    diceSummation,
} from "./index.js";

function upperSectionTest() {
    if ((fiveDiceArray.find(element => element === 1)) === 1) {
        upperSection.aces = diceSummation;
    }
    if ((fiveDiceArray.find(element => element === 2)) === 2) {
        upperSection.twos = diceSummation;
    }
    if ((fiveDiceArray.find(element => element === 3)) === 3) {
        upperSection.threes = diceSummation;
    }
    if ((fiveDiceArray.find(element => element === 4)) === 4) {
        upperSection.fours = diceSummation;
    }
    if ((fiveDiceArray.find(element => element === 5)) === 5) {
        upperSection.fives = diceSummation;
    }
    if ((fiveDiceArray.find(element => element === 6)) === 6) {
        upperSection.sixes = diceSummation;
    }
    return upperSection;
}
console.log(upperSectionTest());

export default upperSection;