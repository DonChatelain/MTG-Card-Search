

function Header() {
  const header = document.createElement('header')

  const title = document.createElement('p')
  title.textContent = 'Magic the Gathering'
  header.appendChild(title)

  return header
}

export default Header()
