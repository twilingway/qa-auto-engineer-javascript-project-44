const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.floor(Math.sqrt(num))
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled
}

const generateRound = () => {
  const number = getRandomInt(2, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
}
