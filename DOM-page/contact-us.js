let content = document.querySelector('#content')

let container = document.createElement('div')
container.classList.add('container')
content.append(container)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
container.append(contentWrapper)

let shopsWrapper = document.createElement ('div')
shopsWrapper.classList.add('shops-wrapper')

let mapWrapper = document.createElement ('div')
mapWrapper.classList.add('map-wrapper')
contentWrapper.append(shopsWrapper, mapWrapper)

let shopsSectionTitle = document.createElement('h2')
shopsSectionTitle.classList.add('section-title')
shopsSectionTitle.textContent = 'Find us'

let shopsList = document.createElement('div')
shopsList.classList.add('shops-list')
shopsWrapper.append(shopsSectionTitle, shopsList)