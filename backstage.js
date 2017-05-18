var express = require('express');
var bodyParse = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var app = new express();

console.log()
// 处理静态资源
app.use(express.static(path.resolve()));

// 处理 post 请求数据
app.use(bodyParse.json()); // 处理普通post
app.use(bodyParse.urlencoded({	// 处理form post
	extended: true  
}))

// 数据库 url
var dbUrl = "mongodb://localhost:27017/users";

// 验证账户密码
app.post('/account', function(req, res) {
	console.log('/account');

	var body = req.body;

	res.json({mes: 'ok', code: '1'})
})

// 获取书本列表
app.post('/books', function(req, res) {
	console.log('/books');

	var body = req.body;

	res.json({mes: 'ok', code: '1'})
})

// 开启服务器
var server = app.listen(8888, function(){
	console.log('server is running at 8888');
})
