<template>
	<view>
		<!-- 搜索框模块 -->
		<search></search>
		<!-- tab栏 -->
		<div class="nav-tab">
			<p @click="tohot(0)" :class="{active:i==0}">热门回答</p>
			<p @click="tohot(1)" :class="{active:i==1}">最新问题</p>
			<p @click="tohot(2)" :class="{active:i==2}">等待回答</p>
		</div>
		<!-- 内容 -->
		<div class="content">
			<div class="list" v-for="item,index in hotdata" :key="index">
				<h4>{{item.title}}</h4>
				<p><span>{{item.reply}}回答·{{item.viewCount}}浏览</span><span>{{item.nickName}}·{{item.createDate}}</span></p>
			</div>
		</div>
	</view>
</template>

<script>
	import {newanswer} from '@/api/question.js'
	import {etcanswer} from '@/api/question.js'
	import { reactive,toRefs } from 'vue'
	import {hotanswer} from '@/api/question.js'
	export default {
		setup() {
			const data=reactive({
				hotdata:[],//热门回答
				i:0,
			})
			const tohot=(index)=>{
				data.i=index
				if(index==0){
					// 热门回答
					hotanswer().then(res=>{
						data.hotdata=res.data.records
					})
				}else if(index==1){
					// 最新问题
					newanswer().then(res=>{
						data.hotdata=res.data.records
					})
				}else{
					// 等待回答
					etcanswer().then(res=>{
						data.hotdata=res.data.records
					})
				}
			}
			// 热门回答
			hotanswer().then(res=>{
				console.log(res);
				data.hotdata=res.data.records
			})
			return {
				tohot,
				...toRefs(data)
			}
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
