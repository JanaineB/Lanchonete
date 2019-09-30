const express = require('express')
const router = express.Router()
const preco = require(__dirname + '/../router/preco')

router.get('/cardapio', (req, res) => {
  const lanches = [
    {
      nome: 'X-Bacon',
      ingredientes: ['bacon', 'hamburguer de carne', 'queijo'],
      preco: 0
    }, {
      nome: 'X-Burger',
      ingredientes: ['hamburguer de carne', 'queijo'],
      preco: 0
    }, {
      nome: 'X-Egg',
      ingredientes: ['ovo', 'hamburguer de carne', 'queijo'],
      preco: 0
    }, {
      nome: 'X-Egg Bacon',
      ingredientes: ['ovo', 'bacon', 'hamburguer de carne', 'queijo'],
      preco: 0
    }
  ]
  const cardapio = getPrecoCardapio(lanches)

  res.send(cardapio)
})

const getPrecoCardapio = (lanches) => {
  lanches.forEach(lanche => {
    lanche['preco'] = preco.getPreco(lanche.ingredientes)
  })

  return lanches
}

module.exports = {
  router: router
}
