<template>
	<view>
		<view class="feedback-title">意见反馈</view>
		<view class="feedback-content">
			<textarea v-model="content" class="feedback-textarea" placeholder="请输入您要反馈的问题">
			</textarea>
		</view>

		<view class="feedback-title">反馈图片:</view>

		<view class="feedback-image-box">

			<view class="feedback-image-item" v-for="(item,index) in imageList" :key="index">
				<view class="close-icon" @click="del(index)">
					<uni-icons type="closeempty" size="18" color="#fff"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>

			<view v-if="imageList.length < 5" class="feedback-image-item" @click="addImage">
				<view class="image-box">
					<uni-icons type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>

		<button class="feedback-bt" type="primary" @click="submit"> 提交反馈意见</button>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				imageList: []
			}
		},
		methods: {
			addImage() {
				var that = this
				const count = 5 - this.imageList.length
				uni.chooseImage({
					count: count, //在h5平台没有效果
					success(res) {
						const tempFiles = res.tempFiles
						tempFiles.forEach((item, index) => {
							// 处理h5 多选的状况
							if (index < count) {
								that.imageList.push({
									url: item.path,
									name: item.name

								})
							}
						})
						console.log(res)
					}
				})
			},

			del(index) {
				this.imageList.splice(index, 1)
			},

			async submit() {

				// 图片不支持多图上传
				let imagePath = []
				uni.showLoading()
				for (let i = 0; i < this.imageList.length; i++) {
					const filePath = this.imageList[i].url
				    let	fileName = this.imageList[i].name
					if (!fileName) {
						fileName = new Date().getTime() + '.jpg'
					}
					
					
					let fileId = await this.uploadFiles(fileName, filePath)
					imagePath.push(fileId)
				}

				//上传完成 提交到uniclound
				this.updateFeedback(this.content, imagePath)


			},
			async uploadFiles(fileName, filePath) {
				
				const result = await uniCloud.uploadFile({
					cloudPath: fileName,
					filePath: filePath
				})
				return result.fileID
			},


			updateFeedback(content, feedbackImages) {
				let params = {
					content: content,
					feedbackImages: feedbackImages
				}
				this.$api.update_feedback(params).then(res => {
					console.log(res)
					uni.hideLoading()
					uni.showToast({
						title: "反馈提交成功",
						icon: "none"
					})
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/tabbar/my/my'
						})
					}, 1500)
				}).catch(e => {
					uni.hideLoading()
					uni.showToast({
						title: "反馈提交失败",
						icon: "none"
					})
				})
			}




		}
	}
</script>

<style lang="scss">
	.feedback-title {
		font-size: 14px;
		margin: 15px;
		margin-bottom: 0;
		color: #666;
	}

	.feedback-content {
		margin: 15px;
		padding: 10px;
		box-sizing: border-box;
		border: 1px #eee solid;

		.feedback-textarea {
			font-size: 12px;
			width: 100%;
			height: 100px;
		}

	}

	.feedback-image-box {
		display: flex;
		flex-wrap: wrap;
		padding: 10px;


		.feedback-image-item {
			position: relative;
			width: 33.33%;
			height: 0;
			padding-top: 33.33%;
			box-sizing: border-box;

			.close-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				right: 0;
				top: 0;
				width: 22px;
				height: 22px;
				border-radius: 50%;
				background-color: $mk-base-color;
				z-index: 2;
			}

			.image-box {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 5px;
				right: 5px;
				bottom: 5px;
				left: 5px;
				border: 1px #eee solid;
				border-radius: 5px;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.feedback-bt {
		margin: 0 15px;
		background-color: $mk-base-color;
	}
</style>
