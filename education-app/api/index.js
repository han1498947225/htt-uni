import http from '@/common/js/request.js'

// 轮播图
async function getBanner() {
	const {
		data
	} = await http.get('/article/api/advert/show/1')
	return data
}

// 导航
async function getnav() {
	const {
		data
	} = await http.get('/article/api/category/label/list')
	return data
}

// 热门推荐
async function getcourse() {
	const {
		data
	} = await http.post('/course/api/course/search', {
		content: null,
		sort: "hot",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}

// 近期上新
async function getrecent() {
	const {
		data
	} = await http.post('/course/api/course/search', {
		content: null,
		sort: "new",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}

// 免费精选
async function getfree() {
	const {
		data
	} = await http.post('/course/api/course/search', {
		content: null,
		sort: null,
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}

// 付费精选
async function getpay() {
	const {
		data
	} = await http.post('/course/api/course/search', {
		content: null,
		sort: null,
		isFree: 0,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}

export {
	getpay,
	getfree,
	getrecent,
	getcourse,
	getBanner,
	getnav
}
