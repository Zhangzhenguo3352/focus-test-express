var arr = [1,2,3]
// arr.filter  过滤 数组
	var new_Arr = arr.filter(function(item){
		//如果true元素保留，如果false 元素不保留
		return item > 1
	})
	console.log(new_Arr) // [ 2, 3 ]
// filter 相等的情况,
	var arr_2 = [{"id":1,"name":"name1"},{"id":2,"name":"name2"}]
	
	var new_Arr_2 = arr_2.filter(function(item){
		// 保留了 "id": "1" 的json 数据 
		return item.id == 1
	})[0]	
	console.log(new_Arr_2) //{ id: 1, name: 'name1' }