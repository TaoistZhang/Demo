function showTooltip (obj,id,html,width,height) {
	if(document.getElementById(id) == null){
		var tooltipBox;
		tooltipBox = document.createElement("div");
		tooltipBox.className = "tooltip-box";
		tooltipBox.id = id;
		tooltipBox.innerHTML = html;
		
		obj.appendChild(tooltipBox);
		
		tooltipBox.style.width = width?width+"px":"auto";
		tooltipBox.style.height = height?height+"px":"auto";

		tooltipBox.style.position = "absolute";
		tooltipBox.style.display = "block";
		
		var left = obj.offsetLeft;
		var top = obj.offsetTop+20;
		
		tooltipBox.style.left = left+"px";
		tooltipBox.style.top = top+"px";

		obj.onmouseout = function () {
//			document.getElementById(id).style.display = "none";
			setTimeout(function () {
				document.getElementById(id).style.display = "none"
			},300);
		}
	}else{
		document.getElementById(id).style.display = "block";
	}
}

var h5 = document.getElementById("html5");
h5.onmousemove = function () {
	showTooltip(this,"h5","万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改",200);
};

var c3 = document.getElementById("css3");
c3.onmousemove = function () {
	showTooltip(this,"c3","层叠样式表,可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。",200);
};

var sg = document.getElementById("svg");
sg.onmousemove = function () {
	showTooltip(this,"sg","可缩放矢量图形是基于可扩展标记语言,用于描述二维矢量图形的一种图形格式,主要竞争者是 Flash",200);
};

var lg = document.getElementById("logo");
lg.onmousemove = function () {
	showTooltip(this,"lg","<img src='logo200.png'>",200);
};

var u7d = document.getElementById("7div");
u7d.onmousemove = function () {
	showTooltip(this,"u7d","<iframe src='http://www.7div.com' width='500' height='300'>",500);
};