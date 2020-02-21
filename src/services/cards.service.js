
const baseUrl = 'https://api.magicthegathering.io/v1'
const headers = {
  'Content-Type': 'application/json',
  'Total-Count': 300
}

export function getCards(options) {
  const LIMIT = 25
  const {
    pageNumber,
    cardColor,
    cardType,
    cardRarity,
  } = options

  let parameters = []

  parameters.push(`pageSize=${LIMIT}`)

  if (pageNumber) parameters.push(`page=${pageNumber}`)
  if (cardColor) parameters.push(`colors=${cardColor}`)
  if (cardType) parameters.push(`types=${cardType}`)
  if (cardRarity) parameters.push(`rarity=${cardRarity}`)

  parameters = parameters.join('&')
 
  return fetch(`${baseUrl}/cards?${parameters}`, {
    headers: headers
  })
}
