<template>
	<view>
		<!-- 搜索plus -->
		<search-plus></search-plus>
		<!-- 热门搜索 -->
		<p style="margin-top: 120rpx;">热门搜索</p>
		<div class="box">
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
		</div>
		<p><span>历史搜索</span><span>清空</span></p>
		<div class="box">
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
			<div class="item">java</div>
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
p{
	margin: 20rpx 10rpx;
	font-weight: 600;
	display: flex;
	justify-content: space-between;
}
.box{
	width: 100%;
	padding: 0 20rpx;
	height: 250rpx;
	.item{
			float: left;
			border: 1rpx solid #ccc;
			width: 16%;
			margin: 20rpx 5rpx;
			height: 50rpx;
			line-height: 50rpx;
			padding: 5rpx;
			text-align: center;
			border-radius: 35rpx;
			font-size: 16rpx;			
	}
}
</style>
