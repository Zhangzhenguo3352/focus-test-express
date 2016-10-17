var express = require('express');
var app = express()
app.listen(3003)
// redirect 重定向，当客户端向 /  发起请求的时候，重定向到  /home 路由
	//访问  http://localhost:3003/home
	app.get('/',function(req,res){
		res.redirect('/home')
	})
	app.get('/home',function(req,res){
		res.send('重定向到了 home 路由')
	})