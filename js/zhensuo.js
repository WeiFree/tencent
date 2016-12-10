window.onload=function(){
	var header = document.getElementById("ix_header");
	var lis_hover = header.children[0].children[1].children;
	li_hover(lis_hover[1], 200);
	li_hover(lis_hover[2], 90);
	li_hover(lis_hover[3], 120);
	//导航显示隐藏
	function li_hover(li, target) {
		li.onmouseenter = function() {
			animation(li.children[1], {
				"height": target
			});
		}
		li.onmouseleave = function() {
			animation(li.children[1], {
				"height": 0
			});
		}
	}
	//登录模态框
	var login = document.getElementById("denglu");
	var mask = document.getElementById("mask");
	var close = mask.children[1].children[0];
	login.onclick = function() {
		mask.style.display = "block"

	}
	close.onclick = function() {
		mask.style.display = "none"
	}
	
	
	
	var main = document.getElementById("main");
	var divs = main.getElementsByTagName("div");
	var tabs_mods=[];
	var show_tabs=[];
	for(var i=0;i<divs.length;i++){
		if(divs[i].className=="tabs"){
			tabs_mods.push(divs[i]);
			
		}
		if(divs[i].className=="tabs_mod"){
			show_tabs.push(divs[i]);
		}
		
	}
	console.log(show_tabs)
	for(var j =0;j<tabs_mods.length;j++){
		tabs_mods[j].index=j;
		tabs_mods[j].onmouseover=function(){
			animation(show_tabs[this.index],{"top":0})
		}
		tabs_mods[j].onmouseout=function(){
			animation(show_tabs[this.index],{"top":122})
		}
	}
}