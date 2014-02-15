function changestyle() {
	// pic
	window.parent.frames["fm-window"].document.getElementById("pic").style.float = 'left';
	window.parent.frames["fm-window"].document.getElementById("pic").style.marginLeft = '30px';
	window.parent.frames["fm-window"].document.getElementById("pic").style.marginTop = '190px';
	window.parent.frames["fm-window"].document.getElementById("pic").style.width = '210px';
	window.parent.frames["fm-window"].document.getElementById("pic").style.height = '210px';
	//cd cover
	window.parent.frames["fm-window"].document.getElementById("pic").childNodes[1].style.width = '210px';
	window.parent.frames["fm-window"].document.getElementById("pic").childNodes[1].style.height = '210px';
	//pause
	window.parent.frames["fm-window"].document.getElementById("pause").style.width = '210px';
	window.parent.frames["fm-window"].document.getElementById("pause").style.height = '210px';
	//music title
	window.parent.frames["fm-window"].document.getElementsByTagName("h1")[0].style.marginTop = '200px';
	window.parent.frames["fm-window"].document.getElementsByTagName("h1")[0].style.marginLeft = '20px';
	window.parent.frames["fm-window"].document.getElementsByTagName("h1")[0].style.fontSize = '20px';
	//control
	window.parent.frames["fm-window"].document.getElementById("ctrl").style.marginLeft = '320px';
	window.parent.frames["fm-window"].document.getElementById("ctrl").style.marginTop = '20px';
	//user
	window.parent.frames["fm-window"].document.getElementById("user").style.margin = '0';
}