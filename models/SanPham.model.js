const mongoose = require('mongoose');
const SanPham = mongoose.Schema({
   Ma: Number,
   TenSP: String,
   MaLoai: Number,
   TrangThai: Boolean,
   Gia:{
      type: Number,
      min:0
   }
});
module.exports = SanPham;