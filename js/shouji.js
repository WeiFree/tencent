window.onload=function(){
var btnwx=document.getElementById("btnwx");
var bwxewm=document.getElementById("bwxewm");
 btnwx.onmouseover=function(){
 	bwxewm.style.display="block"
 }
  btnwx.onmouseout=function(){
 	bwxewm.style.display="none"
 }
  var pic=findclass("switchpic");
  var txt=findclass("switchtxt");
  var slider=document.getElementById("lunbo");
  var squret=document.getElementById("squret");
  var spans=squret.children;
  var num=0;
  animation(pic[0],{"left":0,"opacity":100});
	animation(txt[0],{"right":0,"opacity":100});
		for(var i=0;i<pic.length;i++){
			var span=document.createElement("span");
			span.innerHTML=i+1;
			squret.appendChild(span);
		}
		light();
		for(i=0;i<spans.length;i++){
			spans[i].onclick=function(){
				var index=this.innerHTML-1;
				
					pic[index].style.left=-300+"px";
					txt[index].style.right=300+"px";
					animation(pic[num],{"left":-300,"opacity":0})
					animation(txt[num],{"right":-300,"opacity":0})
					animation(pic[index],{"left":0,"opacity":100});
					animation(txt[index],{"right":0,"opacity":100});
					num=index;
				
				light()
			}
		}
		function autoplay(){
			
			animation(pic[num],{"left":-300,"opacity":0});
			animation(txt[num],{"right":-300,"opacity":0});
			++num>pic.length-1?num=0:num;
			pic[num].style.left=-300+"px";
			txt[num].style.right=300+"px";
			animation(pic[num],{"left":0,"opacity":100});
			animation(txt[num],{"right":0,"opacity":100});
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
        spans[num].className="cur";
    }
  var pictwo=findclass("pic");
  var txttwo=findclass("txt");
  window.onscroll=function(){
	
	if(scroll().top>800){
			animation(pictwo[0],{"opacity":100,"left":0})
			animation(txttwo[0],{"opacity":100,"right":0})
	}
	if(scroll().top>1200){
			animation(pictwo[1],{"opacity":100,"right":0})
			animation(txttwo[1],{"opacity":100,"left":0})
	}
	if(scroll().top>1500){
			animation(pictwo[2],{"opacity":100,"left":0})
			animation(txttwo[2],{"opacity":100,"right":0})
	}
	if(scroll().top>1900){
			animation(pictwo[3],{"opacity":100,"right":0})
			animation(txttwo[3],{"opacity":100,"left":0})
	}
	if(scroll().top>2300){
			animation(pictwo[4],{"opacity":100,"left":0})
			animation(txttwo[4],{"opacity":100,"right":0})
	}
	if(scroll().top>2700){
			animation(pictwo[5],{"opacity":100,"right":0})
			animation(txttwo[5],{"opacity":100,"left":0})
	}

}
}