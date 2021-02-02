<template>
	<view>
		<uni-load-more v-if="lists.length === 0 && loading" status="loading"></uni-load-more>
		<list-card v-for="item in lists" :item="item" :key="item._id"></list-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				loading: true
			}
		},
		onLoad() {
			this.getMyArticle()
		},

		methods: {
			getMyArticle() {

				this.$api.get_my_article().then(res => {
					const {
						data
					} = res
					this.lists = data
					this.loading = false
				}).catch(e => {

				})

				// this.$api.get_my_article(res => {

				// }).catch(e => {
				// 	console.log(e)
				// })
				console.log("测试")
			}
		}
	}
</script>

<style>

</style>
