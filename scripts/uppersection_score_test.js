import {
    upperSection,
} from "./data.js";

let sumOfAces = 0;
let sumOfTwos = 0;
let sumOfThrees = 0;
let sumOfFours = 0;
let sumOfFives = 0;
let sumOfSixes = 0;
function upperSectionTest(fiveDiceArray) {
    for (let i = 1; i <= 6; i++) {
        scoreTest(i);
    }
    function scoreTest(number) {
    let diceSameNumber = fiveDiceArray.filter(element => element === number);
        if (diceSameNumber[0] === 1) {
            sumOfAces = diceSameNumber.length * 1;
            upperSection.aces = sumOfAces;
        }
        if (diceSameNumber[0] === 2) {
            sumOfTwos = diceSameNumber.length * 2;
            upperSection.twos = sumOfTwos;
        }
        if (diceSameNumber[0] === 3) {
            sumOfThrees = diceSameNumber.length * 3;
            upperSection.threes = sumOfThrees;
        }
        if (diceSameNumber[0] === 4) {
            sumOfFours = diceSameNumber.length * 4;
            upperSection.fours = sumOfFours;
        }
        if (diceSameNumber[0] === 5) {
            sumOfFives = diceSameNumber.length * 5;
            upperSection.fives = sumOfFives;
        }
        if (diceSameNumber[0] === 6) {
            sumOfSixes = diceSameNumber.length * 6;
            upperSection.sixes = sumOfSixes;
        }
    }
    console.log(upperSection);
    return upperSection;
}

export {
    upperSectionTest,
};