var winwidth = win.width;
win.on('restore', function() {
	if (winwidth != 500) {
		win.resizeTo(500, 300);
	}
});
win.setMaximumSize(500, 300);
win.setMinimumSize(500, 300);
//send songid to fm page
function update () {
	var songid;
	songid = document.getElementById("idinput").value;
	if (parseInt(songid) == songid) {
		window.open("idplayon.html#" + songid,"","height=414, width=650, resizable=no");
	} else {
		alert("输入的不是数字或非整数！请重新输入！");
	}
}