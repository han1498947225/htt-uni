<template>
	<view>
		<div class="search-box">
			<img src="/static/fonticon/fanhui.png" alt="" @click="back">
			<input type="text" placeholder="搜索你想要的内容">
			<img src="/static/sousuo.png" alt="" class="img">
			<span @click="back">取消</span>
		</div>
	</view>
</template>

<script>
	export default {
		name: "search-plus",
		setup() {
			// 返回上一级
			const back = () => {
				uni.navigateBack({
					delta: 1
				})
			}
			return {
				back
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		z-index: 1;
		position: fixed;
		background-color: #fff;
		top: 0;
		left: 0;
		width: 95%;
		padding: 0 10rpx;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;

		img {
			width: 45rpx;
		}

		.img {
			position: absolute;
			left: 90rpx;
		}

		input {
			padding-left: 70rpx;
			flex: 1;
			background-color: #f0f1f2;
			height: 60rpx;
			border-radius: 25rpx;
			margin: 0 20rpx;
		}
	}
</style>
