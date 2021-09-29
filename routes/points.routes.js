const Router = require('express')
const router = new Router()
const pointsController = require('../controllers/points.controller')

router.post('/', pointsController.createPoint)
router.get('/', pointsController.getPoints)
router.get('/:id', pointsController.getOnePoint)
router.put('/', pointsController.updatePoint)
router.delete('/:id', pointsController.deletePoint)

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/public/index.html"));
});

module.exports = router