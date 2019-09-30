const express = require('express')
const router = express.Router()

router.use('/', require(__dirname + '/ingredientes').router)
router.use('/', require(__dirname + '/cardapio').router)
router.use('/', require(__dirname + '/preco').router)

module.exports = router
