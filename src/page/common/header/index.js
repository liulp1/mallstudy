/*
* @Author: liulp1
* @Date:   2017-07-12 22:54:29
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-13 00:29:42
*/

'use strict';
require('./index.css');
var _mm    = require('util/mm.js');
// 通用页面头部	
var header = {
	init : function(){
		this.bindEvent();
	},
	onLoad  : function(){
		var keyword = _mm.getUrlParam('keyword');
		if (keyword) {
			$('#search-input').val(keyword);
		};
	},
	bindEvent : function(){
		var _this = this;
		// 按钮提交
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});
		// 回车提交，回车keyCode == 13
		$('#search-input').keyup(function(e){
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		});
	},
	// 搜索的提交
	searchSubmit : function(){
		var keyword = $.trim($('#search-input').val());
		if(keyword){
			window.location.href = './list.html?keyword=' + keyword;
		}
		else{
			_mm.goHome();
		}
	}
};

header.init();