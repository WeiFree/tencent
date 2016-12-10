window.onload=function(){
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
	mask.style.display="block"
	var close = mask.children[1].children[0];
	close.onclick=function(){
		mask.style.display="none"
	}
	ix_login.onclick=function(){
		mask.style.display="block"
	}
	  var ul=document.getElementsByClassName("ul")[0]
	  
	  var liS=ul.children;
	  console.log(ul)
       var DIVs =document.getElementsByClassName("nr");
			for(i=0;i<liS.length;i++){
				liS[i].index=i;
				liS[i].onclick=function(){
					for(j=0;j<liS.length;j++){
						DIVs[j].style.display="none";
					}
					DIVs[this.index].style.display="inline-block";
				}
			}
	var nvshen=document.getElementById("nvshen");
	var nvshenclose=document.getElementById("nvshen-close");
	nvshenclose.onclick=function(){
		nvshen.style.display="none";
	}
}
