const mongoose = require('mongoose');
const LoaiHang = mongoose.Schema({
    Ma: Number,
    TenLoai: String,
    MaDanhMuc: Number
});
module.exports = LoaiHang;