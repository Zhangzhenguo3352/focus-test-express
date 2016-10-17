var express = require('express');
var fs = require('fs')
var bodyParser = require('body-parser');
//中间件方式实现 post请求
var app = express()
app.listen(3003)	
	app.use(bodyParser.urlencoded({extended:true}))
	app.get('/',function(req,res){
		res.setHeader('Content-Type','text/html;charset=utf-8')
		fs.createReadStream('./index.html').pipe(res)
	})
	app.post('/login',function(req,res){
		res.send(req.body) // 这就是 post 提交过来的数据，又给了客户端
	})