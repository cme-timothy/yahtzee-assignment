import {
    fiveDice,
} from "./data.js";
import {
    mainButton,
} from "./index.js";
import {
    upperSectionTest,
} from "./uppersection_score_test.js";
import {
    lowerSectionTest,
} from "./lowersection_score_test.js";
import {
    selectResult,
} from "./select_score.js";
import {
rollDiceFirstTime,
rollDiceAgain,
chooseDiceToKeep,
} from "./dice_roll.js";

const getDieOne = document.querySelector("button#die-one");
const getDieTwo = document.querySelector("button#die-two");
const getDieThree = document.querySelector("button#die-three");
const getDieFour = document.querySelector("button#die-four");
const getDieFive = document.querySelector("button#die-five");
let keepDieChoiceOff = true;
let selectResultOn = true;
let roll = 0;
function turn() {
    if (roll === 0) {
        roll++;
        rollDiceFirstTime();
        keepDieChoiceOff = false;
        chooseDiceToKeep(keepDieChoiceOff, false);
        mainButton.textContent = "Roll Dice Again";
        selectResultOn = false;
        selectResult(selectResultOn);
        return true;
    } else if (roll === 1) {
        roll++;
        rollDiceAgain();
        mainButton.textContent = "Roll Dice Last Time";
        selectResult();
        return true;
    } else if (roll === 2) {
        roll = 0;
        rollDiceAgain(selectResultOn);
        keepDieChoiceOff = true;
        chooseDiceToKeep(keepDieChoiceOff, true);
        getDieOne.classList.remove("dice-keep");
        getDieTwo.classList.remove("dice-keep");
        getDieThree.classList.remove("dice-keep");
        getDieFour.classList.remove("dice-keep");
        getDieFive.classList.remove("dice-keep");
        mainButton.textContent = "Next Player";
        /* sum of last roll */
        getSum();
        console.log(fiveDice);

        /* possible upper section results */
        const playerOneInput = document.querySelectorAll("button.player-one-input");
        let upperSection = upperSectionTest(fiveDiceArray);
        if (playerOneInput[0].textContent === "") {
        playerOneInput[0].textContent = upperSection.aces;
        }
        if (playerOneInput[1].textContent === "") {
        playerOneInput[1].textContent = upperSection.twos;
        }
        if (playerOneInput[2].textContent === "") {
        playerOneInput[2].textContent = upperSection.threes;
        }
        if (playerOneInput[3].textContent === "") {
        playerOneInput[3].textContent = upperSection.fours;
        }
        if (playerOneInput[4].textContent === "") {
        playerOneInput[4].textContent = upperSection.fives;
        }
        if (playerOneInput[5].textContent === "") {
        playerOneInput[5].textContent = upperSection.sixes;
        }
        /* possible lower section results */
        let lowerSection = lowerSectionTest(fiveDiceArray, diceSummation);
        if (playerOneInput[6].textContent === "") {
        playerOneInput[6].textContent = lowerSection.threeOfAKind;
        }
        if (playerOneInput[7].textContent === "") {
        playerOneInput[7].textContent = lowerSection.fourOfAKind;
        }   
        if (playerOneInput[8].textContent === "") {
        playerOneInput[8].textContent = lowerSection.fullHouse;
        }
        if (playerOneInput[9].textContent === "") {
        playerOneInput[9].textContent = lowerSection.lowStraight;
        }
        if (playerOneInput[10].textContent === "") {
        playerOneInput[10].textContent = lowerSection.highStraight;
        }
        if (playerOneInput[11].textContent === "") {
        playerOneInput[11].textContent = lowerSection.yahtzee;
        }
        if (playerOneInput[12].textContent === "") {
        playerOneInput[12].textContent = lowerSection.chance;
        }
        selectResultOn = true;
        selectResult(selectResultOn);
        return false;
    }
}

let fiveDiceArray;
let diceSummation = 0;
/* summation of dice roll */
function getSum() {
fiveDiceArray = Object.values(fiveDice);
function sumOfDice(sum) {
    return sum = fiveDiceArray.reduce((previous, current) => previous + current);
}

diceSummation = sumOfDice(diceSummation);
return diceSummation;
}

export {
    turn,
};