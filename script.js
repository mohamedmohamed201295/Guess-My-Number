'use strict'
const questionMark = document.querySelector('.number')
let questionMarkStyle = questionMark.style
let triesNum = 20
let highScore = 0
const guess = document.querySelector('.guess')

const getRandomNum = _ => Math.trunc(Math.random() * 20) + 1

const setBackgroundColor = function (color) {
  document.body.style.backgroundColor = color
}

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg
}

const displayScore = function (num) {
  document.querySelector('.score').textContent = num
}

const box = {
  width: function (width) {
    questionMarkStyle.width = width
  }
}

let secretNum = getRandomNum()
document.querySelector('.check').addEventListener('click', _ => {
  const prompt = Number(guess.value)
  if (triesNum > 1) {
    if (!prompt) {
      displayMsg('No Number!')
    } else if (prompt === secretNum) {
      setBackgroundColor('#60b347')
      questionMarkStyle.width = '30rem'
      questionMark.textContent = secretNum
      displayMsg('GG!')
      if (highScore < triesNum) {
        highScore = triesNum
        document.querySelector('.highscore').textContent = highScore
      }
    } else if (prompt < secretNum) {
      displayMsg('Too Low!')
      displayScore(--triesNum)
    } else if (prompt > secretNum) {
      displayMsg('Too High!')
      displayScore(--triesNum)
    }
  } else {
    displayMsg('Game Over!')
    displayScore(0)
  }
})

document.querySelector('.again').addEventListener('click', _ => {
  triesNum = 20
  secretNum = getRandomNum()
  displayMsg('Start guessing...')
  displayScore(triesNum)
  questionMark.textContent = '?'
  questionMarkStyle.width = '15rem'
  guess.value = ''
  setBackgroundColor('#222')
})
