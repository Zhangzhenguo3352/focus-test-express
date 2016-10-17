var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

// 路径的id 输入几 filter 方法会拿出 哪个数组的集合
	app.use(bodyParser.urlencoded({extended:true}))
	app.get('/home/:id',function(req,res){
		var id = req.params.id;
		var users = require('./1.json')
		var new_use = users.filter(function(item){
			console.log(item)
			return item.id == id
		})[0]
		if(new_use){
			// id = 3 ,有时
			res.send(new_use)  // http://localhost:3003/home/3
		}else{
			// id = 4  ，没有时
			res.send({"msg":"此用户不存在"})  // http://localhost:3003/home/4  一个不存在的 用户，id
		}
	})
	// post 方式
	app.post('/users',function(req,res){
		res.send('sdas')
	})
	// put 完整更新，key和value 必须完整,两者缺一不可
	app.put('/users/:id',function(req,res){
		var newUser = req.body
		var id = req.params.id;
		var json = require('./1.json');
		json = json.map(function(item){
			if(item.id == id){
				console.log(newUser)
				return newUser
			}else{
				return item
			}
		})
		fs.writeFile('./1.json',JSON.stringify(json),function(err,data){
			if(err){ // 写入错误
				console.log('写入错误')
			}else{
				res.send(json)
			}
		})

	})

	//app.patch()  改某一项，某一项的某个值也可以 用这个方法 , 其实和上面的 put 没有什么区别
	app.patch('/users/:id',function(req,res){
		var body_data = req.body //客户端的 请求 地址
		var id = req.params.id  // 最后的参数  id 
		var json = require('./1.json') // 数据 1.json 文件
		json = json.map(function(item){
			if(item.id == id){  // 如果 数组中的 id 和 参数的id 相等时
				for(var attr in body_data){
					console.log(attr,body_data[attr])
					// 循环判断是不是 自己的属性
					if(body_data.hasOwnProperty(attr)){   //为了修改某一项，条件语句
						//id 和数组相对的数组 被赋值 我写的 内容
						item[attr] = body_data[attr]
					}
				}
				body_data = item
				return body_data  // 它整体返回
			}else{
				return item  // 如果不相等 还返回 以前的内容
			}
		})

		// 文件写入  1，写入到哪个文件，2 转换成buffer数据内容，3 是否成功
		fs.writeFile('./1.json',JSON.stringify(json),function(err,data){
			if(err){
				console.log('文件写入错误')
			}else{
				res.send(json)
			}
		})
	})

	// delete  访问哪个  id  删除哪个 json 对象，利用 filter 
	app.delete('/users/:id',function(req,res){
		var body_data = req.body
		var id = req.params.id
		var json = require('./1.json')
		json = json.filter(function(item){
			return item.id != id
		})
		fs.writeFile('./1.json',JSON.stringify(json),function(err,data){
			res.send(json)
		})
	})
	app.listen(3003)

// 1.json  里面写的内容
	/*
		[{"id":1,"name":"张三"},{"id":2,"name":"李四"},{"id":3,"name":"王五"}]
	*/
