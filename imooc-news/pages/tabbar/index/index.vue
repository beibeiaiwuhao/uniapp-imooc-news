<template>
	<view class="home">

		<navbar></navbar>

		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>

		<view class="home-list">
			<list :tabs="tabList" :activeIndex="activeIndex" @change="change"></list>
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
				tabList: [],
				tabIndex: 0,
				activeIndex: 0
			}
		},
		computed: {
			...mapState(['userinfo'])
			
		},
		watch:{
			userinfo(newVals) {
				this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange', (res) => {
				this.tabList = []
				this.tabIndex = 0
				this.activeIndex = 0
				this.getLabel()
			})
		},
		methods: {
			getLabel() {
				this.$api.get_label().then((res) => {
					const {
						data
					} = res;
					data.unshift({
						name: '全部'
					})
					this.tabList = res.data
				});
			},

			tab(item, index) {
				this.activeIndex = index

			},
			change(current) {
				console.log(current)
				this.tabIndex = current
				this.activeIndex = current
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;

		.home-list {
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
