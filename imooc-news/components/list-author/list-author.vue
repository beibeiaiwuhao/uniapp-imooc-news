<template>
	<view class="list-author">
		<view class="list-author-image">
			<image :src="author.avatar" mode="aspectFill"></image>
		</view>

		<view class="list-author-content">
			<view class="list-author-content__title">{{author.author_name}}</view>
			<view class="list-author-content__des">
				<view class="list-author-content__desc-label">{{author.professional}}</view>
				<view class="list-author-content__des-info">
					<text>发帖 {{author.article_ids.length}}</text>
					<text>粉丝 {{author.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			author: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-author {
		display: flex;
		padding: 10px 0;
		margin: 0 10px;
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px #f5f5f5 solid;

		.list-author-image {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.list-author-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.list-author-content__title {
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
			}

			.list-author-content__des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.list-author-content__desc-label {
					color: #666;
				}

				.list-author-content__des-info {
					color: #999;
					line-height: 1.5;

					text:first-child {
						margin-right: 10px;
					}
				}
			}
		}

	}
</style>
