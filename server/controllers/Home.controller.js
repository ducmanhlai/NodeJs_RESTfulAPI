var express = require('express');
 class HomeController {
    home(req,res,nexr){
        res.render('index.html');
    }
}
module.exports= new HomeController;
