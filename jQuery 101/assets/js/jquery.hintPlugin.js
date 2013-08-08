$(function(){
		$.fn.hintPlugin = function(options){
		var _default={spanID:'spanId', hintTEXT:'hintText'};
		$.extend(_default,options);
		this.on("blur",function(){
			$this=$(this);
			var spanId=$this.attr(_default.spanID);
			var hintText=$this.attr(_default.hintTEXT);
			console.log(spanId, hintText);
			if ($this.val()==""){
				$this.addClass('invalid');
				$('#'+spanId).text(hintText);}
			else{
				$this.removeClass('invalid');
				$('#'+spanId).text('');}
		});
	}
});