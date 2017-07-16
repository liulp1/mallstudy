/*
* @Author: liulp1
* @Date:   2017-07-12 14:23:13
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-17 01:08:40
*/

'use strict';

var _mm = require('util/mm.js');

var _cart = {
	// 获取购物车数量
	getCartCount : function(resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success  : resolve,
			error 	 : reject
		});
	},
	// 添加购物车
	addToCart : function(productInfo,resolve,reject){
		_mm.request({
			url 	 : _mm.getServerUrl('/cart/add.do'),
			data     : productInfo,
			success  : resolve,
			error 	 : reject
		});
	}
}
module.exports = _cart;