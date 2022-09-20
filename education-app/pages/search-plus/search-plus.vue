<template>
	<view>
		<!-- 搜索plus -->
		<search-plus></search-plus>
		<!-- tab栏 -->
		<div class="nav-tab">
			<p class="active">课程</p>
			<p>文章</p>
			<p>问答</p>
		</div>
		<div class="sort">
			<p>综合排序<img src="/static/fonticon/xiajianto.png" alt=""></p>
			<p>全部课程<img src="/static/fonticon/xiajianto.png" alt=""></p>
			<p>java <img src="/static/fonticon/xiajianto.png" alt=""></p>
		</div>
		<!-- 内容 -->
		<div class="content">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.sort{
		position: fixed;
		top: 190rpx;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 16rpx 0;
		img{
			width: 30rpx;
		}
	}
	.content {
		margin-top: 100rpx;
	}

	.nav-tab {
		margin-top: 90rpx;
		width: 100%;
		height: 60rpx;
		padding: 10rpx 0;
		line-height: 60rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;

		p {
			margin: 0 40rpx;
		}

		.active {
			border-bottom: 3rpx solid #007aff;
			color: #007aff;
		}
	}

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
</style>
