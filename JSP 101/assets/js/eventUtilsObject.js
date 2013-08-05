// var myApp={}; define this in the html page
(function (){
	var eventUtils={
		addEvent:function(node,eventName,subFn)
		{
			if(typeof node.addEventListener=="function")
				node.addEventListener(eventName,subFn)
			else if(typeof node.attachEvent=="function")
				node.attachEvent("on"+eventName, subFn)
		}
		removeEvent: function(node,eventName,subFn)
		{
			if(typeof node.removeEventListener=="function")
				node.removeEventListener(eventName,subFn)
			else if(typeof node.detachEvent=="function")
				node.detachEvent("on"+eventName, subFn)
		}
	}
	myApp.eventUtils=eventUtils;
})();
// call the functions as myApp.eventUtils.addEvent() or define eventUtils=myApp.eventUtils and then eventUtils.addEvent()
;




// function addEvent(node,eventName,subFn)
// 	{
// 		if(typeof node.addEventListener=="function")
// 			node.addEventListener(eventName,subFn)
// 		else if(typeof node.attachEvent=="function")
// 			node.attachEvent("on"+eventName, subFn)
// 	}
// 	function removeEvent(node,eventName,subFn)
// 	{
// 		if(typeof node.removeEventListener=="function")
// 			node.removeEventListener(eventName,subFn)
// 		else if(typeof node.detachEvent=="function")
// 			node.detachEvent("on"+eventName, subFn)
// 	}