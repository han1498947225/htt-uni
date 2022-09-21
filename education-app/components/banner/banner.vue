<template>
	<view>
		<div class="banner-search" :style="`background-image: linear-gradient(${Background}, #fff)`">
			<div class="swiper-box">
				<swiper class="swiper" @change="colors" indicator-active-color="#fff" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="item,index in bannerdata" :key="index">
						<view class="swiper-item">
							<image :src="item.imageUrl"></image>
						</view>
					</swiper-item>
				</swiper>
			</div>
		</div>
	</view>
</template>

<script>
	import { reactive , toRefs} from "vue"
	import {getBanner} from '@/api/index.js'
	export default {
		name: "banner",
		setup(props, ctx) {
			const data=reactive({
				bannerdata:[],//轮播图数据
				Background: '#006C00'
			})
			// 轮播图数据
			getBanner().then(res => {
				data.bannerdata = res.data
			})
			// 背景颜色
			const colors=(e)=>{
				data.Background = data.bannerdata[e.detail.current].background
				ctx.emit('swiperItem', data.bannerdata[e.detail.current].background)
			}
			return{
				...toRefs(data),
				colors
			}
		}
	}
</script>

<style lang="scss">
	.banner-search {
		margin-top: 120rpx;
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
