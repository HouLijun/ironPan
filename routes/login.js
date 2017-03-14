const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('../mysql');
const crypto = require('crypto');
const session=require('express-session');


router.get('/', function (req, res) {
    if(!req.cookies.hash){//req.cookies读取cookie
        res.sendFile(path.resolve('./www/views/admin/login.html'));
    }else {
        mysql.query('select * from admin_user where hash=?',[req.cookies.hash],function (err,result) {
            if(result.length===0){
                res.sendFile(path.resolve('./www/views/admin/login.html'));
            }else{
                req.session.login='login';
                res.redirect('/admin');
            }

        })
    }

})

router.post('/check', function (req, res) {
    const hash = crypto.createHash('md5');
    hash.update(req.body.password);
    const x=hash.digest('hex');
    mysql.query('select * from admin_user where account=?', [req.body.userName], function (err, result) {
        if (result.length === 0) {
            res.json('err');
        } else {
            if (result[0].password === x) {
                //设置session
                req.session.login='login';
                if(req.body.remember){
                    res.cookie("hash", result[0].hash, {expires: new Date(Date.now() + 86400000), path: "/"});//设置cookie
                }
                res.json('ok');
            } else {
                res.json('err');
            }

        }
    })
})


module.exports = router;