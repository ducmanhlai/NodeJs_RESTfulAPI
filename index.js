const express = require('express');
const app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;
var route = require('./routers');
//var mongodb = require('./services/connect_MDB');
var hand = exphbs.create({
    extname: 'hbs'
    });
app.engine('hbs',hand.engine)
app.set('view engine', 'hbs');
app.set('views','./client/views')
app.use(express.static('./client'));
route(app);
let server = app.listen(port,()=>{
    console.log(`running on http://127.0.0.1:${port}`)
})
