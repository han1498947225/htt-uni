<template>
	<view>
		<div class="banner-search">
			<div class="swiper-box">
				<swiper class="swiper" indicator-active-color="#fff" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/banner1.jpg"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/banner2.jpg"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/banner3.jpg"></image>
						</view>
					</swiper-item>
				</swiper>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.banner-search {
		margin-top: 120rpx;
		background-image: linear-gradient(rgb(0, 114, 183) 20%, rgb(255, 255, 255));
	}

	.swiper-box {
		padding: 30rpx;
		border-radius: 20rpx;
		.swiper {
			height: 350rpx;
			border-radius: 20rpx;

			.swiper-item {
				padding: 0 20rpx;

				image {
					width: 100%;
					height: 350rpx;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>
