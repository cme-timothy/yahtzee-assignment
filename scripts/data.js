const fiveDice = {
    dieOne: 0,
    dieTwo: 0,
    dieThree: 0,
    dieFour: 0,
    dieFive: 0,
};

const upperSection = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
};

const lowerSection = {
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    lowStraight: 0,
    highStraight: 0,
    chance: 0,
    yahtzee: 0,
};

const playerOneScoreUpperSection = {
    aces: -1,
    twos: -1,
    threes: -1,
    fours: -1,
    fives: -1,
    sixes: -1,
};

const playerOneScoreLowerSection = { 
    threeOfAKind: -1,
    fourOfAKind: -1,
    fullHouse: -1,
    lowStraight: -1,
    highStraight: -1,
    chance: -1,
    yahtzee: -1,
};

const playerTwoScoreUpperSection = {
    aces: -1,
    twos: -1,
    threes: -1,
    fours: -1,
    fives: -1,
    sixes: -1,
};

const playerTwoScoreLowerSection = {
    threeOfAKind: -1,
    fourOfAKind: -1,
    fullHouse: -1,
    lowStraight: -1,
    highStraight: -1,
    chance: -1,
    yahtzee: -1,
};

export {
    fiveDice,
    upperSection,
    lowerSection,
    playerOneScoreUpperSection,
    playerOneScoreLowerSection,
    playerTwoScoreUpperSection,
    playerTwoScoreLowerSection,
};