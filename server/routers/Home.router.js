var express= require('express');
var router =express.Router();
const HomeController= require('../controllers/Home.controller');
router.use('/',HomeController.home);
module.exports = router;