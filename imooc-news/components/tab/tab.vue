<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll_box">
				<view v-for="(item,index) in list" class="tab-scroll_item" :class="{active:activeIndex==index}" @click="clickTab(item,index)">{{item.name}}</view>
			</view>
		</scroll-view>

		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default:[]
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				activeIndex:0
			};
		},
		created() {
			console.log(this.list)
		},
		// 可以监听 data props 的值的变化
		watch:{
			tabIndex(newVal) {
				this.activeIndex = newVal
			}
		},
		methods:{
			clickTab(item,index) {
				this.activeIndex = index
				this.$emit('tab',item,index)
			}
		}
		
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100vw;
		border-bottom: 1px solid #f5f5f5;
		background-color: #fff;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;

			.tab-scroll_box {
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap; //不换行
				box-sizing: border-box;
				.tab-scroll_item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
				}
				.active {
					color: #f07373;
				}
			}
		}

		.tab-icons {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}

		}
	}
</style>
