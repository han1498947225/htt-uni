import http from '@/common/js/request.js'

async function getBanner() {
	const {data} = await http.get('/article/api/advert/show/1')
	return data
}

export {
	getBanner
}