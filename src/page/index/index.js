/*
* @Author: liulp1
* @Date:   2017-07-10 10:55:44
* @Last Modified by:   liulp1
* @Last Modified time: 2017-07-16 19:03:33
*/
'use strict';
require('page/common/nav/index.js');
require('./index.css');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide        = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm 		   = require('util/mm.js');

$(function() {
	// 渲染banner的html
	var bannerHtml = _mm.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	// 初始化banner
    var $slider = $('.banner').unslider({
    	dots:true
    });
    // banner前一张后一张的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    });
});
