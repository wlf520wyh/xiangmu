(function($){
	var defaults = {
		endElement:"",
		iconCSS:"",
		iconImg:"",
		endFunction:function(element){
			return false;
		}
	};
	
	$.extend($.fn,{
		shoping:function(options){
			var self=this,
				$options = $.extend(defaults,options);
				if($options.endElement=="" || $options.endElement==null) throw new Error("结束节点为必填字段");
			var $endElement = $($options.endElement);
			var S={
				init:function(){
					$(self).on('click',this.addShoping);
				},
				addShoping:function(e){
					e.stopPropagation();
					var $target=$(e.target),
					    x = $target.offset().left + 30,
						y = $target.offset().top + 10,
						X = $endElement.offset().left,
						Y = $endElement.offset().top;

						     
						if(!($(document).find("#cartIcon").length>0)){
							$('body').append(S.addIcon);
							var $obj=$('#cartIcon');
							if(!$obj.is(':animated')){
								$obj.css({'left': x,'top': y}).animate({'left': X-30,'top': Y+70},500,function() {
									$obj.stop(false, false).animate({'top': Y-10,'opacity':0},500,function(){
										$obj.fadeOut(300,function(){
											$obj.remove();
											$target.data('click',false);
											$options.endFunction($(this));
											// console.log(456456);
											     
											location.reload();
										});
									});
								});	
							};
						}
				},
				addIcon:function(){
					if ($options.iconImg=="" || $options.iconImg==null) {
						throw new Error("样式图片必须填上");
					} 
					var icon = '<div id="cartIcon" style="width:50px;height:50px;padding:2px;background:#fff;border:solid 5px #e54144;overflow:hidden;position:absolute;z-index:890;'+$options.iconCSS+'"><img src="'+$options.iconImg+'" width="50" height="50" /></div>';
					return icon;
				}
			};
			S.init();
		}
	});	
})(jQuery)