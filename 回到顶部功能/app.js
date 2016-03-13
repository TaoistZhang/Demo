window.onload = function(){	var topbtn = document.getElementById("btn");
	var timer = null;
	var pagelookheight = document.documentElement.clientHeight;	/* 获取当前屏幕高度 */
	window.onscroll = function(){
		var backtop = document.body.scrollTop;
		if(backtop >= pagelookheight){			topbtn.style.display = "block";		/* 滑动到第二屛显示按钮 */		}else{			topbtn.style.display = "none";		}
	}
	topbtn.onclick = function(){
		timer = setInterval(function(){		/* 使用定时器功能 */
			var backtop = document.body.scrollTop;
			var speedtop = backtop/5;
			document.body.scrollTop = backtop -speedtop;	/* 越往顶端滚动越慢 */
			if(backtop ==0){
				clearInterval(timer);	/* 顶端停止滚动 */
			}
		},30);
	}}