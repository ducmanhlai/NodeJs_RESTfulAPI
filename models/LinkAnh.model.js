const mongoose = require('mongoose');
const LinkAnh = mongoose.Schema({
    MaSanPham: Number,
    Link: String
});
module.exports = LinkAnh;