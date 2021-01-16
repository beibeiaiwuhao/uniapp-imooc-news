<template>
	<list-scroll class="list-scroll">
		<list-card v-for="(item,index) in list" :item="item" :key="item._id" ></list-card>
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list: {
				type:Array,
				default(){
					return []
				}
			}
		}
	}
	
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
