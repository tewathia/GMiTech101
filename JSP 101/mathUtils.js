var myApp=myApp||{};
(function(){
	var collectUtils={
		sumValue: function(array, attribute)
	{	
		var sum=0;
		if (typeof attribute=="string")
		{
		for(i in array)
			sum+=array[i][attribute];
		}
		else if (typeof attribute=="function")
		{
			sum+= attribute(array[i]);
		}
			return sum;
	}
		sumFn: function(array)
		{
			var sum=0;
			for(i in array)
				{sum+=array[i];}
			return sum;
		}
}
myApp.collectUtils=collectUtils;
})();