<script>
	export default {
		onLaunch: function() {
			this.$api.get_user({
				user_id:"5fffff71a811400001d90429"
			}).then(res => {
				console.log(res)
				const {data} =res
				this.$store.dispatch('set_userinfo',data)
			}).catch(e => {
				
			})
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
</style>
