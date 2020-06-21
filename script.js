let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (human, computer) => {
  humanDistance = Math.abs(generateTarget - human);
  return humanDistance;

  computerDistance = Math.abs(generateTarget - computer);
  return computerDistance; 
};
const compareGuesses = (targetNumber) => {

  if(Math.abs(targetNumber - humanGuess) > Math.abs(targetNumber - computerGuess)) {
    return false;
  } else {
    return true;
  }
};

const updateScore = winner => {
  switch(winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer' :
      computerScore += 1;
      break;
  }
};

const advanceRound = () => currentRoundNumber += 1;