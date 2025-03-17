const express = require('express')
const router = express.Router()
const videosRoutes = require('../controllers/videosController')

router.get('/', videosRoutes.index)

router.get('/:id', videosRoutes.show)

router.post('/', videosRoutes.create)

router.put('/:id', videosRoutes.update)

router.patch('/:id', videosRoutes.modify)

router.delete('/:id', videosRoutes.destroy)

module.exports = router