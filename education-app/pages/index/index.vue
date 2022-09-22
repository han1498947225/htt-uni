<template>
	<view>
		<!-- 搜索组件 -->
		<search :Backgrounds="Backgrounds"></search>
		<!-- 轮播图 -->
		<banner @swiperItem="swiperItem" @click="todetail"></banner>
		<!-- nav -->
		<div class="nav-box">
			<div v-for="item,index in getnav" :key="index" @click="tosearchplus(item.name)">{{item.name}}</div>
			<div>全部分类</div>
		</div>
		<!-- 热门推荐 -->
		<div class="hot-box">
			<!-- 标题 -->
			<div class="hot-title">
				<p><span class="title">热门推荐</span><span class="tag">HOT</span></p>
				<p class="more">全部 ></p>
			</div>
			<!-- 内容 -->
			<scroll-view class="con-box" scroll-x="true">
				<div>
					<div class="hot-content" v-for="item,index in getcourse" :key="index" @click="todetail">
						<div class="img-box">
							<img :src="item.mainImage" alt="">
						</div>
						<div class="text">
							<h5>{{item.title}}</h5>
							<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
									class="name">{{item.nickName}}</span></p>
							<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
										src="/static/fonticon/kaishi.png" alt="">{{item.commTotal}}人在学</span></p>
						</div>
					</div>
				</div>
			</scroll-view>
		</div>
		<!-- 近期上新 -->
		<div class="hot-box">
			<!-- 标题 -->
			<div class="hot-title">
				<p><span class="title">近期上新</span><span class="tag">NEW</span></p>
				<p class="more">全部 ></p>
			</div>
			<!-- 内容 -->
			<scroll-view scroll-x="true">
				<div class="pay-box">
					<div class="pay-content" v-for="item,index in getrecent" :key="index" @click="todetail">
						<div class="img-box">
							<img :src="item.mainImage" alt="">
						</div>
						<div class="text">
							<h5>{{item.title}}</h5>
							<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
									class="name">{{item.nickName}}</span></p>
							<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
										src="/static/fonticon/kaishi.png" alt="">{{item.commTotal}}人在学</span></p>
						</div>
					</div>
				</div>
			</scroll-view>
		</div>
		<!-- 免费精选-->
		<div class="hot-box">
			<!-- 标题 -->
			<div class="hot-title">
				<p><span class="title">免费精选</span><span class="tag">FREE</span></p>
				<p class="more">全部 ></p>
			</div>
			<!-- 内容 -->
			<scroll-view class="con-box" scroll-x="true">
				<div>
					<div class="hot-content" v-for="item,index in getfree" :key="index" @click="todetail">
						<div class="img-box">
							<img :src="item.mainImage" alt="">
						</div>
						<div class="text">
							<h5>{{item.title}}</h5>
							<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
									class="name">{{item.nickName}}</span></p>
							<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
										src="/static/fonticon/kaishi.png" alt="">{{item.commTotal}}人在学</span></p>
						</div>
					</div>
				</div>
			</scroll-view>
		</div>
		<!-- 付费精选-->
		<div class="hot-box">
			<!-- 标题 -->
			<div class="hot-title">
				<p><span class="title">付费精选</span><span class="tag">NICE</span></p>
				<p class="more">全部 ></p>
			</div>
			<!-- 内容 -->
			<div class="con-box">
				<div class="hot-content" v-for="item,index in getpay" :key="index" @click="todetail">
					<div class="img-box">
						<img :src="item.mainImage" alt="">
					</div>
					<div class="text">
						<h5>{{item.title}}</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">{{item.nickName}}</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">{{item.commTotal}}人在学</span></p>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		getpay
	} from "@/api/index.js"
	import {
		getfree
	} from "@/api/index.js"
	import {
		getrecent
	} from "@/api/index.js"
	import {
		getcourse
	} from "@/api/index.js"
	import {
		getnav
	} from "@/api/index.js"
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				Backgrounds: '#006C00',
				getnav: [], //导航数据
				getcourse: [], //热门推荐
				getrecent: [], //近期上新
				getfree: [], //免费精选
				getpay: [], //付费精选
			})
			// 跳转详情
			const todetail = () => {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			}
			// 跳转搜索plus
			const tosearchplus = (name) => {
				uni.navigateTo({
					url: `/pages/search-plus/search-plus?content=${name}`,
				})
			}
			// 免费精选
			getpay().then(res => {
				data.getpay = res.data.records
			})
			// 免费精选
			getfree().then(res => {
				data.getfree = res.data.records
			})
			// 近期上新数据
			getrecent().then(res => {
				data.getrecent = res.data.records
			})
			// 导航数据
			getnav().then(res => {
				data.getnav = res.data.slice(0, 7)
			})
			// 热门推荐
			getcourse().then(res => {
				data.getcourse = res.data.records
			})
			// 获取传过来的颜色
			const swiperItem = (e) => {
				data.Backgrounds = e
			}
			return {
				todetail,
				tosearchplus,
				swiperItem,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	.pay-box {
		width: 10000rpx;

		.pay-content {
			margin-right: 20rpx;
			float: left;
			width: 340rpx;

			.img-box {
				width: 330rpx;
				height: 175rpx;
				margin: 24rpx;

				img {
					width: 330rpx;
					height: 175rpx;
				}
			}

			.text {
				margin: 10rpx 0 20rpx 25rpx;

				h4 {
					font-family: 600;
				}

				p {
					font-size: 18rpx;
					margin-top: 15rpx;

					img {
						width: 26rpx;
						height: 26rpx;
						padding: 7rpx 5rpx 0 0;
					}

					.name,
					.head {
						color: #aaa;
					}

					.price {
						font-size: 20rpx;
						color: #ff8c65;
						margin-right: 50rpx;
					}
				}
			}
		}
	}

	.hot-box {
		.hot-title {
			padding: 10rpx 30rpx;
			height: 80rpx;
			line-height: 80rpx;
			display: flex;
			justify-content: space-between;

			.title {
				font-size: 19px;
				font-weight: 500;
				color: #303133;
			}

			.tag {
				margin: 0 10rpx;
				font-size: 10px;
				background-image: -webkit-linear-gradient(left, #fb6932, #fa140e);
				background-image: linear-gradient(90deg, #fb6932, #fa140e);
				color: #fff;
				padding: 0 5px;
				border-radius: 15px 15px 15px 0;
			}

			.more {
				color: #aaa;
			}

		}

		.con-box {
			// overflow: hidden;
			width: 1800rpx;

			.hot-content {
				// float: left;
				width: 750rpx;
				display: flex;

				.img-box {
					width: 330rpx;
					height: 175rpx;
					margin: 24rpx;

					img {
						width: 330rpx;
						height: 175rpx;
					}
				}

				.text {
					margin: 20rpx 20rpx 20rpx 0;

					h4 {
						font-family: 600;
					}

					p {
						font-size: 18rpx;
						margin-top: 15rpx;

						img {
							width: 26rpx;
							height: 26rpx;
							padding: 7rpx 5rpx 0 0;
						}

						.name,
						.head {
							color: #aaa;
						}

						.price {
							font-size: 20rpx;
							color: #ff8c65;
							margin-right: 50rpx;
						}
					}
				}
			}
		}
	}

	.nav-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		div {
			width: 20%;
			height: 50rpx;
			background-color: #f8f9fa;
			text-align: center;
			line-height: 50rpx;
			margin: 15rpx 10rpx;
			border-radius: 15rpx;
			font-size: 16rpx;
		}
	}
</style>
