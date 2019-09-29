const express = require('express')
const router = express.Router()

router.use('/', require('./ingredientes').router)
router.use('/', require('./cardapio').router)
router.use('/', require('./preco').router)

module.exports = router
