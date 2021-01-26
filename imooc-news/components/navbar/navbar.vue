<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"></view>
			<!-- #endif -->
			<!-- 导航栏 -->
			<view class="navbar-content" :class="{search:isSearch}" :style="{height:navbarH+'px;',width:windowWidth+'px'}">
				
				<view v-if="isSearch" class="navbar-content__search-icons" @click="back">
					<uni-icons type="back" size="22" color="#fff" ></uni-icons>
				</view>
				
				<!-- 非搜素页面显示 -->
				<view  v-if="!isSearch" class="navbar-search" @click="open">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uniapp、vue</view>
				</view>
				<!-- 搜索页面显示 -->
				<view v-else class="navbar-search">
					<input class="navbar-search_text" type="text"  placeholder="请输入您要搜索的内容" v-model="val" @input="inputChange" />
				</view>
				
			</view>
		</view>
		<view :style="{height:statusBarHeight+navbarH+'px'}"></view>
	</view>
</template>

<script>
	
	export default {
		props:{
			isSearch:{
				type:Boolean,
				default:false
			},
			value:{
				type:[String,Number],
				default:''
			}
		},
		data() {
			return {
				statusBarHeight: 0,
				navbarH: 45,
				windowWidth: 375,
				val:""
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
		},
		watch:{
			value(newVal){
				this.val = newVal
			}
		},
		methods:{
			open(){
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			},
			inputChange(e){
				const {value} = e.detail
				console.log(value)
				this.$emit('input',value)
			},
			back(){
				// uni.navigateBack()
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			}
			
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
						width: 100%;
						font-size: 12px;
						color: #999;
					}
				}
				
				&.search {
					padding-left: 0;
					
					.navbar-content__search-icons{
						margin-left: 10px;
						margin-right: 10px;
						
					}
					
					.navbar-search {
						border-radius: 5px;
						.navbar-search_text {
							font-size: 14px;
						}
					}
					
				}
			
			}

		}
	}
</style>
