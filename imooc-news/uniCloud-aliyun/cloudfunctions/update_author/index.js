'use strict';
// 获取数据库的索引
const db = uniCloud.database()
const dbCmd = db.command
// author_likes_ids
exports.main = async (event, context) => {

	const {
		user_id,
		author_id
	} = event
	

	const user = await db.collection('user').doc(user_id).get()

	const author_likes_ids = user.data[0].author_likes_ids

	let author_ids = null 
	if (author_likes_ids.includes(author_id)) {
		// 删除关注
		author_ids = dbCmd.pull(author_id)
	}else {
		// 添加关注
		author_ids = dbCmd.addToSet(author_id)
	}
	// 更新数据表 
	await db.collection('user').doc(user_id).update({
		author_likes_ids: author_ids
	})

	//返回数据给客户端
	return {
		code: 200,
		msg: '更新成功'
	}
};
