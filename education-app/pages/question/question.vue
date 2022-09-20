<template>
	<view>
		<!-- 搜索框模块 -->
		<search></search>
		<!-- tab栏 -->
		<div class="nav-tab">
			<p class="active">热门回答</p>
			<p>最新问题</p>
			<p>等待回答</p>
		</div>
		<!-- 内容 -->
		<div class="content">
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
			</div>
			<div class="list">
				<h4>被给万年飞牛网好阿额偶给你哇卡临汾爱哦</h4>
				<p><span>9回答·50浏览</span><span>甜甜·2003年4月28日</span></p>
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
	.content{
		margin-top: 200rpx;
		.list{
			padding: 20rpx;
			h4{
			  margin: 10rpx 0;
			}
			p{
				display: flex;
				justify-content: space-between;
				font-size: 16rpx;
				color: #ccc;
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
		display: flex;
		justify-content: center;

		p {
			margin: 0 40rpx;
		}

		.active {
			border-bottom: 3rpx solid #007aff;
			color: #007aff;
		}
	}
</style>
