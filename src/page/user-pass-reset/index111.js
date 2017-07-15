/*
* @Author: liulp1
* @Date:   2017-07-14 20:21:23
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-14 22:24:43
*/

'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm   = require('util/mm.js');

//表单里的错误提示
var formError = {
	show : function(errMsg){
		$('.error-item').show().find('.err-msg').text(errMsg);
	},
	hide : function(){
		$('.error-item').hide().find('.err-msg').text('');
	},
};
// page 逻辑部分
var page = {
	data : {
		username   : '',
		question   : '',
		answer     : '',
		token      : ''
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.loadStepUsername();
	},
	bindEvent : function(){
		var _this = this;
		// 下一步按钮的点击
		$('#submit-username').click(function(){
			var username = $.trim($(#username).val());
			if (username) {
				_user.getQuestion(username,function(res){

				},function(){
					formError.show(errMsg);
				});
			}
			else{
				formError.show("请输入用户名")；
			}
		});
	},
	loadStepUsername : function(){
		 $('.step-username').show();
	},
	loadStepQuestion : function(){

	},
	loadStepUsername : function(){

	},
	// 表单字段的验证
	formValidate : function(formData){
		var result = {
			status : false,
			msg    : ''
		};
		if (!_mm.validate(formData.username,'require')) {
			result.msg = '用户名不能为空';
			return result;
		}
		if (!_mm.validate(formData.password,'require')) {
			result.msg = '密码不能为空';
			return result;
		}
		// 通过验证，返回正确提示
		result.status  = true;
		result.msg     = '验证通过';
		return result;
	}
};
$(function(){
	page.init();
});