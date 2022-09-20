<template>
	<view>
		<!-- 搜索组件 -->
		<search></search>
		<!-- 轮播图 -->
		<banner></banner>
		<!-- nav -->
		<div class="nav-box">
			<div @click="tosearchplus">java</div>
			<div>前端</div>
			<div>云计算</div>
			<div>运维</div>
			<div>测试</div>
			<div>UI设计</div>
			<div>人工智能</div>
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
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
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
			<scroll-view class="pay-box" scroll-x="true">
				<div class="pay-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="pay-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
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
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
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
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
				<div class="hot-content">
					<div class="img-box">
						<img src="/static/images/banner1.jpg" alt="">
					</div>
					<div class="text">
						<h5>做信封纸非建安费安静啊你发空间发你</h5>
						<p><span class="head"><img src="/static/fonticon/touxiang.png" alt=""></span><span
								class="name">甜甜</span></p>
						<p><span class="price"><img src="/static/fonticon/qiandai.png" alt="">免费</span><span><img
									src="/static/fonticon/kaishi.png" alt="">164人在学</span></p>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import { getBanner } from '@/api/index.js'
	import { reactive,toRefs } from 'vue'
	export default {
		setup() {
			const data=reactive({
				bannerdata:[] //轮播图数据
			})
			// 跳转搜索plus
			const tosearchplus=()=>{
				uni.navigateTo({
					url:'/pages/search-plus/search-plus'
				})
			}
			// 轮播图数据
			// getBanner().then(res => {
			// 	console.log(res);
			// 	data.bannerdata=res.data
			// })
			return {
				tosearchplus,
				// ...toRofs(data)
			}
		}
	}
</script>

<style lang="scss">
	.pay-box{
	// display: flex;
		.pay-content{
			margin-right: 12rpx;
			float: left;
			width: 340rpx;
			.img-box {
				width: 350rpx;
				margin: 24rpx;
			
				img {
					width: 100%;
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
			width: 1500rpx;
			
			.hot-content {
				// float: left;
				width: 750rpx;
				display: flex;

				.img-box {
					width: 350rpx;
					margin: 24rpx;

					img {
						width: 100%;
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
