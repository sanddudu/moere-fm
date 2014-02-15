function getsongid () {
	//send songid to frame
	var songid = window.location.hash.substr(1);
	window.parent.frames["fm-window"].location = "http://moe.re/fm#!" + songid;
}