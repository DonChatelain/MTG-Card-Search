

function Footer() {
  const footer = document.createElement('footer')

  const copyright = document.createElement('p')
  copyright.textContent = `Copyright ©${new Date().getFullYear()}`
  footer.appendChild(copyright)

  return footer
}

export default Footer()
