const HomeRouter= require('./Home.router')
const ApiRouter =require('./Api.router')
function route(app){
    app.use(ApiRouter);
    app.use(HomeRouter);
}
module.exports = route;