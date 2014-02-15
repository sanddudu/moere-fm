//back to main screen
win.on('close', function() {
	this.hide();
	var win = gui.Window.open('index.html', {
		icon: "moere.ico",
		toolbar: false,
		width: 500,
		height: 300
	});
	this.close(true);
});