'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id, //用户id
		article_id, //文章id
		comment_id = '', // 评论id，默认为空
		reply_id = '', //子回复id
		is_reply = false, //默认主回复
		content //评论内容
	} = event

	//获取当前用户的用户信息
	let user = await db.collection('user').doc(user_id).get();
	user = user.data[0]


	//获取当前的文章信息
	const article = await db.collection('article').doc(article_id).get()
	// 获取文章下的所有评论
	const comments = article.data[0].comments
	console.log(comments)

	//设置评论对象
	let commentObj = {
		comment_id: getID(5), //评论id
		comment_content: content, //评论内容
		create_time: new Date().getTime(), //创建时间 获取时间戳
		is_reply: is_reply, //区分主回复还是子回复
		author: {
			author_id: user_id, //作者id
			author_name: user.author_name, //作者名字
			avatar: user.avatar, //作者头像
			professional: user.professional, //作者专业
		},
		replys: []
	}

	// 评论文章
	if (comment_id === '') {
		commentObj.replys = []
		commentObj = dbCmd.unshift(commentObj)
	} else {
		//回复对文章的评论
		//获取评论索引
		let commentsIndex = comments.findIndex(item => item.comment_id === comment_id)

		let commentAuthor = {}

		if (is_reply) { //子回复
			// 拿到所有回复
			commentAuthor = comments[commentsIndex].replys.find(item => item.comment_id === reply_id)
		} else { //主回复
			//获取作者信息
			commentAuthor = comments.find(item => item.comment_id === comment_id)
		}
		commentAuthor = commentAuthor.author.author_name
		commentObj.to = commentAuthor
		//更新回复信息
		commentObj = {
			[commentsIndex]: {
				replys: dbCmd.unshift(commentObj)
			}
		}
	}

	console.log(commentObj)

	//更新article 数据表
	// await db.collection('article').doc(article_id).update({
	// 	comments: commentObj
	// })

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据更新成功'
	}
};

function getID(length) {
	return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}
