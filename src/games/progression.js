const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled
}

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

const generateRound = () => {
  const start = getRandomInt(1, 50) // первое число прогрессии
  const step = getRandomInt(2, 10) // шаг (минимум 2, чтобы не было тривиально)
  const length = getRandomInt(5, 10) // длина от 5 до 10
  const hiddenIndex = getRandomInt(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])

  // Заменяем скрытое число на ".."
  const questionProgression = [...progression]
  questionProgression[hiddenIndex] = '..'
  const question = questionProgression.join(' ')

  return { question, correctAnswer }
}

export default {
  description: 'What number is missing in the progression?',
  generateRound,
}
