// Рекурсивная реализация алгоритма Евклида
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// Генерация случайного целого числа в диапазоне [min, max]
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};
