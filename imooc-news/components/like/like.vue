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
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch:{
			item(newVal){
				this.like = this.item.is_like
			}	
		},
		created() {
			this.like = this.item.is_like
		},
		methods: {
			tap() {
				uni.showToast({
					title: this.like ? "取消收藏" : "收藏成功"
				})
				this.like = !this.like
				this.updateLikes();
			},
			updateLikes() {
				this.$api.update_likes({
					user_id: '5fffff71a811400001d90429',
					article_id: this.item._id
				}).then(res => {

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
