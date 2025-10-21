#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playEvenGame from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

playEvenGame(name);
