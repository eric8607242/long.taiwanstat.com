"use strict";
(function(window, document, undefined) {

	var str = '<header>'
		str += '<span id="stat-title">用數據看台灣  </span>'
		str += '<a href="http://taiwanstat.com/">'
		str += '<div class="ui inverted yellow button official">'
		str += '官網'	
		str += '</div>'
		str += '</a>'
		str += '</header>'
		str += '<div class="btn-sites">'
		str += '<a href="http://real.taiwanstat.com/">'
		str += '<div class="ui pink button">所有即時資料</div>'
		str += '</a>'
		str += '<a href="http://long.taiwanstat.com/">'
		str += '<div class="ui pink button">所有統計資料</div>'
		str += '</a>'
		str += '</div>'

	$('body').prepend(str);

  // grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();



})(window, document)
