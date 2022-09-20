<template>
	<view>
		<div class="search-box" @click="tosearch">
			<div>
				<img src="../../static/sousuo.png" alt="">
				<p>搜索你想要的内容</p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name:"search",
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
.search-box{
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 95%;
	background-color: #0072b7;
	height: 80rpx;
	color: #bbb;
	padding: 20rpx;
	div{
		width: 100%;
		height: 100%;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		img{
			width: 45rpx;
			margin-right: 10rpx;
		}
	}
}
</style>