'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate
// 获取标签数据
exports.main = async (event, context) => {

	const {
		user_id,
		type
		
	} = event
	// 只查询添加到我的标签中的数据
	let matchObj = {}
	if (type != 'all') {
		matchObj = {
			current: true
		}
	}
	
	//查找用户下的标签id
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]

	//label_ids = ['label_id']
	//普通查询
	// let label = await db.collection('label').get()
	// 使用聚合
	let label = await db.collection('label')
		.aggregate()
		.addFields({
			current: $.in(['$_id', $.ifNull([
				userInfo.label_ids,
				[]
			])])
		})
		.match(matchObj)
		.end();
	//返回数据给客户端
	return {
		code: 200,
		msg: '请求成功',
		data: label.data
	}
};
