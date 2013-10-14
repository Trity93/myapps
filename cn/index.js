function mOver(obj){
	showUpdateLog();
}

function exitOnClick(){
	hideUpdateLog();
}


var mPadding = 0;
var whatsNewHeight = 0;

function showUpdateLog(){
	var c=document.getElementById("new-exit");
	var whatsNew=document.getElementById("whats-new");
	var newInner=document.getElementById("new-inner");
	// What's new
	whatsNew.style.display="block";
	if (mPadding<30) {
		var addNewPaddingAnim=window.setInterval(
		function (){
			whatsNew.style.padding=mPadding+"px 20%";
			mPadding++;
			if(mPadding>3){
				//new inner
				newInner.style.display="block";
			}
			if(mPadding>30){
			clearInterval(addNewPaddingAnim);
			}
		},10);
	};
	
	
	//What's new
	if (whatsNewHeight<380) {
		var addHeightAnim=window.setInterval(
		function (){
			whatsNew.style.height=whatsNewHeight+"px";
			whatsNewHeight+=3;
			if(whatsNewHeight>380){
			clearInterval(addHeightAnim);
			//show exit Button
			c.style.display="block";
			var ctx=c.getContext("2d");
			ctx.beginPath();
			ctx.fillStyle="#FFFFFF"
			ctx.arc(25,25,25,0,2*Math.PI);
			ctx.fill();
			ctx.fillStyle="#000000"
			ctx.font="25px Arial";
			ctx.fillText("X",17,35);
			}
		},10);
	};
}

function hideUpdateLog(){
	var c=document.getElementById("new-exit");
	var whatsNew=document.getElementById("whats-new");
	var newInner=document.getElementById("new-inner");

	//What's new
	//hide exit Button
	c.style.display="none";

	if (whatsNewHeight>0) {
		var addHeightAnim=window.setInterval(
		function (){
			whatsNew.style.height=whatsNewHeight+"px";
			whatsNewHeight-=3;
			if(whatsNewHeight<0){
				clearInterval(addHeightAnim);
				newInner.style.display="none";
				whatsNew.style.display="none";
				mPadding=0;
				whatsNew.style.padding=mPadding+"px 20%";
			}

		},1);
	};

}





