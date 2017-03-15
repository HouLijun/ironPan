const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mysql = require('../mysql.js');

const async = require('async');//异步转同步
const multer = require('multer');   //上传文件必备
const upload = multer({dest: 'uploads/'});

/*-------------后台首页-----------*/
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin.html'));
});
/*-------------后台导航-----------*/
router.get('/getNews', (req, res) => {
    mysql.query("select * from news_cate ", [], function (err, result) {
        var arr = [];
        result.forEach((v, i) => {
            arr.push(v.cName);
        })
        res.json(arr);
    });
});
router.get('/getFood', (req, res) => {
    mysql.query("select * from food_cate ", [], function (err, result) {
        var arr = [];
        result.forEach((v, i) => {
            arr.push(v.cName);
        })
        res.json(arr);
    });
});
router.get('/getUpkeep', (req, res) => {
    mysql.query("select * from upkeep_cate ", [], function (err, result) {
        var arr = [];
        result.forEach((v, i) => {
            arr.push(v.cName);
        })
        res.json(arr);
    });
});
router.get('/getProduct', (req, res) => {
    mysql.query("select * from product_cate ", [], function (err, result) {
        var arr = [];
        result.forEach((v, i) => {
            arr.push(v.cName);
        })
        res.json(arr);
    });
});
/*-------------退出后台-----------*/
router.get('/out', (req, res) => {
    req.session.login = null;
    res.clearCookie('hash', {path: '/'});
    res.redirect('/login');
});
/*-------------管理员页面-----------*/
router.get('/user', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_user.html'));
});
/* 管理员修改账户*/
//修改
router.post('/admin_user/update', (req, res) => {
    mysql.query("update admin_user set account=? ,pw=?, password=? , hash=?", [req.body.account, req.body.pw, req.body.password, req.body.hash], (err, data) => {
        if (!err) {
            res.json('修改成功');
        }
    })
});
//从数据库中取出显示在页面中
router.post('/admin_user/select', (req, res) => {
    mysql.query("select * from admin_user", [], (err, data) => {
        res.json(data);
    });
});
/*----------------------------------------------新闻页面-------------------------------------*/
router.get('/news', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_news.html'));
});
/*.............获取相应类别 页面.............*/
router.get('/news/:cate_id', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_news.html'));
});
/*..............获取页面数据..................*/
router.post("/news/:cate_id", (req, res) => {
    mysql.query("select * from news_detail where cate_id=?", [req.params.cate_id], (err, data) => {
        res.json(data)
    })
});

/*增加页面*/
router.post("/news_add/:id", (req, res) => {
    mysql.query("INSERT INTO news_detail (thumb,cate_id) VALUES (?,?)", ["upload.png", req.params.id], (err, data) => {
        if (!err) {
            res.json(data.insertId);
        }
    })
});

/*.............删除页面....*/
router.post("/news/:cate_id/:id", (req, res) => {
    mysql.query("DELETE FROM news_detail WHERE id=?", [req.params.id], (err, data) => {
        if (!err) {
            res.json("ok");
        }
    })
});

/*........更改........*/
router.post('/news_update', (req, res) => {
    mysql.query(`update news_detail set ${req.body.index}=? where id=?`, [req.body.value, req.body.id], (err, data) => {
        if (!err) {
            res.json('ok');
        } else {
            res.json('wrong');
        }
    })
});
/*更改图片*/
router.post("/news_thumb", upload.single("file"), function (req, res) {
    async.series([
        function (callback) {
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve("./www/public/images/", req.file.originalname)));
            callback(null)
        },
        function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null)
        }
    ], function () {
        mysql.query("update news_detail set thumb=? where id=?", [req.file.originalname, req.body.id], (err, data) => {
            if (!err) {
                res.json("ok")
            } else {
                res.json("wrong")
            }
        })
    })
});

/*文章的编辑*/
router.post("/editor", (req, res) => {
    mysql.query(`update ${req.body.index}_detail set detail=? where id=?`, [req.body.detail, req.body.id], (err, data) => {
        if (!err) {
            res.json("ok")
        } else {
            res.json("wrong")
        }
    })
})
/*-------------------------------------------产品页面-------------------------------------------------*/
router.get('/product', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_product.html'));
});
/*.............获取相应类别 页面.............*/
router.get('/product/:cate_id', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_product.html'));
});
/*..............获取页面数据..................*/
router.post("/product/:cate_id", (req, res) => {
    mysql.query("select * from product_detail where cate_id=?", [req.params.cate_id], (err, data) => {
        res.json(data)
    })
});

/*增加页面*/
router.post("/product_add/:id", (req, res) => {
    mysql.query("INSERT INTO product_detail (thumb,cate_id) VALUES (?,?)", ["upload.png", req.params.id], (err, data) => {
        if (!err) {
            res.json(data.insertId);
        }
    })
});

/*.............删除页面....*/
router.post("/product/:cate_id/:id", (req, res) => {
    mysql.query("DELETE FROM product_detail WHERE id=?", [req.params.id], (err, data) => {
        if (!err) {
            res.json("ok");
        }
    })
});

/*........更改........*/
router.post('/product_update', (req, res) => {
    mysql.query(`update product_detail set ${req.body.index}=? where id=?`, [req.body.value, req.body.id], (err, data) => {
        if (!err) {
            res.json('ok');
        } else {
            res.json('wrong');
        }
    })
});
/*更改图片*/
router.post("/product_thumb",upload.single("file"),function(req,res){
    var arr = req.file.originalname.split(".");
    var suffix = arr[arr.length - 1];
    var imgName=req.file.filename + "." + suffix;
    async.series([
        function(callback){
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve("./www/public/images/",imgName)));
            callback(null)
        },
        function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null)
        }
    ],function(){
        mysql.query("update product_detail set thumb=? where id=?",[imgNamereq.body.id],(err,data)=>{
            if (!err) {
                res.json("ok")
            } else {
                res.json("wrong")
            }
        })
    })
});

/*文章的编辑*/
router.post("/product_editor", (req, res) => {
    mysql.query("update product_detail set detail=? where id=?", [req.body.detail, req.body.id], (err, data) => {
        if (!err) {
            res.json("ok")
        } else {
            res.json("wrong")
        }
    })
})
/*----------------------------------------------餐饮美食页面---------------------------------------------------------*/
router.get('/food', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_food.html'));
});
/*.............获取相应类别 页面.............*/
router.get('/food/:cate_id', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_food.html'));
});
/*..............获取页面数据..................*/
router.post("/food/:cate_id", (req, res) => {
    mysql.query("select * from food_detail where cate_id=?", [req.params.cate_id], (err, data) => {
        res.json(data)
    })
});

/*增加页面*/
router.post("/food_add/:id", (req, res) => {
    mysql.query("INSERT INTO food_detail (thumb,cate_id) VALUES (?,?)", ["upload.png", req.params.id], (err, data) => {
        if (!err) {
            res.json(data.insertId);
        }
    })
});

/*.............删除页面....*/
router.post("/food/:cate_id/:id", (req, res) => {
    mysql.query("DELETE FROM food_detail WHERE id=?", [req.params.id], (err, data) => {
        if (!err) {
            res.json("ok");
        }
    })
});

/*........更改........*/
router.post('/food_update', (req, res) => {
    mysql.query(`update food_detail set ${req.body.index}=? where id=?`, [req.body.value, req.body.id], (err, data) => {
        if (!err) {
            res.json('ok');
        } else {
            res.json('wrong');
        }
    })
});
/*更改图片*/
router.post("/food_thumb", upload.single("file"), function (req, res) {
    async.series([
        function (callback) {
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve("./www/public/images/", req.file.originalname)));
            callback(null)
        },
        function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null)
        }
    ], function () {
        mysql.query("update food_detail set thumb=? where id=?", [req.file.originalname, req.body.id], (err, data) => {
            if (!err) {
                res.json("ok")
            } else {
                res.json("wrong")
            }
        })
    })
});

/*文章的编辑*/
router.post("/editor", (req, res) => {
    mysql.query(`update ${req.body.index}_detail set detail=? where id=?`, [req.body.detail, req.body.id], (err, data) => {
        if (!err) {
            res.json("ok")
        } else {
            res.json("wrong")
        }
    })
})

/*---------------------------------------------------------保养页面---------------------------------------------------*/
router.get('/upkeep', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_upkeep.html'));
});
/*.............获取相应类别 页面.............*/
router.get('/upkeep/:cate_id', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_upkeep.html'));
});
/*..............获取页面数据..................*/
router.post("/upkeep/:cate_id", (req, res) => {
    mysql.query("select * from upkeep_detail where cate_id=?", [req.params.cate_id], (err, data) => {
        res.json(data)
    })
});

/*增加页面*/
router.post("/upkeep_add/:id", (req, res) => {
    mysql.query("INSERT INTO upkeep_detail (thumb,cate_id) VALUES (?,?)", ["upload.png", req.params.id], (err, data) => {
        if (!err) {
            res.json(data.insertId);
        }
    })
});

/*.............删除页面....*/
router.post("/upkeep/:cate_id/:id", (req, res) => {
    mysql.query("DELETE FROM upkeep_detail WHERE id=?", [req.params.id], (err, data) => {
        if (!err) {
            res.json("ok");
        }
    })
});

/*........更改........*/
router.post('/upkeep_update', (req, res) => {
    mysql.query(`update upkeep_detail set ${req.body.index}=? where id=?`, [req.body.value, req.body.id], (err, data) => {
        if (!err) {
            res.json('ok');
        } else {
            res.json('wrong');
        }
    })
});
/*更改图片*/
router.post("/upkeep_thumb", upload.single("file"), function (req, res) {
    async.series([
        function (callback) {
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve("./www/public/images/", req.file.originalname)));
            callback(null)
        },
        function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null)
        }
    ], function () {
        mysql.query("update upkeep_detail set thumb=? where id=?", [req.file.originalname, req.body.id], (err, data) => {
            if (!err) {
                res.json("ok")
            } else {
                res.json("wrong")
            }
        })
    })
});

/*文章的编辑*/
router.post("/editor", (req, res) => {
    mysql.query(`update ${req.body.index}_detail set detail=? where id=?`, [req.body.detail, req.body.id], (err, data) => {
        if (!err) {
            res.json("ok")
        } else {
            res.json("wrong")
        }
    })
})

/*--------------Banner页面---------------*/
router.get('/banner', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_banner.html'));
});
router.get('/getBanner', (req, res) => {
    var sql = "select * from banner";
    mysql.query(sql, [], function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data);
        }
    })
})
router.get('/addBanner', (req, res) => {
    var sql = "insert into banner (id,url,color,position) values (null,'','',0) ";
    mysql.query(sql, [], function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data.insertId);
        }
    })
});
router.post('/delBanner', (req, res) => {
    var sql = "delete from banner where id=?"
    mysql.query(sql, [req.body.id], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(200);
        }
    })
});
router.post('/chBannerPosition', (req, res) => {
    var sql = "update banner set position=? where id=?"
    mysql.query(sql, [req.body.key, req.body.id], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(200);
        }
    })
});
router.post('/chBannerBg', (req, res) => {
    var sql = "update banner set color=? where id=?"
    mysql.query(sql, [req.body.bgColor, req.body.id], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(200);
        }
    })
});
router.post("/uploadBanner",upload.single("file"),(req,res)=>{
    var arr = req.file.originalname.split(".");
    var suffix = arr[arr.length - 1];
    var imgName=req.file.filename + "." + suffix;
    async.series([
        function(callback){
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve("./www/public/images/",imgName)));
            callback(null)
        },
        function(callback){
            fs.unlink(path.resolve(req.file.path));
            callback(null)
        }
    ],function(){
        mysql.query("update banner set url=? where id=?",[imgName,req.body.id],(err,data)=>{
            if(!err){
                res.json(200)
            }else{
                res.json(err);
            }
        })
    })
})


/*--------------video页面---------------*/
router.get('/video', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_video.html'));
});
router.get('/getVideo', (req, res) => {
    var sql = "select * from video";
    mysql.query(sql, [], function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data);
        }
    })
});
router.get('/addVideo', (req, res) => {
    var sql = "insert into video (id,url) values (null,'') ";
    mysql.query(sql, [], function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data.insertId);
        }
    })
});
router.post('/delVideo', (req, res) => {
    var sql = "delete from video where id=?";
    mysql.query(sql, [req.body.id], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(200);
        }
    })
});
router.post('/chVideo', (req, res) => {
    var sql = "update video set url=? where id=?"
    mysql.query(sql, [req.body.url, req.body.id], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(200);
        }
    })
});

/*--------------文章详情编辑页面---------------*/
router.get('/detail', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_detail.html'));
});
router.get('/detail/:cate', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_detail.html'));
});
router.get('/detail/:cate/:cate_id/:essay_id', (req, res) => {
    res.sendFile(path.resolve('./www/views/admin/admin_detail.html'));
});
/*--------------富文本编辑器获取内容---------------*/
router.post('/getEditorContent', function (req, res) {
    var sql = `select detail from ${req.body.cate + "_detail"} where id=?`
    mysql.query(sql, [req.body.id], function (err, data) {
        res.json(data[0].detail);
    })
});
/*--------------富文本编辑器上传图片---------------*/
//富文本编辑器上传图片
router.post('/editorImg', upload.single('wangEditorH5File'), function (req, res) {
    var arr = req.file.originalname.split(".");
    var suffix = arr[arr.length - 1]
    var write = fs.createWriteStream('www/public/images/' + req.file.filename + "." + suffix);
    fs.createReadStream(req.file.path).pipe(write);
    write.on('finish', (req, res) => {
        fs.unlink(path.resolve(req.file.path));
    });
    res.end('/public/images/' + req.file.filename + "." + suffix);
});

module.exports = router;