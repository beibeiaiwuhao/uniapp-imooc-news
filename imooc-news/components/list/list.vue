<template>

	<swiper class="home-swiper" :current="activeIndex" @change="swiperChange">
		<swiper-item v-for="(item,index) in tabs" :key="index" class="swiper-item">
			<list-item :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore"></list-item>

		</swiper-item>

	</swiper>

</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props: {
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCatchData: {},
				load: {},
				pageSize: 10
			};
		},
		components: {
			listItem
		},
		watch: {
			tabs(newVals) {
				if (newVals.length === 0) return
				this.listCatchData = {}
				this.load = {}
				this.getList(0)
			}
		},
		created() {
			uni.$on('update_article',(e) => {
				console.log(e)
				if (e === 'follow') {
					this.listCatchData = {}
					this.load = {}
					this.getList(this.activeIndex)
				}
			})
		},
		methods: {
			swiperChange(e) {
				const {
					current
				} = e.detail

				// 当数据不存在 或数据长度为0的情况下才去请求数据
				if (!this.listCatchData[current] || this.listCatchData[current].length === 0) {
					this.getList(current)
				}
				this.$emit('change', current)
			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						page: 1,
						loading: 'loading'
					}
				}

				this.$api.get_list({
					name: this.tabs[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				}).then(res => {
					const {
						data
					} = res
					// this.listCatchData[current] = data;
					// 如果想要动态的在template 获取数据，则需要使用下面方法
					if (data.length === 0) {
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return;
					}
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					this.$set(this.listCatchData, current, oldList)
					console.log(res)
				});
			},
			loadmore() {
				if (this.load[this.activeIndex].loading === 'noMore') return
				this.load[this.activeIndex].page++
				console.log("触发上拉事件")
				this.getList(this.activeIndex)
			}

		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
