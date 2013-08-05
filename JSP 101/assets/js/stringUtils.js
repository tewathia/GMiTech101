// var myApp={}; define this in the html page
var myApp=myApp || {};
// checks if myApp exists and appends it, otherwise makes a new myApp
(function(){
	var stringUtils={
		someHelper:function(){}
	}
	// window.stringUtils=stringUtils; 
	myApp.stringUtils=stringUtils;
})();