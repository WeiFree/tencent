var navanquan=document.getElementById("nav-anquan");
var stage=document.getElementById("stage1")
var navLi=navanquan.getElementsByTagName("li");
var target=0;
var leader=0;
var timer=null;
window.onbeforeunload=function(){
	window.scrollTo(0,0);
}
for (i=0;i<navLi.length;i++) {
	
	navLi[i].index=i;
	navLi[i].onclick=function(){
		for(a=0;a<navLi.length;a++){
			navLi[a].className="";
		}
		var indexs=this.innerHTML-1;
		navLi[indexs].className="on";
		target=stage.offsetHeight*this.index;
		clearInterval(timer);
		timer=setInterval(function(){
			var speed=(target-leader)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			leader=leader+speed;
			window.scrollTo(0,leader);
			if(leader==target){
				clearInterval(timer);
			}
		},10)
		if(this.index==1){
			var stage2=document.getElementById("stage2");
			var antext2=stage2.children[0];
			var w3=stage2.children[0].children[1];
			var w4=stage2.children[0].children[2];
			var an2=stage2.children[0].children[3];
			var p1=stage2.children[1];
			var p2=stage2.children[2];
			w3.style.right="1000"+"px";
			w4.style.right="2000"+"px";
			an2.style.right="3000"+"px";
			p1.style.right="-3000"+"px";
			p2.style.right="-6000"+"px";
			animation(w3,{right:20});
			animation(w4,{right:20});
			animation(an2,{right:20});
			animation(p1,{right:-50});
			animation(p2,{right:111});
		}
		if(this.index==2){
			var stage3=document.getElementById("stage3");
			var antext3=stage3.children[3];
			var p3=stage3.children[0];
			var logo=stage3.children[1];
			var hand=stage3.children[2];
			var w5=antext3.children[1];
			var w6=antext3.children[2];
			var an_3=antext3.children[3];
			w5.style.left="1000"+"px";
			w6.style.left="2000"+"px";
			an_3.style.left="3000"+"px";
			p3.style.top="-1500"+"px";
			hand.style.top="1500"+"px";
			logo.style.opacity=0;
			animation(w5,{left:20});
			animation(w6,{left:20});
			animation(an_3,{left:20});
			animation(p3,{top:150});
			animation(hand,{top:333});
			animation(logo,{opacity:100});
		}
		if(this.index==3){
			var stage4=document.getElementById("stage4");
			var p4=stage4.children[0];
			var p5=stage4.children[1];
			var run=stage4.children[2];
			var dot=stage4.children[3];
			var antext4=stage4.children[4];
			var w7=antext4.children[1];
			var w8=antext4.children[2];
			var an_4=antext4.children[3];
			w7.style.right=-1000+"px";
			an_4.style.right=-3000+"px";
			w8.style.right=-2000+"px";
			p4.style.right=4000+"px";
			p5.style.right=6000+"px";
			run.style.right=6000+"px";
			dot.style.right=6000+"px";
			animation(w7,{right:20})
			animation(w8,{right:20})
			animation(an_4,{right:20})
			animation(p4,{right:-112})
			animation(p5,{right:0})
			animation(run,{right:68})
			animation(dot,{right:29})
		}
		if(this.index==4){
			var stage5=document.getElementById("stage5");
			var p6=stage5.children[0];
			var w9=stage5.children[1].children[1];
			var w10=stage5.children[1].children[2];
			var an_5=stage5.children[1].children[3];
			p6.style.left=1000+"px";
			w9.style.left=2000+"px";
			w10.style.left=3000+"px";
			an_5.style.left=4000+"px";
			animation(p6,{left:0})
			animation(w9,{left:20})
			animation(w10,{left:20})
			animation(an_5,{left:0})
		}
	}
}


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