const express = require('express')
const router = express.Router()

router.get('/ingredientes', (req, res) => {
  const ingredientes = fetch()
  res.send(ingredientes)
})
const fetch = () => {
  return {
    'alface': 0.4,
    'bacon': 2,
    'hamburguer de carne': 3,
    'ovo': 0.8,
    'queijo': 1.5
  }
}
module.exports = {
  router: router,
  fetch: fetch
}
