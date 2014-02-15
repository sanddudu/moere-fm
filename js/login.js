var winwidth = win.width;
win.on('restore', function() {
	if (winwidth != 600) {
		win.resizeTo(600, 393);
	}
});
win.setMaximumSize(600, 393);
win.setMinimumSize(600, 393);
function changestyle() {
	//hmsg
	window.parent.frames["fm-login"].document.getElementById("hmsg").style.display = 'none';
	// back button
	window.parent.frames["fm-login"].document.getElementsByTagName("a")[4].style.display = 'none';
	// nav-bar
	window.parent.frames["fm-login"].document.getElementsByClassName("page")[0].style.display = 'none';
}