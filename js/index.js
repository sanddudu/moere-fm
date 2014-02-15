var winwidth = win.width;
win.on('restore', function() {
	if (winwidth != 500) {
		win.resizeTo(500, 300);
	}
});
win.setMaximumSize(500, 300);
win.setMinimumSize(500, 300);
function play() {
	window.open("play.html","","height=414, width=650, resizable=no");
	window.close();
}
function fplay() {
	alert("注意！\n如果你的跟听用户ID填写的是0，效果和随机收听一样！\n如果被跟听者突然下线，会停止播放！");
	window.open("fplay.html","","height=414, width=650, resizable=no");
	window.close();
}
function idplay() {
	alert("注意！\n歌曲听完后将会和随机收听效果相同。");
	window.open("idplay.html","","height=300, width=500, resizable=no");
	window.close();
}
function login() {
	window.open("login.html","","height=393, width=600, resizable=no");
}
function setting() {
	window.open("setting.html","","height=740, width=530, resizable=no");
}
function gotosite() {
	require('nw.gui').Shell.openExternal("http://moe.re");
}