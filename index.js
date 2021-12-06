let fiveDice = {};

function turnRollDice() {
    fiveDice = { 
        diceOne: 0,
        diceTwo: 0,
        diceThree: 0,
        diceFour: 0,
        diceFive: 0,
    };

    let randomNumber;
    function rollDice() {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        return randomNumber;
    }

    function rollDiceFirstTime() {
    const input = prompt("To roll dice type in yes");
        if (input === "") {
            fiveDice.diceOne = 2;
            fiveDice.diceTwo = 4;
            fiveDice.diceThree = 3;
            fiveDice.diceFour = 3;
            fiveDice.diceFive = 1;
        }
    }

    function rollDiceAgain() {
    let input = prompt("To roll dice type in dicenumber");
        if (input === "diceOne") {
            fiveDice.diceOne = rollDice();
        } else if (input === "diceTwo") {
            fiveDice.diceTwo = rollDice();
        } else if (input === "diceThree") {
            fiveDice.diceThree = rollDice();
        } else if (input === "diceFour") {
            fiveDice.diceFour = rollDice();
        } else if (input === "diceFive") {
            fiveDice.diceFive = rollDice();
        }
    }

    rollDiceFirstTime();
    rollDiceAgain();
    rollDiceAgain();
    return fiveDice;
}

const input = prompt("To start game type in yes");
if (input === "") {
    turnRollDice();
    console.log(fiveDice);
}

/* uppersection */
let upperSection = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
};

const fiveDiceArray = Object.values(fiveDice);
function sumOfDice(summary) {
    return summary = fiveDiceArray.reduce((previous, current) => previous + current);
}

if ((fiveDiceArray.find(element => element === 1)) === 1) {
    upperSection.aces = sumOfDice(upperSection.aces);
}
if ((fiveDiceArray.find(element => element === 2)) === 2) {
    upperSection.twos = sumOfDice(upperSection.twos);
}
if ((fiveDiceArray.find(element => element === 3)) === 3) {
    upperSection.threes = sumOfDice(upperSection.threes);
}
if ((fiveDiceArray.find(element => element === 4)) === 4) {
    upperSection.fours = sumOfDice(upperSection.fours);
}
if ((fiveDiceArray.find(element => element === 5)) === 5) {
    upperSection.fives = sumOfDice(upperSection.fives);
}
if ((fiveDiceArray.find(element => element === 6)) === 6) {
    upperSection.sixes = sumOfDice(upperSection.sixes);
}

console.log(upperSection);

/* lowersection */
let lowerSection = {
    pair: 0,
    twoPairs: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    lowStraight: 0,
    highStraight: 0,
    chance: 0,
    yahtzee: 0,
}

/* pair or two pairs + three or more of a kind + full house */
let dicePairArray = [];
let fullHouseThreeOfAKind = false;
let fullHouseTwoOfAKind = false;
function diceTwoOrMoreOfAKind(number) {
let diceSameNumber = fiveDiceArray.filter(element => element === number);
    if (diceSameNumber.length === 3) {
        dicePairArray.push(diceSameNumber);
        lowerSection.pair = sumOfDice(lowerSection.pair);
        fullHouseThreeOfAKind = true;
        return lowerSection.threeOfAKind = sumOfDice(lowerSection.threeOfAKind);

    } else if (diceSameNumber.length === 4) {
        lowerSection.pair = sumOfDice(lowerSection.pair);
        lowerSection.twoPairs = sumOfDice(lowerSection.twoPairs);
        lowerSection.threeOfAKind = sumOfDice(lowerSection.threeOfAKind);
        return lowerSection.fourOfAKind = sumOfDice(lowerSection.fourOfAKind);

    } else if (diceSameNumber.length === 5) {
        lowerSection.pair = sumOfDice(lowerSection.pair);
        lowerSection.twoPairs = sumOfDice(lowerSection.twoPairs);
        lowerSection.threeOfAKind = sumOfDice(lowerSection.threeOfAKind);
        lowerSection.fourOfAKind = sumOfDice(lowerSection.fourOfAKind);
        return lowerSection.yahtzee = sumOfDice(lowerSection.yahtzee);

    } else if (diceSameNumber.length === 2) {
        dicePairArray.push(diceSameNumber);
        return fullHouseTwoOfAKind = true;
    }
}

for (let i = 0; i < 6; i++) {
    diceTwoOrMoreOfAKind(i);
}

if (dicePairArray.length === 2) {
    lowerSection.pair = sumOfDice(lowerSection.pair);
    lowerSection.twoPairs = sumOfDice(lowerSection.twoPairs);
} else if (dicePairArray.length === 1) {
    lowerSection.pair = sumOfDice(lowerSection.pair);
}

if (fullHouseThreeOfAKind && fullHouseTwoOfAKind) {
    lowerSection.fullHouse = sumOfDice(lowerSection.fullHouse);
}

/* low and high straight */
if (dicePairArray.length !== 2 && dicePairArray.length !== 0) {
    lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
}

const highStraightSix = "2,3,4,5,6";
const highStraightOne = "1,2,3,4,5";
fiveDiceArray.sort(function(a, b){return a-b});
const fiveDiceString = fiveDiceArray.toString();
if (fiveDiceString === highStraightSix || fiveDiceString === highStraightOne) {
    lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
    lowerSection.highStraight = sumOfDice(lowerSection.highStraight);
}

console.log(lowerSection);
