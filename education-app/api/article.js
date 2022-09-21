import http from '@/common/js/request.js'

// tab数据
async function tabarticle(){
	const {data}=await http.get('/article/api/category/label/list')
	return data
}

// 推荐数据
async function recommend(id){
	const {data}=await http.post('/article/api/article/search',{
		size:10, current:1,categoryId:id
	})
	return data
}

export {
	recommend,
	tabarticle
}