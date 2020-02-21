const express = require('express')
const router = express.Router()
const smartphone_controller = require('../controllers/smartphone.controller')

router.get('/teste', smartphone_controller.teste)

router.post('/create', smartphone_controller.create)

router.get('/:id', smartphone_controller.details)

module.exports = router