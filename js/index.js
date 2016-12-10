window.onload = function() {
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

	//slider
	slider("slider");
		

}