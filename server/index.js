const express = require('express');
const app = express();
var port = process.env.port || 3000;
const HomeRouter= require('./routers/Home.router')
app.use(express.static('../client/views/'));
app.use(express.static('../client/'));
app.use(HomeRouter);
app.listen(port,()=>{
    console.log(`running on port ${port}`)
})