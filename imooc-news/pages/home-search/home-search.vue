<template>
	<view class="home">
		<navbar :isSearch="true" v-model="value" @input="change"></navbar>

		<view class="home-list">
			<view v-if="is_history" class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear" @click="clearHistory">清空</text>
				</view>
				<view v-if="historyLists.length > 0" class="label-content">
					<view class="label-content__item" v-for="item in historyLists" @click="openHistory(item)">
						{{item.name}}
					</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
			</view>

			<view v-else>
				<list-scroll class="list-scroll">
					<uni-load-more v-if="loading"  status="loading" iconType="snow"></uni-load-more>
					<view v-if="searchList.length > 0">
						<list-card v-for="(item,index) in searchList" :item="item" :key="item._id" @click="setHistory"></list-card>
					</view>
					<view v-if="searchList.length == 0 && !loading" class="no-data">
						没有搜索到相关数据
					</view>
				</list-scroll>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				value: '',
				is_history: true,
				searchList: [],
				loading:false
			}
		},
		onLoad() {

		},
		computed: {
			...mapState(['historyLists'])
		},
		methods: {
			change(value) {
				// 当没有输入内容 ｜｜ 输入内容为空的时候
				if (!value) {
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				// 请求延时的效果
				if (!this.mark) {
					this.mark = true
					this.timer = setTimeout(() => {
						this.mark = false
						this.getSearch(value)
					}, 1000)
				}
			},
			getSearch(value) {
				if (!value) {
					this.is_history = true
					this.searchList = []
					return
				}
				this.is_history = false
				this.loading = true
				this.$api.get_search({
					value: value
				}).then(res => {
					const {
						data
					} = res
					this.searchList = data
					this.loading = false
				}).catch(e => {
					this.loading = false
				});
			},
			setHistory(item) {
				this.$store.dispatch('set_history', {
					name: this.value
				})
			},
			openHistory(item) {
				this.value = item.name
				this.getSearch(this.value)
			},
			clearHistory(){
				this.$store.dispatch('clear_history')
				uni.showToast({
					title:'数据清空了'
				})
			}
			
			
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;

		.home-list {
			display: flex;
			flex-direction: column;

			.label-box {
				background-color: #fff;
				margin-bottom: 10px;

				.label-header {
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color: #666;
					padding: 10px 15px;
					border-bottom: 1px #f5f5f5 solid;

					.label-title {
						color: $mk-base-color;
					}

					.label-clear {
						color: #30b33a;
						font-weight: bold;
					}
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 10px 15px;
				padding-top: 0px;

				.label-content__item {
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;
				}
			}

			.no-data {
				height: 200px;
				line-height: 200px;
				width: 100%;
				color: #666;
				font-size: 14px;
				text-align: center;

			}
		}
	}
</style>
