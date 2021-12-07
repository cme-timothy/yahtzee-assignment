const fiveDice = {
    diceOne: 0,
    diceTwo: 0,
    diceThree: 0,
    diceFour: 0,
    diceFive: 0,
};

/* start game */
const input = prompt("To start game press ok");
if (input === "") {
    turnRollDice();
    console.log(fiveDice);
}

/* player turn */
function turnRollDice() {
    let randomNumber;
    function rollDice() {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        return randomNumber;
    }

    function rollDiceFirstTime() {
    const input = prompt("To roll dice press ok");
        if (input === "") {
            fiveDice.diceOne = 1;
            fiveDice.diceTwo = 2;
            fiveDice.diceThree = 3;
            fiveDice.diceFour = 3;
            fiveDice.diceFive = 5;
        }
    }

    function rollDiceAgain() {
    const input = prompt("To roll dice type in dicenumber");
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

/* summation of dice roll*/
const fiveDiceArray = Object.values(fiveDice);
function sumOfDice(sum) {
    return sum = fiveDiceArray.reduce((previous, current) => previous + current);
}

/* uppersection score test*/
const upperSection = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
};

function upperSectionTest() {
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
    return upperSection;
}
console.log(upperSectionTest());

/* lowersection score test */
const lowerSection = {
    pair: 0,
    twoPairs: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    lowStraight: 0,
    highStraight: 0,
    chance: 0,
    yahtzee: 0,
};

function lowerSectionTest() {
    const dicePairArray = [];
    let fullHouseThreeOfAKindTest = false;
    let fullHouseTwoOfAKindTest = false;
    let StraightTest= 0;
    for (let i = 1; i <= 6; i++) {
        diceTwoOrMoreOfAKind(i);
    }

    function diceTwoOrMoreOfAKind(number) {
    let diceSameNumber = fiveDiceArray.filter(element => element === number);
        if (diceSameNumber.length === 3) {
            dicePairArray.push(diceSameNumber);
            lowerSection.pair = sumOfDice(lowerSection.pair);
            fullHouseThreeOfAKindTest = true;
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
            lowerSection.pair = sumOfDice(lowerSection.pair);
            dicePairArray.push(diceSameNumber);
            return fullHouseTwoOfAKindTest = true;
        } else {
            StraightTest++;
        }
    }

    if (dicePairArray.length === 2) {
        lowerSection.twoPairs = sumOfDice(lowerSection.twoPairs);
    }
    if (fullHouseThreeOfAKindTest && fullHouseTwoOfAKindTest) {
        lowerSection.fullHouse = sumOfDice(lowerSection.fullHouse);
    }

    if (StraightTest === 5) {
        const lowStraightTestOne = fiveDiceArray.find(element => element >= 5);
        const lowStraightTestTwo = fiveDiceArray.find(element => element === 6 || element === 1);
        const lowStraightTestThree = fiveDiceArray.find(element => element <= 2);
            if(lowStraightTestOne !== 5 && lowStraightTestOne !== 6) {
            lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
            } else if (lowStraightTestTwo !== 6 && lowStraightTestTwo !== 1) {
            lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
            } else if (lowStraightTestThree !== 2 && lowStraightTestThree !== 1) {
            lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
            }
    } else if (StraightTest === 6) {
        lowerSection.lowStraight = sumOfDice(lowerSection.lowStraight);
        lowerSection.highStraight = sumOfDice(lowerSection.highStraight);
    }
    return lowerSection;
}
console.log(lowerSectionTest());
