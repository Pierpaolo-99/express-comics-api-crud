const express = require('express')
const router = express.Router()
const comicsRoutes = require('../controllers/comicsController')

router.get('/', comicsRoutes.index)

router.get('/:id', comicsRoutes.show)

router.post('/', comicsRoutes.create)

router.put('/:id', comicsRoutes.update)

router.patch('/:id', comicsRoutes.modify)

router.delete('/:id', comicsRoutes.destroy)

module.exports = router