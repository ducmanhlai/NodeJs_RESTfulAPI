var express = require('express');
const mongoose = require('mongoose');
const DanhMucModel = require('../models/DanhMuc.model');
 class ApiController {
    home(req,res,nexr){
        res.send([{name:'manh', age: 20 },{name:'viet', age: 21},{name:'test', age: 22}])
    }
  async  CreatDanhMuc(req,res,next){
        const TenDanhMuc = req.body.TenDanhMuc;
        const DanhMuc = mongoose.model('DanhMuc', DanhMucModel);
        await  DanhMuc.create({Ma:1,TenDanhMuc:TenDanhMuc}).then(()=>{
            res.send('Thành công')
        }).catch((err)=>{
            res.send('Lỗi');
        });
        
    }
}
module.exports= new ApiController;
