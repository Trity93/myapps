function onClickDownload(){
	options = {
	    files: [
	        {
	        	'url':document.getElementById("url").value, 
	        	'filename':document.getElementById("file-name").value}
	    ],
    success: function() {console.log("success");},
    progress: function(progress) {console.log(progress);},
    cancel: function() {console.log("cancel");},
    error: function(errmsg) {console.log(errmsg);}
	}
	console.log(document.getElementById("url").value);
	Dropbox.save(options);
}

