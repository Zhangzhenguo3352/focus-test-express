var express = require('express');
var app = express();
//中间件 的一些方法
	app.use('/home/:id/:name',function(req,res,next){ // http://localhost:3000/home/aaa/bbb
		var id = req.params.id // req.params 获取 匹配不同当然对象
		var name = req.params.name
		console.log(id)  // aaa
		console.log(name) // bbb
		next()
	})
	app.use(function(req,res,next){ // http://localhost:3000/index.html?user=zhang
		console.log(req.path) //   /index.html
		console.log(req.query) //   { user: 'zhang' }  
		console.log(req.hostname) //获取主机名  localhost
	})
	app.listen(3000)


