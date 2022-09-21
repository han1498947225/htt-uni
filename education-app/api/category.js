import http from "@/common/js/request.js"

async function getcategory(){
	const {data} =await http.get('/article/api/category/label/list')
	return data
}

export {
	getcategory
}