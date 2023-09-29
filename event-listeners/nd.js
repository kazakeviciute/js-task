let num = 5

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let plusButton = document.createElement('button')
let resetButton = document.createElement('button')
let minusButton = document.createElement('button')
let inputElement = document.createElement('input')
let textDisplay = document.createElement('h4')
let minus2Button = document.createElement('button')
let plus2Button = document.createElement('button')

inputElement.type = 'Number'
numberDisplay.textContent = num
plusButton.textContent = '+'
resetButton.textContent = 'reset'
minusButton.textContent = '-'
minus2Button.textContent = '-2'
numberDisplay.style.color = 'green'

numberDisplay.style.color = 'green'

numbersWrapper.append(inputElement, numberDisplay, minusButton, resetButton, plusButton)

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


inputElement.addEventListener('change', () => {
    if(Number(inputElement.value) <= 10 && Number(inputElement.value) >= 1) {
      num = inputElement.value
      numberDisplay.textContent = num
      if (num > 9) {
        plusButton.setAttribute('disabled', true)
      }
  
      if (num > 8) {
        plus2Button.setAttribute('disabled', true)
      }
  
      if (num > 1) {
        minusButton.removeAttribute('disabled')
        minus2Button.removeAttribute('disabled')
      }
  
      if (num >= 5) {
        numberDisplay.style.color = 'green'
      } else {
        numberDisplay.style.color = 'red'
      }
      if (num <= 1) {
        minusButton.setAttribute('disabled', true)
      }
  
      if (num <= 2) {
        minus2Button.setAttribute('disabled', true)
      }
  
      if (num <= 9) {
        plusButton.removeAttribute('disabled')
      }
  
      if (num <= 8) {
        plus2Button.removeAttribute('disabled')
      }
  
      if (num >= 5) {
        numberDisplay.style.color = 'green'
      } else {
        numberDisplay.style.color = 'red'
      }
    }
  })