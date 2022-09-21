import http from '@/common/js/request.js'

// 热门回答
async function hotanswer() {
	const {
		data
	} = await http.post('/question/api/question/hot', {
		current: 1,
		size: 10
	})
	return data
}

// 最新问题
async function newanswer() {
	const {
		data
	} = await http.post('/question/api/question/new', {
		current: 1,
		size: 10
	})
	return data
}

// 等待回答
async function etcanswer() {
	const {
		data
	} = await http.post('/question/api/question/wait', {
		current: 1,
		size: 10
	})
	return data
}

export {
	etcanswer,
	newanswer,
	hotanswer
}
