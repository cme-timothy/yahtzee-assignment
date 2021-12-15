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
} from "./score.js";
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
const gameExplanation = document.querySelector(".game-explanation");
let keepDieChoiceOff = true;
let selectResultOn = true;
let roll = 0;
let playerTurn = true
function turn() {
    if (roll === 0) {
        roll++;
        rollDiceFirstTime();
        keepDieChoiceOff = false;
        chooseDiceToKeep(keepDieChoiceOff, false);
        gameExplanation.textContent = "Press the dice you want to keep and press again if you want to revert back."
        mainButton.textContent = "Roll Dice Again";
        selectResultOn = false;
        selectResult(selectResultOn);
        return true;
    } else if (roll === 1) {
        roll++;
        rollDiceAgain();
        mainButton.textContent = "Roll Dice Last Time";
        selectResult(selectResultOn);
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
        gameExplanation.textContent = "Select a score in one of the available player boxes to continue."
        /* sum of last roll */
        getSum();
        console.log(fiveDice);

        /* possible upper section results player one */
        if (playerTurn) {
            playerTurn = false;
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
            /* possible lower section results player one */
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
        }
        /* possible upper section results player two */
        else if (playerTurn === false) {
            playerTurn = true;
            const playerTwoInput = document.querySelectorAll("button.player-two-input");
            let upperSection = upperSectionTest(fiveDiceArray);
            if (playerTwoInput[0].textContent === "") {
                playerTwoInput[0].textContent = upperSection.aces;
            }
            if (playerTwoInput[1].textContent === "") {
                playerTwoInput[1].textContent = upperSection.twos;
            }
            if (playerTwoInput[2].textContent === "") {
                playerTwoInput[2].textContent = upperSection.threes;
            }
            if (playerTwoInput[3].textContent === "") {
                playerTwoInput[3].textContent = upperSection.fours;
            }
            if (playerTwoInput[4].textContent === "") {
                playerTwoInput[4].textContent = upperSection.fives;
            }
            if (playerTwoInput[5].textContent === "") {
                playerTwoInput[5].textContent = upperSection.sixes;
            }
            /* possible lower section results player two */
            let lowerSection = lowerSectionTest(fiveDiceArray, diceSummation);
            if (playerTwoInput[6].textContent === "") {
                playerTwoInput[6].textContent = lowerSection.threeOfAKind;
            }
            if (playerTwoInput[7].textContent === "") {
                playerTwoInput[7].textContent = lowerSection.fourOfAKind;
            }
            if (playerTwoInput[8].textContent === "") {
                playerTwoInput[8].textContent = lowerSection.fullHouse;
            }
            if (playerTwoInput[9].textContent === "") {
                playerTwoInput[9].textContent = lowerSection.lowStraight;
            }
            if (playerTwoInput[10].textContent === "") {
                playerTwoInput[10].textContent = lowerSection.highStraight;
            }
            if (playerTwoInput[11].textContent === "") {
                playerTwoInput[11].textContent = lowerSection.yahtzee;
            }
            if (playerTwoInput[12].textContent === "") {
                playerTwoInput[12].textContent = lowerSection.chance;
            }
        }
        selectResultOn = true;
        selectResult(selectResultOn);
        mainButton.classList.add("turn-off-button");
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