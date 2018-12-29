myFocus.pattern.extend({//*********************kdui******************
	'mF_kdui':function(settings,$){
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.addListTxt().find('li');
		var $dotList=$focus.addList('dot').find('li');
		var $prevBtn=$focus.addHtml('<div class="prev"></div>');
		var $nextBtn=$focus.addHtml('<div class="next"></div>');
		//PLAY
		var param={isRunning:false};
		$focus.play(null,function(i,n,l){
			param.isRunning=true;
			$txtList.eq(l).slide({left:-settings.width},800,'easeInBack');
			fx(i,l);//延迟执行部分
		});
		function fx(i,l){
			setTimeout(function(){
				$txtList.eq(i).css({display:'block',left:settings.width}).slide({left:0},300);
				$picList.eq(i).css({display:'block',left:settings.width}).slide({left:0},function(){param.isRunning=false});
				if(i!==l) $picList.eq(l).slide({left:-settings.width},700);
				$dotList[l].className='';
				$dotList[i].className='current';
			},600);
		}
		//Control
		$focus.bindControl($dotList,param);
		$prevBtn.bind('click',function(){if(!param.isRunning) $focus.run('-=1')});
		$nextBtn.bind('click',function(){if(!param.isRunning) $focus.run('+=1')});
		$focus.bind('mouseover',function(){$prevBtn.addClass('arr-hover'),$nextBtn.addClass('arr-hover')});
		$focus.bind('mouseout',function(){$prevBtn.removeClass('arr-hover'),$nextBtn.removeClass('arr-hover')});
	}
});
myFocus.extend( myFocus.fn.easing,{//扩展缓动方法
	easeInBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}
});

myFocus.set({
            id: 'scroll_tu',//焦点图盒子ID
            pattern: 'mF_fancy',//焦点图风格的名称
            time: 3,//切换时间间隔(秒)
            trigger: 'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
            // delay: 200,//'mouseover'模式下的切换延迟(毫秒)
            txtHeight: 'default'//标题高度设置(像素),'default'为默认CSS高度，0为隐藏
});