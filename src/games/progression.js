import startGame from '../index.js'
import getRandomInt from '../utils.js'

const description = 'What number is missing in the progression?'
const progressionLength = 10

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

const generateRound = () => {
  const start = getRandomInt(1, 50)
  const step = getRandomInt(2, 10)
  const progression = generateProgression(start, step, progressionLength)
  const hiddenIndex = getRandomInt(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

export default () => {
  startGame(description, generateRound)
}
