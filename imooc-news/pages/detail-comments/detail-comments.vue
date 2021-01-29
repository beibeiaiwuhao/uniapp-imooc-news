<template>
	<view>
		<view class="comments-content" v-for="(item, index) in commentsList" :key="item._id">
			<comment-box :comments="item"></comment-box>
		</view>
		<uni-load-more v-if="commentsList.length === 0 || commentsList.length > 5" iconType="snow" :status="loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentsList: [],
				article_id: '',
				page:1,
				pageSize:2,
				loading:'loading'
			}
		},
		onLoad(query) {
			console.log(query)
			this.article_id = query.id
			this.getComments()
		},
		onReachBottom() {
			console.log("---上拉触底----")
			if (this.loading === 'noMore') return
			this.page++
			this.getComments()
		},
		methods: {
			// 获取评论列表
			getComments() {
				this.$api.get_comments({
					article_id: this.article_id,
					page:this.page,
					pageSize:this.pageSize
				}).then(res => {
					const {
						data
					} = res
					if (data.length === 0) {
						this.loading = "noMore"
						return
					}
					// 对象复制
					let oldFrmData = JSON.parse(JSON.stringify(this.commentsList))
					oldFrmData.push(...data)
					console.log(oldFrmData)
					this.commentsList = oldFrmData
				}).catch(e => {
					console.log(e)
				});
			}
		}
	}
</script>

<style lang="scss">
	.comments-content {
		padding: 0 15px ;
	}

</style>
