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
            fiveDice.diceOne = 6;
            fiveDice.diceTwo = 2;
            fiveDice.diceThree = 3;
            fiveDice.diceFour = 4;
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
let diceSummation = 0;
const fiveDiceArray = Object.values(fiveDice);
function sumOfDice(sum) {
    return sum = fiveDiceArray.reduce((previous, current) => previous + current);
}

diceSummation = sumOfDice(diceSummation);


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
            lowerSection.pair = diceSummation;
            dicePairArray.push(diceSameNumber);
            lowerSection.threeOfAKind = diceSummation;
            return fullHouseThreeOfAKindTest = true;

        } else if (diceSameNumber.length === 4) {
            lowerSection.pair = diceSummation;
            lowerSection.twoPairs = diceSummation;
            lowerSection.threeOfAKind = diceSummation;
            return lowerSection.fourOfAKind = diceSummation;

        } else if (diceSameNumber.length === 5) {
            lowerSection.pair = diceSummation;
            lowerSection.twoPairs = diceSummation;
            lowerSection.threeOfAKind = diceSummation;
            lowerSection.fourOfAKind = diceSummation;
            return lowerSection.yahtzee = diceSummation;

        } else if (diceSameNumber.length === 2) {
            lowerSection.pair = diceSummation;
            dicePairArray.push(diceSameNumber);
            return fullHouseTwoOfAKindTest = true;
        } else {
            StraightTest++;
        }
    }

    if (dicePairArray.length === 2) {
        lowerSection.twoPairs = diceSummation;
    }
    if (fullHouseThreeOfAKindTest && fullHouseTwoOfAKindTest) {
        lowerSection.fullHouse = diceSummation;
    }

    if (StraightTest === 5) {
        const lowStraightTestOne = fiveDiceArray.find(element => element >= 5);
        const lowStraightTestTwo = fiveDiceArray.find(element => element === 6 || element === 1);
        const lowStraightTestThree = fiveDiceArray.find(element => element <= 2);
            if(lowStraightTestOne !== 5 && lowStraightTestOne !== 6) {
            lowerSection.lowStraight = diceSummation;
            } else if (lowStraightTestTwo !== 6 && lowStraightTestTwo !== 1) {
            lowerSection.lowStraight = diceSummation;
            } else if (lowStraightTestThree !== 2 && lowStraightTestThree !== 1) {
            lowerSection.lowStraight = diceSummation;
            }
    } else if (StraightTest === 6) {
        lowerSection.lowStraight = diceSummation;
        lowerSection.highStraight = diceSummation;
    }
    return lowerSection;
}
console.log(lowerSectionTest());
