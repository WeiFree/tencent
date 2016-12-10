window.onload=function(){
	slider("gn_slider");
	
	//视频
	var shipin = document.getElementById("gn_con1").children[1].children[1];
	var mask = document.getElementById("mask");
	var close = mask.children[2];
	var video = mask.children[1];
	shipin.onclick = function() {
		mask.style.display = "block"
		
	}
	close.onclick = function() {
		mask.style.display = "none"
		video.pause();
	}

var d1_img2=document.getElementById("show1_con").children[1];

var d1_img3=document.getElementById("show1_con").children[2];
var d2_img2=document.getElementById("show2_con").children[1];
var d2_img3=document.getElementById("show2_con").children[2];
var d3_img2=document.getElementById("show3_con").children[1];
var d3_img3=document.getElementById("show3_con").children[2];
var d3_div4=document.getElementById("show3_con").children[3];
var d4_img2=document.getElementById("show4_con").children[1];
var d4_img3=document.getElementById("show4_con").children[2];
var d4_img4=document.getElementById("show4_con").children[3];
var d5_img2=document.getElementById("show5_con").children[1];

//此处用jq
//第一幅动画
var d2_spans = document.getElementById("show2_con").getElementsByTagName("span");
var d2_spans2 = document.getElementById("tubiao1").getElementsByTagName("span");
var d3_spans = document.getElementById("imgc").getElementsByTagName("span");
var d3_spans2 =document.getElementById("tubiao2").getElementsByTagName("span");
var imgc = document.getElementById("show3_con").children[3].children[0];
window.onscroll=function(){
	
	if(scroll().top>400){
//		d1_img2.animate({"opacity":1,"left":400});
		animation(d1_img2,{"opacity":100,"left":400});
		
//		d1_img3.animate({"opacity":1,"left":500});
		animation(d1_img3,{"opacity":100,"left":500});
	}
	if(scroll().top>1000){
//		d2_img2.animate({"opacity":1,"left":100});
		
		animation(d2_img2,{"opacity":100,"left":100});
		
//		d2_img3.animate({"opacity":1,"left":550});
		animation(d2_img3,{"opacity":100,"left":550});
		spansshow(d2_spans);
	}
	if(scroll().top>1800){
		animation(d3_img2,{"opacity":100,"left":400});
		animation(d3_img3,{"opacity":100,"left":900});
		animation(d3_div4,{"opacity":100,"left":445});
	}
	if(scroll().top>2300){
		animation(d4_img2,{"opacity":100,"left":51});
		
		animation(d4_img3,{"opacity":100,"left":533});
		
		animation(d4_img4,{"opacity":100,"top":56});
		spansshow(d2_spans);
	}
	if(scroll().top>2900){
		animation(d5_img2,{"opacity":100,"left":400});
	}
}
spansctl(d2_spans[0],d2_spans2[0],-240,-180);
spansctl(d2_spans[1],d2_spans2[1],-180,-180);
spansctl(d2_spans[2],d2_spans2[2],-2,-181);
spansctl(d2_spans[3],d2_spans2[3],-62,-181);
spansctl(d2_spans[4],d2_spans2[4],-122,-182);

spansctl(d3_spans[0],d3_spans2[0],0,-180,imgc,0);
spansctl(d3_spans[1],d3_spans2[1],-60,-180,imgc,-13);
spansctl(d3_spans[2],d3_spans2[2],-120,-181,imgc,-90);
spansctl(d3_spans[3],d3_spans2[3],-180,-181,imgc,-112);
function spansshow(spans){
	for(var i =0;i<spans.length;i++){
			animation(spans[i],{"opacity":100})
		}
	
}

function spansctl(spans,spans2,x,y,who,how){
//	var x1= window.getComputedStyle(spans,null).backgroundPositionX;
	
	var x1 = getstyle(spans,"backgroundPositionX");
	var y1 = getstyle(spans,"backgroundPositionY");
//	var y1= window.getComputedStyle(spans,null).backgroundPositionY;
	spans2.onmouseenter=function(){
				spans.style.backgroundPositionX=x+"px";
				spans.style.backgroundPositionY=y+"px";
				animation(who,{"top":how})
			}
	spans2.onmouseleave=function(){
				spans.style.backgroundPositionX=x1;
				spans.style.backgroundPositionY=y1;
			}
}
}
