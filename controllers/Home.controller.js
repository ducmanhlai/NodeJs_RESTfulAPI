var express = require('express');
 class HomeController {
    home(req,res,next){
        res.render('home');
    }
}
module.exports= new HomeController;
