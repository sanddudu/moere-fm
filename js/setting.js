var winwidth = win.width;
win.on('restore', function() {
	if (winwidth != 530) {
		win.resizeTo(530, 740);
	}
});
win.setMaximumSize(530, 740);
win.setMinimumSize(530, 740);
function changestyle() {
	//hmsg
	window.parent.frames["fm-setting"].document.getElementById("hmsg").style.display = 'none';
	// back button
	window.parent.frames["fm-setting"].document.getElementsByTagName("a")[7].style.display = 'none';
	// nav-bar
	window.parent.frames["fm-setting"].document.getElementsByClassName("page")[0].style.display = 'none';
}