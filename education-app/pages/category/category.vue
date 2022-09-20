<template>
	<view>
		<!-- 头部 -->
		<div class="assort">
			分类
			<img src="/static/sousuo.png" alt="" @click="tosearch">
		</div>
		<!-- 分类 -->
		<div class="assort-box">
			<!-- 左边 -->
			<div class="left">
				<p class="active">java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
				<p>java</p>
			</div>
			<!-- 右边 -->
			<div class="right">
				<p>javascript</p>
				<p>mfok</p>
				<p>html</p>
				<p>css</p>
				<p>css</p>
				<p>css</p>
				<p>css</p>
				<p>css</p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		setup() {
			// 跳转搜索
			const tosearch=()=>{
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
			return{
				 tosearch
			}
		}
	}
</script>

<style lang="scss">
.assort-box{
	display: flex;
	margin-top: 100rpx;
	.left{
		width: 25%;
		color: #88888a;
		background-color: #f8fafa;
		height: 100vh;
		p{
			margin:  40rpx 0rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
		}
		.active{
			border-left: 3px solid #345dc2;
			color: #345dc2;
		}
	}
	.right{
		height: 100vh;
		width: 75%;
		background-color: #fff;
		padding: 15rpx;
		p{
			float: left;
			border: 1rpx solid #ccc;
			width: 27%;
			margin: 20rpx 5rpx;
			height: 50rpx;
			line-height: 50rpx;
			padding: 10rpx;
			text-align: center;
			border-radius: 35rpx;
			font-size: 16rpx;			}
	}
}
.assort{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	background-color: #345dc2;
	text-align: center;
	color: #fff;
	line-height: 100rpx;
	img{
		position: absolute;
		top: 30rpx;
		right: 30rpx;
		width: 40rpx;
	}
}
</style>
