window.onload=function(){
	var nav=document.getElementById("top-nav");
	var lis=nav.children[0].children;
var header = document.getElementById("ix_header");
	var lis_hover = header.children[0].children[1].children;
	li_hover(lis_hover[1],200);
	li_hover(lis_hover[2],90);
	li_hover(lis_hover[3],120);
	//导航显示隐藏
	function li_hover(li,target){
		li.onmouseenter=function(){
			animation(li.children[1],{"height":target});
		}
		li.onmouseleave=function(){
			animation(li.children[1],{"height":0});
		}
	}
	//登录模态框
	var ix_login=document.getElementById("ix_denglu");
	var mask = document.getElementById("mask");
	var close = mask.children[1].children[0];
	close.onclick=function(){
		mask.style.display="none"
	}
	ix_login.onclick=function(){
		mask.style.display="block"
	}
	lis[0].style.borderBottom=" 4px solid #0C76FF"
	lis[0].children[0].style.fontWeight="bold";
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			
			for(var j=0;j<lis.length;j++){
				lis[j].style.borderBottom="none";
				lis[j].children[0].style.fontWeight="100";
			}
			lis[this.index].style.borderBottom=" 4px solid #0C76FF"
			lis[this.index].children[0].style.fontWeight="bold";
		}
	}
	var imgs=document.getElementsByClassName("go-top")[0]
			window.addEventListener("scroll",function(){
				if(window.pageYOffset>=100||document.body.scrollTop>=100||document.documentElement.scrollTop>=100||0){
					imgs.style.display="block"
				}
				else{
					imgs.style.display="none"
				}
			})
				
			
			imgs.onclick=function(){
				var leader=window.pageYOffset;
			console.log(leader)
			var target=0,timer=null;
				timer=setInterval(function(){
					var speed=(target-leader)/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					leader=leader+speed;
					window.scrollTo(0,leader);
					if(leader==target){
						clearInterval(timer);
					}
				},20)
			}
	var pic=document.getElementsByClassName("picbox");
	var box=document.getElementById("box-box");
	var news=new Array();
	console.log(pic.length)
	console.log(box.offsetHeight)
	window.onscroll=function(){
		if(window.scroll().top!=0){
	if(window.scroll().top%400==0){
	for(var i=0;i<6;i++){
		news[i]=pic[i].cloneNode(true);
		box.appendChild(news[i]);
//		console.log("1")
//		console.log(news[0]);
	}
}
}
}
	var game=document.getElementsByClassName("game")
	var pinpai=document.getElementsByClassName("pinpai")
	var luntan=document.getElementsByClassName("luntan")
	for(var k=1;k<lis.length;k++){
	lis[k].addEventListener("click",function(){
		for(var l=0;l<pic.length;l++){
		pic[l].style.display="none"
		}
	})
	}
	lis[0].addEventListener("click",function(){
		for(var l=0;l<pic.length;l++){
		pic[l].style.display="block"
		}
	})
	lis[1].addEventListener("click",function(){
		for(var l=0;l<pinpai.length;l++){
		pinpai[l].style.display="block"
		}
	})
	lis[2].addEventListener("click",function(){
		for(var l=0;l<game.length;l++){
		game[l].style.display="block"
		}
	})
	for(var k=3;k<lis.length;k++){
	lis[k].addEventListener("click",function(){
		alert("sorry，暂时没有该类型活动。")
	})
	}
	}