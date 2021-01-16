<template>

	<swiper class="home-swiper" :current="activeIndex" @change="swiperChange">
		<swiper-item v-for="(item,index) in tabs" :key="index" class="swiper-item">
			<list-item :list="listCatchData[index]"></list-item>
		</swiper-item>

	</swiper>

</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props: {
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCatchData:{}
			};
		},
		components: {
			listItem
		},
		watch: {
			tabs(newVals) {
				if (newVals.length === 0) return
				console.log("测试tab")
				this.getList(0)
			}
		},
		created() {
			
		},
		methods: {
			swiperChange(e) {
				const {
					current
				} = e.detail
				console.log(this.tabs[current].name)
				this.getList(current)
				this.$emit('change', current)
			},
			getList(current) {
				this.$api.get_list({name:this.tabs[current].name}).then(res => {
					const {data} = res
					// this.listCatchData[current] = data;
					// 如果想要动态的在template 获取数据，则需要使用下面方法
					this.$set(this.listCatchData,current,data)
					console.log("测试一下数据")
					console.log(this.listCatchData)
				});
			},

		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
