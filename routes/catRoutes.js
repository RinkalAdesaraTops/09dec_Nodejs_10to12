var express = require('express')
const { disp } = require('../controllers/CatController')
var router = express.Router()

router.get('/',disp)
router.post('/add',add)

module.exports = router