tray = new gui.Tray({
	title: 'Moe.re 电台',
	icon: 'moere.ico'
});
menu = new gui.Menu();
tray.on('click', function() {
	win.show();
	var winwidth = win.width;
	if (winwidth != 666) {
		win.resizeTo(666, 414);
	}
});
show = new gui.MenuItem({
	type: 'normal',
	label: '打开电台窗口',
	click: function() {
		win.show();
		var winwidth = win.width;
		if (winwidth != 666) {
			win.resizeTo(666, 414);
		}
	}
});
quit = new gui.MenuItem({
	type: 'normal',
	label: '退出',
	click: function() {
		win.removeAllListeners('close');
		win.close();
	}
});
show.add;
menu.append(show);
menu.append(quit);
tray.menu = menu;
window.tray = tray;
win.on('minimize', function() {
	win.hide();
});