var boxcommon ={
	init:function(){
		this.imgBoxShow();
	},
	stopEventBubble:function(event){
		var e =event;
			if(e){
				e.stopPropagation();
			}
	},
	imgBoxShow:function(){
		$('.lesson-img-box').bind("mouseover",function(e){
			var _pop = $(this).find('.img-box-pop');
			$(this).css({border:"2px solid #1abc9c",width:"226px",height:"226px"});
			TweenMax.to(_pop,0.5,{top:0,ease:Bounce.easeOut});
			boxcommon.stopEventBubble(e);	
		});
		$(document).bind("mouseover",function(){
            $('.lesson-img-box').css({border:"0",width:"230px",height:"230px"});
            var _pop = $(this).find(".img-box-pop");
            TweenMax.to(_pop,0.5,{top:230,ease:Linear.easeNone});
        })
	}
}

$(function(){
	boxcommon.init();
})