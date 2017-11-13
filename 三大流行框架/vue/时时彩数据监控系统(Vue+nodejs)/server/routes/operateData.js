/**
 * Created by huangin on 2017/3/10.
 */
"use strict";
const express = require('express');
const app = express();//app是express的一个实例
const router = express.Router();//配置路由句柄;
const MongoClient = require('mongodb').MongoClient;//引入数据库模块
const ObjectID = require('mongodb').ObjectID;//创建objectid实例

//插入一条数据
router.post('/insertone', (req, res, next) => {
    //通过body-parser解析传过来的请求体数据
    dbConnection((err, db) => {
        if (err) {
            return next(err);//向上抛出错误
        }
        ;
        // 获取并自动创建一个集合
        var col = db.collection('allData');
        col.insertOne({
            qishu: req.body.issue,
            haoma: req.body.number
        }, (err, result) => {
            if (err) {
                return next(err);
            }
            res.json({
                err_code: 0,
                err_message: '插入数据成功'
            })
            db.close();
        });
    })
});
//修改一条数据,一般更新一整条数据--->请求中contentType要设置成x-www-form-urlencoded
router.post('/updateone/:id', (req, res, next) => {
    //通过body-parser解析传过来的请求体数据
    console.log(req.body);
    console.log(req.params)
    dbConnection((err, db) => {
        if (err) {
            return next(err);//向上抛出错误
        }
        // 获取并自动创建一个集合
        var collection = db.collection('allData');
        collection.updateOne({
                //根据id来更新一整条数据
                _id: ObjectID(req.params.id)
            }
            , {
                $set: {
                    qishu: req.body.issue,
                    haoma: req.body.number
                }
            }, function (err, result) {
                if (err) {
                    return next(err);//抛出错误
                }
                res.json({
                    err_code: 0,
                    err_message: '数据更新成功',
                    data: result
                });
                //操作完成关闭数据库连接
                db.close();
            });
    })
});
//查询所有数据
router.get('/queryall', (req, res, next) => {
    dbConnection((err, db) => {
        if (err) {
            return next(err);//向上抛出错误
        }
        // 获取并自动创建一个集合
        var collection = db.collection('allData');
        // Find some documents
        collection.find({}).toArray(function (err, all) {
            if (err) {
                return next(err);
            } else {
                res.json({
                    result:all
                })
            }
            //查询完关闭数据库
            db.close();
        });
    })
});
//查询一条数据
router.post('/queryone', (req, res, next) => {
    dbConnection((err, db) => {
        if (err) {
            return next(err);//向上抛出错误
        }
        // 获取并自动创建一个集合
        var collection = db.collection('allData');
        collection.findOne({
            qishu: req.body.issue
        }, function (err, doc) {
            if (err) {
                return next(err);
            }
            res.json({
                //返回查询到的数据信息
                result: doc//未查询到返回null
            })


        });
        //操作完成关闭数据库连接
        db.close();
    })
});
//删除一条数据
router.delete('/deleteone/:id', (req, res, next) => {
    dbConnection((err, db) => {
        if (err) {
            return next(err);
        }
        //获取并自动创建一个集合
        var collection = db.collection('allData');
        // Insert some documents
        collection.deleteOne(
            {
                _id: ObjectID(req.params.id)
            },
            function (err, result) {
                if (err) {
                    return next(err);
                }
                res.json({
                    err_code: 0,
                    result: result
                })
            });
        db.close();
    })
});

//封装数据库连接操作
function dbConnection(callback) {
    // 数据库连接地址
    var url = 'mongodb://localhost:27017/shishicai';
// 将数据库连接到服务器
    MongoClient.connect(url, function (err, db) {
        if (err) {
            return callback(err);
        }
        callback(null, db);
        db.close();
    })
};


//导出当前路由模块
module.exports = router;