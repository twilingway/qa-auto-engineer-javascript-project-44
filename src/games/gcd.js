import runGame from '../index.js'
import getRandomInt from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const findGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return findGcd(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(findGcd(num1, num2))
  return { question, correctAnswer }
}

export default () => {
  runGame(description, generateRound)
}
