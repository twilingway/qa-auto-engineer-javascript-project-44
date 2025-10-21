import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const number = Math.floor(Math.random() * 100); // случайное число от 0 до 99
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      // Некорректный ввод = ошибка
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playEvenGame;
