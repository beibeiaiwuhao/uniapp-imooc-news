'use strict';
// 获取数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	// 接受分类，筛选当前分类
	const {
		name
	} = event

	// 聚合 ： 更精细化的去处理数据 求和、分组、指定哪些字段
	let matchObj = {}
	 if(name !== "全部") {
		 matchObj = {
			classify: name 
		 }
	 }

	const list = await db.collection('article').aggregate().match(matchObj).project({
			content: false
		})
		.end();

	//返回数据给客户端
	return {
		code: 200,
		msg: '请求成功',
		data: list.data
	}

};
