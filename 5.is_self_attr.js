var json = {"name":"zhang"}
//判断是不是 自己的属性

// 直接判断
	console.log( json.hasOwnProperty('name') ) // true

// 循环判断
	for(var attr in json){
		console.log(attr,json) //  name, { name: 'zhang' }
		console.log( json.hasOwnProperty('name') ) // true
	}
	