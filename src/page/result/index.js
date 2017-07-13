/*
* @Author: liulp1
* @Date:   2017-07-13 13:37:14
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-13 14:13:35
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type       = _mm.getUrlParam('type') || 'default',
	    $element   = $('.' + type + '-success');
	// 显示对应的提示
	$element.show();
})