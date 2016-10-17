var express = require('express');

var app = express();	
	//访问 home 时才会进来
	app.get('/home',function(req,res){
		// 设置编码 utf-8
		res.setHeader('Content-Type','text/plain;charset=utf-8')
		res.end('张振国')
	})
	//匹配所有 get 请求的路径,为了访问的路径没有配置 准备
	app.all('*',function(req,res){
		res.send('404')
	})
	app.listen(5000)