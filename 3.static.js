var express = require('express');
var path = require('path')
//express.static 静态文件服务中间件
var app = express();
app.listen(3002)
	// 拼接到了 puile 文件下
	app.use(express.static(path.join(__dirname,'puile')))  
	// 可以访问 http://localhost:3002/index.css ，拿到 puile/index.css 的内容
	// 可以访问 http://localhost:3002/1.txt ，拿到 puile/1.txt 的内容