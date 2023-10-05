function init() {
  const studentForm = document.querySelector('#student-form')
  const studentsList = document.querySelector('#students-list')
  const msgForm = document.querySelector('#msg_field')
  const spanMsg = document.createElement('span')
  const rangeSlider = document.querySelector('#it-knowledge')
  const spanRangeValue = document.querySelector('#range-value')
  spanRangeValue.textContent = rangeSlider.value

  rangeSlider.addEventListener('input', function() {
    spanRangeValue.textContent = rangeSlider.value
  })

  studentForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const form = event.target

    const name = document.querySelector('#name').value
    const surname = studentForm.querySelector('#surname').value
    const age = form.querySelector('#age').value
    // const phone = form.elements.phone.value
    const phone = form.phone.value
    const email = form.email.value
    const itKnowledge= form['it-knowledge'].value
    // const group = form.querySelector('input[name="group"]:checked').value
    const group = form.group.value
    const interests = form.querySelectorAll('input[name="interest"]:checked')
    
    spanMsg.textContent = 'Sukurtas studentas (' + name + ' ' + surname + ')'
    msgForm.append(spanMsg)
    setTimeout(() => {spanMsg.remove()}, 5000)

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')
    
    const nameElement = document.createElement('h2')
    nameElement.textContent = `${name} ${surname}`

    const ageElement = document.createElement('p')
    ageElement.textContent = `Age: ${age}`

    const phoneElement = document.createElement('p')
    phoneElement.textContent = `Phone: ${phone}`

    const emailElement = document.createElement('p')
    emailElement.textContent = `Email: ${email}`

    const itKnowledgeElement = document.createElement('p')
    itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`

    const groupElement = document.createElement('p')
    groupElement.textContent = `Group: ${group} gr.`

    const interestsWrapper = document.createElement('div')
    interestsWrapper.classList.add('interests-wrapper')

    const interestsTitle = document.createElement('h3')
    interestsTitle.textContent = 'Interests:'

    const interestsList = document.createElement('ul')

    for (let i = 0; i < interests.length; i++) {
      const interestItem = document.createElement('li')
      interestItem.textContent = interests[i].value
      interestsList.append(interestItem)
    }

    interestsWrapper.append(interestsTitle, interestsList)
    

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper)
    studentsList.prepend(studentItem)

    form.reset()
    spanRangeValue.textContent = rangeSlider.value
  })
}

init()