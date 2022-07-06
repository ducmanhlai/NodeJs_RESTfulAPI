var express= require('express');
const mongoose= require('mongoose');
var router= express.Router();
var Tk= require('../models/TaiKhoan.model');
const ApiController = require('../controllers/Api.controller')
router.use('/api/test',ApiController.home);
// ví dụ creat collection on mongodb
router.use('/api/create',ApiController.CreatDanhMuc);
module.exports = router;