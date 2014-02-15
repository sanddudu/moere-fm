function showid () {
	window.parent.frames["fm-window"].onhashchange = function(){
		songid = window.parent.frames["fm-window"].location.hash.substr(2);
		tray.tooltip = "▶ 正在收听的歌曲ID为：" + songid;
	}
}