const mongoose = require('mongoose');

const TaiKhoan= new mongoose.Schema({
   TenDN: String,
   MatKhau: String,
   MaQuyen: Number,
})
module.exports = TaiKhoan;