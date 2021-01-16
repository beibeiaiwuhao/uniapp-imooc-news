'use strict';
// 获取数据库的引用
const db = uniCloud.database();
// 获取标签数据
exports.main = async (event, context) => {
	let label = await db.collection('label').get()
	//返回数据给客户端
	return {
		code: 200,
		msg:'请求成功',
		data:label.data
	}
};
