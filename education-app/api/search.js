import http from '@/common/js/request.js'

// 搜索
async function search(content) {
	const {
		data
	} = await http.post('/course/api/course/search', {
		content: content,
		sort: null,
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1
	})
	return data
}

export {
	search
}