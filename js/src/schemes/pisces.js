// build time:Sat Oct 07 2017 12:37:02 GMT+0800 (中国标准时间)
$(document).ready(function(){var n=$(".header-inner");var r=$("#sidebar");var e=function(){return n.height()+CONFIG.sidebar.offset};var i=function(n){return r.css({"margin-top":n})};var a=window.matchMedia("(min-width: 991px)");i(e()).show();a.addListener(function(n){if(n.matches){i(e())}})});
//rebuild by neat 