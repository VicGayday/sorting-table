const Router = require('express')
const router = new Router()
const pointsController = require('../controllers/points.controller')

router.post('/', pointsController.createPoint)
router.get('/', pointsController.getPoints)
router.get('/:id', pointsController.getOnePoint)
router.put('/', pointsController.updatePoint)
router.delete('/:id', pointsController.deletePoint)

module.exports = router