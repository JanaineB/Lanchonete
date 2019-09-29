const express = require('express')
const router = express.Router()
const ingredientes = require('./../router/ingredientes')

router.post('/pedido',(req, res) =>{
  let pedido = req.body.ingredientes

  let result = validarPedido(pedido)

  if( result === false){
  return  res.status('400').send(`Ingrediente ${pedido} invalido!`)
  }

  let sum = getPreco(pedido)
  let desconto={}
  desconto['valor'] = getPromocao(pedido,sum)

  res.send(desconto)
})

const validarPedido = (pedido) =>{
  const valores = ingredientes.fetch()
  let valido = true

  pedido.forEach(ingrediente => {

    if (valores[ingrediente] === undefined){
      valido = false
    }

  })

  return valido
}

const getPreco = (pedido) =>{
  const valores = ingredientes.fetch()
  let sum = 0

  pedido.forEach(ingrediente =>{
    sum = sum + valores[ingrediente]
  })

  return  sum
}

const getPromocao =(pedido, sum)=>{
  let qtdAlface = 0
  let qtdBacon = 0
  let qtdQueijo = 0
  let qtdCarne = 0
  const valores = ingredientes.fetch()

  pedido.forEach(item => {
    item === 'alface' ? qtdAlface++ : item === 'bacon' ? qtdBacon++ :  item === 'queijo' ? qtdQueijo++ : item === 'hamburguer de carne' ? qtdCarne++ : 0
  })

  if( qtdQueijo >= 3) {
    let num = qtdQueijo / 3
    sum = sum - (~~num * valores['queijo'])
  }

  if(qtdCarne >= 3){
    let num = qtdCarne / 3
    sum = sum - (~~num * valores['hamburguer de carne'])
  }

  if(qtdBacon === 0 && qtdAlface != 0) { 
    sum = sum - sum * 0.1 
  }
  return sum
}

module.exports = {
  router: router,
  getPreco: getPreco,
  getPromocao: getPromocao,
  validarPedido: validarPedido
}
