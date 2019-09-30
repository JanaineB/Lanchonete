const chai = require('chai')
const expect = chai.expect

const preco = require(__dirname +'/../router/preco')

describe('preco', () => {
  context('valida ingredientes', () => {
    it('Deve retornar se o ingrediente existe', () => {
      const result = preco.validarPedido(['alface', 'bacon', 'ovo', 'hamburguer de carne', 'queijo'])
      expect(result).to.be.true
    })
    it('Deve retornar um error caso o ingrediente seja invalido', () => {
      const result = preco.validarPedido(['cheddar'])

      expect(result).to.be.false
    })
  })
  context('valor lanche', () => {
    it('Deve retornar o preço do lanche sem descontos', () => {
      const result = preco.getPreco(['alface', 'bacon', 'ovo', 'hamburguer de carne', 'queijo'])

      expect(result).to.equal(7.7)
    })
  })
  context('promoçao', () => {
    it('Deve retornar promoçao: light', () => {
      const result = preco.getPromocao(['alface', 'ovo', 'queijo', 'hamburguer de carne'], 5.7)

      expect(result).to.equal(5.13)
    })
    it('Deve retornar promoçao: muito queijo', () => {
      const result = preco.getPromocao(['ovo', 'queijo', 'queijo', 'queijo'], 5.3)

      expect(result).to.equal(3.8)
    })
    it('Deve retornar promoçao: muita carne', () => {
      const result = preco.getPromocao(
        [
          'ovo', 'queijo',
          'hamburguer de carne',
          'hamburguer de carne',
          'hamburguer de carne'
        ],
        11.3)

      expect(result).to.equal(8.3)
    })
    // Note que devido os requisitos nao deixarem claro se é possivel um pedido acomular promoçoes, tal exceçao é testada abaixo
    it('Deve retornar se o pedido acomulou todas as promocoes ', () => {
      const result = preco.getPromocao(
        [
          'alface', 'ovo', 'queijo',
          'hamburguer de carne',
          'hamburguer de carne',
          'hamburguer de carne',
          'queijo', 'queijo', 'queijo'
        ],
        16.2
      )
      expect(result).to.equal(10.53)
    })
  })
})
