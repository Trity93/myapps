function onClickDownload() {
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
        },
        progress: function(progress) {
            // console.log(progress);
            showProcess();
        },
        cancel: function() {
            console.log("cancel");
        },
        error: function(errmsg) {
            console.log(errmsg);
        }
    }
    console.log(document.getElementById("url").value);
    Dropbox.save(options);
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
