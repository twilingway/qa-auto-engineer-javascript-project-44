import readlineSync from 'readline-sync'
import runGame from './engine.js'

const startGame = (gameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  runGame(gameData, name)
}

export default startGame
