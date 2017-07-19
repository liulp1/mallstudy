/*
* @Author: liulp1
* @Date:   2017-07-19 00:02:24
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-19 23:08:34
*/

'use strict';

var _mm = require('util/mm.js');

var _address = {
	// 获取地址列表
	getAddressList : function(resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/shipping/list.do'),
			data     : {
				pageSize : 50
			},
			success  : resolve,
			error 	 : reject
		});
	},
	// 新建收件人地址
	save : function(addressInfo,resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/shipping/add.do'),
			data     : addressInfo,
			success  : resolve,
			error 	 : reject
		});
	},
	// 修改收件人地址
	update : function(addressInfo,resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/shipping/update.do'),
			data     : addressInfo,
			success  : resolve,
			error 	 : reject
		});
	},
	// 删除收件人地址
	deleteAddress : function(shippingId,resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/shipping/del.do'),
			data     : {
				shippingId : shippingId
			},
			success  : resolve,
			error 	 : reject
		});
	},
	// 获取单个地址
	getAddress : function(shippingId,resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/shipping/select.do'),
			data     : {
				shippingId : shippingId
			},
			success  : resolve,
			error 	 : reject
		});
	}
}
module.exports = _address;