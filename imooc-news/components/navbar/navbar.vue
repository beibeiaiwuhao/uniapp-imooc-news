<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"></view>
			<!-- #endif -->
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navbarH+'px;',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uniapp、vue</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navbarH+'px'}"></view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				statusBarHeight: 0,
				navbarH: 45,
				windowWidth: 375,
			};
		},
		created() {
			// 获取手机信息
			var that = this;
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight
			// 获取胶囊的位置
			// #ifdef MP-WEIXIN
			// 在微信小程序中获取
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			let navbarH = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight) * 2
			this.navbarH = navbarH
			// 获取宽度
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;

			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;

				.navbar-search {
					height: 30px;
					width: 100%;
					background-color: #fff;
					display: flex;
					flex-direction: row;
					border-radius: 30px;
					align-items: center;
					padding: 0 10px;

					.navbar-search_icon {
						
						margin-right: 10px;
					}

					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}

		}
	}
</style>
