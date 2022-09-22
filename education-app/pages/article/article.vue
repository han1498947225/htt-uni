<template>
	<view>
		<!-- 搜索框模块 -->
		<search></search>
		<!-- tab栏 -->
		<scroll-view scroll-x="true">
			<div class="nav-tab">
				<div class="item">
					<p :class="{active:i==null}" @click="totab(null,null)">推荐</p>
					<p v-for="item,index in tabarticle" :key="index" @click="totab(item.id,index)"
						:class="{active:index==i}">
						{{item.name}}
					</p>
				</div>
			</div>
		</scroll-view>
		<!-- 内容 -->
		<div class="content">
			<div class="hot-content" v-for="item,index in recommend" :key="index">
				<div class="text">
					<h5>{{item.title}}</h5>
					<p class="time">{{item.summary}}</p>
					<p><span class="head"></span><span class="name">{{item.nickName}}</span></p>
					<p><span class="price">免费</span><span class="time">{{item.viewCount}}人在学</span></p>
				</div>
				<div class="img-box" v-show="item.imageUrl">
					<img :src="item.imageUrl" alt="">
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		recommend
	} from '@/api/article.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	import {
		tabarticle
	} from '@/api/article.js'
	export default {
		setup() {
			const data = reactive({
				tabarticle: [], //tab数据
				i: null, //下标
				recommend: [] //推荐数据
			})
			// 高亮
			const totab = (id, index) => {
				if (index == null) {
					data.i = null
					recommend().then(res => {
						data.recommend = res.data.records
					})
				} else {
					data.i = index
					recommend(id).then(res => {
						data.recommend = res.data.records
					})
				}
			}
			// 推荐数据
			recommend().then(res => {
				data.recommend = res.data.records
			})
			// 导航栏数据
			tabarticle().then(res => {
				data.tabarticle = res.data
			})
			return {
				totab,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		margin-top: 200rpx;
	}

	.hot-content {

		width: 750rpx;
		display: flex;

		.img-box {
			width: 330rpx;
			height: 175rpx;
			margin: 24rpx 24rpx 20rpx 0;

			img {
				width: 330rpx;
				height: 175rpx;
			}
		}

		.text {
			margin: 20rpx 20rpx 20rpx 20rpx;

			h4 {
				font-family: 600;
			}

			.name,
			.head,
			.time {
				width: 350rpx;
				color: #999;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			p {
				font-size: 18rpx;
				margin-top: 15rpx;

				img {
					width: 26rpx;
					height: 26rpx;
					padding: 7rpx 5rpx 0 0;
				}



				.price {
					font-size: 20rpx;
					margin-right: 20rpx;
				}
			}
		}
	}

	.nav-tab {
		position: fixed;
		top: 110rpx;
		left: 0;
		height: 70rpx;
		width: 10000rpx;
		margin: 10rpx 0;
		line-height: 70rpx;
		background-color: #fff;

		.item {
			display: flex;

			p {
				margin: 0 35rpx;
			}
		}

		.active {
			border-bottom: 3rpx solid #007aff;
			color: #007aff;
		}
	}
</style>
