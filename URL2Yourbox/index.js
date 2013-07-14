function onClickDownload() {
	if (document.getElementById("url").value !== '') {
		options = {
        files: [
            {
                'url': document.getElementById("url").value,
                'filename': document.getElementById("file-name").value}
        ],
        success: function() {
            // console.log("success");
            document.getElementById('light').style.display='none';
            document.getElementById('fade').style.display='none';
			showToast("Download finished");
        },
        progress: function(progress) {
            // console.log(progress);
            showProcess();
        },
        cancel: function() {
            console.log("cancel");
			showToast("Download canceled");
        },
        error: function(errmsg) {
            console.log(errmsg);
            showToast(errmsg);
        }	 
    }	
	    console.log(document.getElementById("url").value);
	    Dropbox.save(options);
	}else{
		alert("File URL cannot empty");
	};
    
}

function showProcess(){
	var light = document.getElementById("light");
	light.style.display="block";
	var fade = document.getElementById("fade");
	fade.style.display="block";

	var opts = {
	  lines: 13, // The number of lines to draw
	  length: 20, // The length of each line
	  width: 10, // The line thickness
	  radius: 30, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
	};
	var target = document.getElementById('light');
	var spinner = new Spinner(opts).spin(target);
}

function showToast(toastText){
	var allAlpha = 0;
	var toastDiv = document.createElement("div");
	toastDiv.setAttribute("id", "toast");
	toastDiv.style.width = "100%";
	toastDiv.style.position = "fixed";
	toastDiv.style.bottom = "35px";
	toastDiv.style.textAlign = "center";

	var toastInner = document.createElement("span");
	toastInner.setAttribute("id", "toastInner");
	toastInner.style.backgroundColor = "black";
	toastInner.style.color = "white";
	toastInner.style.padding = "5px 15px";
	toastInner.style.fontSize = "20px";
	toastInner.style.borderRadius = "3px";
	toastInner.style.boxShadow = "3px 3px 6px black";


	var node = document.createTextNode(toastText);
	toastInner.appendChild(node);
	toastDiv.appendChild(toastInner);
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(toastDiv);

	
	var toastAnim = setInterval(function(){	
		toastInner.style.opacity = allAlpha;
		allAlpha += 0.008;
		if (allAlpha > 0.85) {
			clearInterval(toastAnim);
		};
	},10);

// hideToast
	setTimeout(function(){
		var hideToastAnim = setInterval(function(){	
		toastInner.style.opacity = allAlpha;
		allAlpha -= 0.008;
		if (allAlpha <= 0) {
			clearInterval(hideToastAnim);
		};
	},10);
	},5000);
}
