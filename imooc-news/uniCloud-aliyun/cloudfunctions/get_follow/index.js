'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	
	const {
		user_id
	} = event
	
	
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]
	
	
	const lists = await db.collection('article')
	.aggregate()
	.addFields({
		is_like:$.in(['$_id',userInfo.article_likes_ids])
	})
	.project({
		content:0
	})
	.match({
		is_like:true
	})
	.end()
	
	//返回数据给客户端
	return {
		code:200,
		msg:"数据获取成功",
		data:lists.data
	}
};
