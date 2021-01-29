<template>
	<view class="icons" @click.stop="tap">
		<uni-icons :type="like?'heart-filled':'heart'" size="20" color="#f07373"></uni-icons>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
			types:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch: {
			item(newVal) {

				this.like = this.item.is_like
			}
		},
		created() {
			this.like = this.item.is_like
		},
		methods: {
			tap() {
				this.like = !this.like
				this.updateLikes();
			},
			updateLikes() {
				console.log(this.item)
				uni.showLoading()
				this.$api.update_likes({
					article_id: this.item._id
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: this.like ? "取消收藏" : "收藏成功",
						icon: "none"
					})
					uni.$emit('update_article',this.types)

					console.log(res)
				});
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>
