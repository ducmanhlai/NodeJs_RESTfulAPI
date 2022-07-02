var express= require('express');
const mongoose= require('mongoose');
var router= express.Router();
var Tk= require('../models/TaiKhoan.model');
const ApiController = require('../controllers/Api.controller')
router.use('/api/test',ApiController.home);
// ví dụ creat collection on mongodb
router.use('/api/create',(req,res)=>{
   const tk = mongoose.model('TaiKhoan',Tk);
   var tk1= new tk( {TenDN: 'manh',
    MatKhau: 1234,
    MaQuyen: 1})
    tk1.save((err)=>{
        if (err) console.log(err)
        else res.send('thành công');
    });
});
module.exports = router;