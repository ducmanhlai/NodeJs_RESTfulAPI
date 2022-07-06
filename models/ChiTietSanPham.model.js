const mongoose = require('mongoose');
const ChiTietSanPham = mongoose.Schema({
  MaSanPham: Number,
  SoLuong: Number,
  Size: String,
  MoTa: String,
  Mau: String,
});
module.exports = ChiTietSanPham;