<template>
	<view class="label">

		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit" @click="editLabel">{{is_edit?'完成':'编辑'}}</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content__item" v-for=" (item,index) in labelList" :key="item._id">{{item.name}}
					<uni-icons v-if="is_edit" class="icons-close" type="clear" color="red" size="20" @click="del(index)"></uni-icons>
				</view>
			</view>
			<view v-if="labelList.length == 0 && !loading" class="no-data">
				当前没有数据
			</view>
		</view>

		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>

			<view v-if="!loading" class="label-content">
				<view class="label-content__item" v-for="  (item,index) in list" :key="item._id" @click="add(index)">{{item.name}}</view>
			</view>

			<view v-if="list.length == 0 && !loading" class="no-data">
				当前没有数据
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit: false,
				labelList: [],
				list: [],
				loading: true
			}
		},
		onLoad() {
			// 自定义事件 类似 this.$emit() uni.$emit()
			this.getLabel();
		},
		methods: {
			editLabel() {
				if (this.is_edit) {
					this.is_edit = false
					//获取当前我的标签中的标签id
					let newArrys = []
					this.labelList.forEach(item => {
						newArrys.push(item._id)
					})
					this.setUpdateLabel(newArrys)
					
					
					
				} else {
					this.is_edit = true
				}
			},
			getLabel() {
				this.$api.get_label({
					type: 'all'
				}).then(res => {
					console.log(res)
					const {
						data
					} = res

					this.labelList = data.filter(item => item.current)
					this.list = data.filter(item => !item.current)
					this.loading = false
				}).catch(e => {
					this.loading = false
				});
			},
			// 删除标签 （我的标签）
			del(index) {
				this.list.push(this.labelList[index])
				this.labelList.splice(index, 1)
			},
			//添加标签（标签推荐）
			add(index) {
				if (!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index, 1)
			},
			setUpdateLabel(label) {
				uni.showLoading();
				this.$api.update_label({
					label
				}).then(res => {
					console.log(res)
					uni.hideLoading()
					uni.showToast({
						title: "更新成功",
						icon: "none"
					})
					
					// 更新成功之后，发送给首页事件
					uni.$emit('labelChange','')
					
				})
			}


		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.label {
		.label-box {
			background-color: #FFFFFF;
			margin-bottom: 10px;
		}

		.label-header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 10px 15px;
			font-size: 14px;
			color: #666;
			border-bottom: 1px #f5f5f5 solid;

			.label-edit {
				color: #30b33a;
				font-weight: bold;
			}
		}

		.label-content {
			display: flex;
			flex-wrap: wrap;
			padding: 15px;
			padding-top: 0;

			.label-content__item {
				padding: 2px 5px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 5px;
				border: 1px #666 solid;
				font-size: 14px;
				color: #666;
				flex-shrink: 0;
				position: relative;

				.icons-close {
					position: absolute;
					right: -8px;
					top: -8px;
					background-color: #FFFFFF;
					border-radius: 50%;
				}
			}

		}
	}

	.no-data {
		width: 100%;
		text-align: center;
		padding: 50px 0;
		color: #999;
		font-size: 14px;
	}
</style>
