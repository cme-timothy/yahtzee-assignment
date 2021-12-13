import {
    fiveDice,
} from "./data.js";
import {
    mainButton,
} from "./index.js";

const getDieOne = document.querySelector("button#die-one");
const getDieTwo = document.querySelector("button#die-two");
const getDieThree = document.querySelector("button#die-three");
const getDieFour = document.querySelector("button#die-four");
const getDieFive = document.querySelector("button#die-five");

let roll = 0;
let keepDieChoiceOff = false;
let keepDieOne = false;
let keepDieTwo = false;
let keepDieThree = false;
let keepDieFour= false;
let keepDieFive = false;

/* roll order events */
function turn() {
    if (roll === 0) {
        roll++;
        rollDiceFirstTime();
        keepDieChoiceOff = false;
        chooseDiceToKeep(keepDieChoiceOff);
        mainButton.textContent = "Roll Dice Again";
        return true;
    } else if (roll === 1) {
        roll++;
        rollDiceAgain();
        mainButton.textContent = "Roll Dice Last Time";
        return true;
    } else if (roll === 2) {
        roll = 0;
        rollDiceAgain();
        keepDieChoiceOff = true;
        chooseDiceToKeep(keepDieChoiceOff);
        getDieOne.classList.remove("dice-keep");
        getDieTwo.classList.remove("dice-keep");
        getDieThree.classList.remove("dice-keep");
        getDieFour.classList.remove("dice-keep");
        getDieFive.classList.remove("dice-keep");
        keepDieOneTest = true;
        keepDieTwoTest = true;
        keepDieThreeTest = true;
        keepDieFourTest = true;
        keepDieFiveTest = true;
        mainButton.textContent = "Next Player";
        console.log(fiveDice);
        return false;
    }
}

    let randomNumber;
    function rollDie() {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        return randomNumber;
    }

    function rollDiceFirstTime() {
        fiveDice.dieOne = rollDie();
        getDieOne.textContent = fiveDice.dieOne;

        fiveDice.dieTwo = rollDie();
        getDieTwo.textContent = fiveDice.dieTwo;

        fiveDice.dieThree = rollDie();
        getDieThree.textContent = fiveDice.dieThree;

        fiveDice.dieFour = rollDie();
        getDieFour.textContent = fiveDice.dieFour;

        fiveDice.dieFive = rollDie();
        getDieFive.textContent = fiveDice.dieFive;
    }

    function rollDiceAgain() {
        if (!keepDieOne) {
        fiveDice.dieOne = rollDie();
        getDieOne.textContent = fiveDice.dieOne;
        }
        if (!keepDieTwo) {
        fiveDice.dieTwo = rollDie();
        getDieTwo.textContent = fiveDice.dieTwo;
        }
        if (!keepDieThree) {
        fiveDice.dieThree = rollDie();
        getDieThree.textContent = fiveDice.dieThree;
        }
        if (!keepDieFour) {
        fiveDice.dieFour = rollDie();
        getDieFour.textContent = fiveDice.dieFour;
        }
        if (!keepDieFive) {
        fiveDice.dieFive = rollDie();
        getDieFive.textContent = fiveDice.dieFive;
        }
    }

let keepDieOneTest = true;
let keepDieTwoTest = true;
let keepDieThreeTest = true;
let keepDieFourTest = true;
let keepDieFiveTest = true;

function chooseDiceToKeep(offTest) {
    if (!offTest){
    getDieOne.addEventListener("click", dieOneListener);
    getDieTwo.addEventListener("click", dieTwoListener);
    getDieThree.addEventListener("click", dieThreeListener);
    getDieFour.addEventListener("click", dieFourListener);
    getDieFive.addEventListener("click", dieFiveListener);
    } else if (offTest) {
    getDieOne.removeEventListener("click", dieOneListener);
    getDieTwo.removeEventListener("click", dieTwoListener);
    getDieThree.removeEventListener("click", dieThreeListener);
    getDieFour.removeEventListener("click", dieFourListener);
    getDieFive.removeEventListener("click", dieFiveListener);
    }
}
    function dieOneListener() {
        if (keepDieOneTest) {
            keepDieOne = true;
            keepDieOneTest = false;
            getDieOne.classList.add("dice-keep");
            console.log("true");
        } else if (!keepDieOneTest) {
            keepDieOne = false;
            keepDieOneTest = true;
            getDieOne.classList.remove("dice-keep");
            console.log("false");
        }
    }
    function dieTwoListener() {
        if (roll === 0){ 
            getDieTwo.removeEventListener("click", dieTwoListener);
        } else if (keepDieTwoTest) {
            keepDieTwo = true;
            keepDieTwoTest = false;
            getDieTwo.classList.add("dice-keep");
            console.log("true");
        } else if (!keepDieTwoTest) {
            keepDieTwo = false;
            keepDieTwoTest = true;
            getDieTwo.classList.remove("dice-keep");
            console.log("false");
        }
    }
    function dieThreeListener() {
        if (roll === 0){ 
            getDieThree.removeEventListener("click", dieThreeListener);
        } else if (keepDieThreeTest) {
            keepDieThree = true;
            keepDieThreeTest = false;
            getDieThree.classList.add("dice-keep");
            console.log("true");
        } else if (!keepDieThreeTest) {
            keepDieThree = false;
            keepDieThreeTest = true;
            getDieThree.classList.remove("dice-keep");
            console.log("false");
        }
    }
    function dieFourListener() {
        if (roll === 0){ 
            getDieFour.removeEventListener("click", dieFourListener);
        } else if (keepDieFourTest) {
            keepDieFour = true;
            keepDieFourTest = false;
            getDieFour.classList.add("dice-keep");
            console.log("true");
        } else if (!keepDieFourTest) {
            keepDieFour = false;
            keepDieFourTest = true;
            getDieFour.classList.remove("dice-keep");
            console.log("false");
        }
    }
    function dieFiveListener() {
        if (roll === 0){ 
            getDieFive.removeEventListener("click", dieFiveListener);
        } else if (keepDieFiveTest) {
            keepDieFive = true;
            keepDieFiveTest = false;
            getDieFive.classList.add("dice-keep");
            console.log("true");
        } else if (!keepDieFiveTest) {
            keepDieFive = false;
            keepDieFiveTest = true;
            getDieFive.classList.remove("dice-keep");
            console.log("false");
        }
    }
/* summation of dice roll */
let diceSummation = 0;
const fiveDiceArray = Object.values(fiveDice);
function sumOfDice(sum) {
    return sum = fiveDiceArray.reduce((previous, current) => previous + current);
}

diceSummation = sumOfDice(diceSummation);

export {
    turn,
    fiveDiceArray,
    diceSummation,
};
