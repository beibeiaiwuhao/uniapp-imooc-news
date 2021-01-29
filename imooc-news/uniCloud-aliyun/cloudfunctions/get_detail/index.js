'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {

	const {
		user_id,
		article_id
	} = event

	// 获取用户信息
	let userInfo = await db.collection('user').doc(user_id).get();
	userInfo = userInfo.data[0]
	let list = await db.collection('article')
		.aggregate()
		.addFields({
			//是否关注作者
			is_author_like: $.in(['$author.id', userInfo.author_likes_ids]),
			//是否收藏文章
			is_like: $.in(['$id', userInfo.article_likes_ids]),
			//是否点赞
			is_thumbs_up: $.in(['$id', userInfo.thumbs_up_article_ids])
		})
		// 筛选id
		.match({
			_id: article_id
		})
		//操作哪些字段返回 哪些字段不返回
		.project({
			coments: 0
		})
		.end()
	console.log(list.data)
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据请求成功",
		data: list.data
	}
};
