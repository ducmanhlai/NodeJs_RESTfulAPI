const mongoose = require('mongoose');
const DanhMuc = mongoose.Schema({
   Ma: Number,
   TenDanhMuc: String
});
module.exports = DanhMuc;