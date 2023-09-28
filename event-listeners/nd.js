let num = 5

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let plusButton = document.createElement('button')
let resetButton = document.createElement('button')
let minusButton = document.createElement('button')

numberDisplay.textContent = num
plusButton.textContent = '+'
resetButton.textContent = 'reset'
minusButton.textContent = '-'

numberDisplay.style.color = 'green'

numbersWrapper.append(numberDisplay, minusButton, resetButton, plusButton)

plusButton.addEventListener('click', () => {
  num++
  numberDisplay.textContent = num

  if (num > 9) {
    plusButton.setAttribute('disabled', true)
  }

  if (num > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (num >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

minusButton.addEventListener('click', () => {
  num--
  numberDisplay.textContent = num

  if (num <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (num <= 9) {
    plusButton.removeAttribute('disabled')
  }

  if (num >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

resetButton.addEventListener('click', () => {
  num = 5
  numberDisplay.textContent = 5
  plusButton.removeAttribute('disabled')
  minusButton.removeAttribute('disabled')
  numberDisplay.style.color = 'green'
})


