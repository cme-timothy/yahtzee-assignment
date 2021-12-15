import {
    fiveDice,
} from "./data.js";

const getDieOne = document.querySelector("button#die-one");
const getDieTwo = document.querySelector("button#die-two");
const getDieThree = document.querySelector("button#die-three");
const getDieFour = document.querySelector("button#die-four");
const getDieFive = document.querySelector("button#die-five");

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

let keepDieOne = false;
let keepDieTwo = false;
let keepDieThree = false;
let keepDieFour= false;
let keepDieFive = false;
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
    return fiveDice;
}

let keepDieOneTest = true;
let keepDieTwoTest = true;
let keepDieThreeTest = true;
let keepDieFourTest = true;
let keepDieFiveTest = true;
function chooseDiceToKeep(offTest, turnTestsOff) {
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
        if (turnTestsOff) {
            keepDieOneTest = true;
            keepDieTwoTest = true;
            keepDieThreeTest = true;
            keepDieFourTest = true;
            keepDieFiveTest = true;
        }
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
    if (keepDieTwoTest) {
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
    if (keepDieThreeTest) {
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
    if (keepDieFourTest) {
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
    if (keepDieFiveTest) {
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

export {
    rollDiceFirstTime,
    rollDiceAgain,
    chooseDiceToKeep,
    keepDieOne,
    keepDieTwo,
    keepDieThree,
    keepDieFour,
    keepDieFive,
};
