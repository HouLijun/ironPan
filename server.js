const express=require("express");
const app=express();
const path=require("path");

var compression=require("compression");
app.use(compression());

//req.session
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//req.cookie
const cookieParser=require('cookie-parser');
app.use(cookieParser());

//req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,"www")));
const indexRouter=require('./routes/index');
const loginRouter=require('./routes/login');
const adminRouter=require('./routes/admin');
/*前台页面*/
app.use('/',indexRouter);
/*登录页面*/
app.use('/login',loginRouter);
/*后台页面*/
app.use('/admin', function (req,res,next) {
    if(req.session.login=="login"){
        next();
    }else{
        res.redirect('/login');
    }
});
app.use('/admin',adminRouter);
app.listen(8001);
process.on('uncaughtException',function(exception){
    console.log("error");
});
