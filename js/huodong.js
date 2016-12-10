window.onload=function(){
var slider=document.getElementById("slider");
var lis=slider.children[0].children[0].children;
var spanF=slider.children[1];
var spans=spanF.children;
var num=0;
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
	var login = document.getElementById("denglu");
	var mask = document.getElementById("mask");
	var close = mask.children[1].children[0];
	login.onclick=function(){
		mask.style.display="block"
		
	}
	close.onclick=function(){
		mask.style.display="none"
	}
	ix_login.onclick=function(){
		mask.style.display="block"
	}
 for(var i=1;i<lis.length;i++){
			lis[i].style.left=slider.offsetWidth+"px"
		}
		for(var i=0;i<lis.length;i++){
			var span=document.createElement("span");
			span.innerHTML=i+1;
			spanF.appendChild(span);
		}
		light();
		for(i=0;i<spans.length;i++){
			spans[i].onmouseover=function(){
				var index=this.innerHTML-1;
				if(index>num){
					lis[index].style.left=slider.offsetWidth+"px";
					animation(lis[num],{"left":-slider.offsetWidth})
					animation(lis[index],{"left":0})
					num=index;
				}
				else if(index<num){
					lis[index].style.left=-slider.offsetWidth+"px";
					animation(lis[num],{"left":slider.offsetWidth})
					animation(lis[index],{"left":0})
					num=index;
				}
				light()
			}
		}
		
	function autoplay(){
	animation(lis[num],{"left":-slider.offsetWidth});
	++num>lis.length-1?num=0:num;
	lis[num].style.left=slider.offsetWidth+"px"
	animation(lis[num],{"left":0})
	light();
}
slider.timer=setInterval(autoplay,3000);

    slider.onmouseover=function(){
        clearInterval(slider.timer)
    }
    slider.onmouseout=function(){
        slider.timer = setInterval(autoplay,3000);
    }
		function light(){
        for(var i=0;i<spans.length;i++){
            spans[i].className="";
        }
        spans[num].className="current";
   }
		
}