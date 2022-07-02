var express = require('express');
 class ApiController {
    home(req,res,nexr){
        res.send([{name:'manh', age: 20 },{name:'viet', age: 21},{name:'test', age: 22}])
    }
}
module.exports= new ApiController;
