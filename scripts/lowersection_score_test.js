import {
    lowerSection,
} from "./data.js";

function lowerSectionTest(fiveDiceArray, diceSummation) {
    lowerSection.threeOfAKind = 0;
    lowerSection.fourOfAKind = 0;
    lowerSection.fullHouse = 0;
    lowerSection.lowStraight = 0;
    lowerSection.highStraight = 0;
    lowerSection.yahtzee = 0;
    lowerSection.chance = 0;

    let fullHouseThreeOfAKindTest = false;
    let fullHouseTwoOfAKindTest = false;
    let StraightTest= 0;
    for (let i = 1; i <= 6; i++) {
        diceTwoOrMoreOfAKind(i);
    }
    function diceTwoOrMoreOfAKind(number) {
    let diceSameNumber = fiveDiceArray.filter(element => element === number);
        if (diceSameNumber.length === 3) {
            lowerSection.threeOfAKind = diceSummation;
            fullHouseThreeOfAKindTest = true;
        } else if (diceSameNumber.length === 4) {
            lowerSection.threeOfAKind = diceSummation;
            lowerSection.fourOfAKind = diceSummation;
        } else if (diceSameNumber.length === 5) {
            lowerSection.threeOfAKind = diceSummation;
            lowerSection.fourOfAKind = diceSummation;
            lowerSection.yahtzee = 50;
        } else if (diceSameNumber.length === 2) {
            fullHouseTwoOfAKindTest = true;
        } else {
            StraightTest++;
        }
    }

    if (fullHouseThreeOfAKindTest && fullHouseTwoOfAKindTest) {
        lowerSection.fullHouse = 25;
    }

    const testOne = fiveDiceArray.find(element => element === 1);
    const testTwo = fiveDiceArray.find(element => element === 2);
    const testThree = fiveDiceArray.find(element => element === 3);
    const testFour = fiveDiceArray.find(element => element === 4);
    const testFive = fiveDiceArray.find(element => element === 5);
    const testSix = fiveDiceArray.find(element => element === 6);
    if (StraightTest === 5) {
            if(testOne && testTwo && testThree && testFour) {
            lowerSection.lowStraight = 30;
            } else if (testTwo && testThree && testFour && testFive) {
            lowerSection.lowStraight = 30;
            } else if (testThree && testFour && testFive && testSix) {
            lowerSection.lowStraight = 30;
            }
    } else if (StraightTest === 6 && testSix && testOne === undefined) {
        lowerSection.lowStraight = 30;
        lowerSection.highStraight = 40;
    } else if (StraightTest === 6 && testOne && testSix === undefined) {
        lowerSection.lowStraight = 30;
        lowerSection.highStraight = 40;
    }

    lowerSection.chance = diceSummation;

    console.log(lowerSection);
    return lowerSection;
}

export {
    lowerSectionTest,
};