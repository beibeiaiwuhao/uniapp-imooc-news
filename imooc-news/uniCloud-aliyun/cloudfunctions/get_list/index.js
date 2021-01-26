'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate
exports.main = async (event, context) => {
	// 接受分类，筛选当前分类
	const {
		name,
		user_id,
		page = 1,
		pageSize = 10
	} = event

	// 聚合 ： 更精细化的去处理数据 求和、分组、指定哪些字段
	let matchObj = {}
	if (name !== "全部") {
		matchObj = {
			classify: name
		}
	}
	console.log("测试一下"+user_id)
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	console.log(article_likes_ids)
	const list = await db.collection('article')
		.aggregate()
		// 追加字段
		.addFields({
			is_like: $.in(['$_id', article_likes_ids])
		})
		.project({
			content:0
		})
		.match(matchObj).project({
			content: false
		})
		.skip(pageSize * (page - 1))
		.limit(pageSize)
		.end();

	//返回数据给客户端
	return {
		code: 200,
		msg: '请求成功',
		data: list.data
	}

};
