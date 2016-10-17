var express = require('express');
var app = express();

app.listen(3001)
app.set('view engine','ejs')
app.set('views',__dirname)
var path = require('path');
app.use(function(req,res,next){
	console.log('tmpl')
	res.aaa = function(tmpl,data){
		console.log(tmpl)
		fs.readFile(path.join(__dirname,tmpl),'utf-8',function(err,result){
			result = result.replace(/<%=(\w)%>/,function(input,group){
				return data[group]
			})
			res.setHeader('Content-Type','text/html')
			res.send(result)
		})
	}
})
app.get('/',function(req,res){
	res.aaa('index.ejs',{
		title:'ejs模板引擎渲染的页面'
	})
})