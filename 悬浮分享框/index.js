
window.onload= function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover= function () {
		startMove(0,10);
	};
	oDiv.onmouseout= function () {
		startMove(-150,-10);
	};
};
function startMove (target,speed) {
	var oDiv=document.getElementById('div1');
	var timer=null;
	clearInterval(timer);
	timer= setInterval(
		function () {
			if (oDiv.offsetLeft== target) {
				clearInterval(timer);
			} else{
				oDiv.style.left= oDiv.offsetLeft+speed+'px';
			}
		}
	),30;
};