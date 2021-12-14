import {
    lowerSection,
} from "./data.js";

function lowerSectionTest(fiveDiceArray, diceSummation) {
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

    if (StraightTest === 5) {
        const lowStraightTestOne = fiveDiceArray.find(element => element >= 5);
        const lowStraightTestTwo = fiveDiceArray.find(element => element === 6 || element === 1);
        const lowStraightTestThree = fiveDiceArray.find(element => element <= 2);
            if(lowStraightTestOne !== 5 && lowStraightTestOne !== 6) {
            lowerSection.lowStraight = 30;
            } else if (lowStraightTestTwo !== 6 && lowStraightTestTwo !== 1) {
            lowerSection.lowStraight = 30;
            } else if (lowStraightTestThree !== 2 && lowStraightTestThree !== 1) {
            lowerSection.lowStraight = 30;
            }
    } else if (StraightTest === 6) {
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