import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

function App() {
  const app = document.createElement('div')
  app.id = 'app'

  app.appendChild(Header)
  app.appendChild(Main)
  app.appendChild(Footer)

  return app
}

export default App()
