import * as CardService from '../services/cards.service'

function Main() {
  const main = document.createElement('main')
  const spinner = document.querySelector('#spinner')

  const title = document.createElement('h1')
  title.textContent = 'Main Content'
  main.appendChild(title)

  const listEl = document.createElement('ul')

  CardService.getCards({

  }).then(res => {
    return res.json()
  }).then(data => {
    spinner.style.display = 'none'
    console.log(data)
    if (!data.cards) return console.error('No cards', data)
    const cardNames = data.cards.map(x => x.name)
    cardNames.forEach(name => {
      const li = document.createElement('li')
      li.textContent = name
      listEl.appendChild(li)
    })
  }).catch(err => console.error(err))
  
  main.appendChild(listEl)
  return main
}

export default Main()
