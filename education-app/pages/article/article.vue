<template>
	<view>
		<!-- 搜索框模块 -->
		<search></search>
		<!-- tab栏 -->
		<div class="nav-tab">
			<p class="active">推荐</p>
			<p>java</p>
			<p>前端</p>
			<p>云计算</p>
			<p>运维</p>
		</div>
		<!-- 内容 -->
		<div class="content">
			<div class="hot-content">
				<div class="text">
					<h5>做信封纸非建安费安静啊你发空间发你</h5>
					<p><span class="head"></span><span class="name">甜甜kflanfeafal;amss</span></p>
					<p><span class="price">免费</span><span class="time">164人在学</span></p>
				</div>
				<div class="img-box">
					<img src="/static/images/banner1.jpg" alt="">
				</div>
			</div>
			<div class="hot-content">
				<div class="text">
					<h5>做信封纸非建安费安静啊你发空间发你</h5>
					<p><span class="head"></span><span class="name">甜甜kflanfeafal;amss</span></p>
					<p><span class="price">免费</span><span class="time">164人在学</span></p>
				</div>
				<div class="img-box">
					<img src="/static/images/banner1.jpg" alt="">
				</div>
			</div>
			<div class="hot-content">
				<div class="text">
					<h5>做信封纸非建安费安静啊你发空间发你</h5>
					<p><span class="head"></span><span class="name">甜甜kflanfeafal;amss</span></p>
					<p><span class="price">免费</span><span class="time">164人在学</span></p>
				</div>
				<div class="img-box">
					<img src="/static/images/banner1.jpg" alt="">
				</div>
			</div>
			<div class="hot-content">
				<div class="text">
					<h5>做信封纸非建安费安静啊你发空间发你</h5>
					<p><span class="head"></span><span class="name">甜甜kflanfeafal;amss</span></p>
					<p><span class="price">免费</span><span class="time">164人在学</span></p>
				</div>
				<div class="img-box">
					<img src="/static/images/banner1.jpg" alt="">
				</div>
			</div>
			<div class="hot-content">
				<div class="text">
					<h5>做信封纸非建安费安静啊你发空间发你</h5>
					<p><span class="head"></span><span class="name">甜甜kflanfeafal;amss</span></p>
					<p><span class="price">免费</span><span class="time">164人在学</span></p>
				</div>
				<div class="img-box">
					<img src="/static/images/banner1.jpg" alt="">
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
	.content {
		margin-top: 200rpx;
	}

	.hot-content {

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
			margin: 20rpx 20rpx 20rpx 20rpx;

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
				.head,
				.time {
					color: #777;
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
		width: 100%;
		height: 70rpx;
		margin: 10rpx 0;
		line-height: 70rpx;
		background-color: #fff;

		p {
			float: left;
			margin: 0 35rpx;
		}

		.active {
			border-bottom: 3rpx solid #007aff;
			color: #007aff;
		}
	}
</style>
