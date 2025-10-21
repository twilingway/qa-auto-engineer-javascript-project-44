// src/engine.js
import readlineSync from 'readline-sync';

const runGame = (gameData, name) => {
  const { description, generateRound } = gameData;
  const roundsCount = 3;

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
