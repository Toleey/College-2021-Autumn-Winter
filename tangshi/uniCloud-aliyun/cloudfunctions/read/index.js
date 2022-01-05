'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('tangshi')	
	const res = await collection.where({
		_id:event.id
	}).get()
	return res
	//返回数据给客户端
	return event
};
