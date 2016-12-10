window.onload=function(){
	var tlist=document.getElementById("tlist");
	var dvthree=tlist.parentNode.children[2];
	var dvthreetxt=dvthree.children;
	var num=0;
//	var tmid=document.getElementById("tmid");
//	var tmidul=tmid.children[2];
//	var tmidlis=tmidul.children;
//	for(var j=0;j<tmidlis.length;j++){
//		tmidlis[j].onmouseenter=function(attr){
//			return function(){
//				tmidlis[attr].style.border="2px solid #c2ed0d";
//			};
//		}(j)
//	}
	timer=setTimeout(fn);
	function fn(){
		if(num<dvthreetxt.length){
			animation(dvthreetxt[num],{"right":0});
			num++;
			timer=setTimeout(fn);
		}
	}
	function animation(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var i in json){
            //i代表：键（属性）
            //json[i]代表值（目标位置）
            if(i=="opacity"){
                //原来的opacity是0-1之间，现在0-100之间
                var leader = parseInt(getStyle(obj,i)*100);
            }else if(i=="zIndex"){
                var leader = json[i];
            }else{
                var leader = parseInt(getStyle(obj,i));//获取该属性当前值
            }
            var target = json[i];//获取该属性目标值
            var speed = (target - leader)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            leader = leader +speed;
            if(i=="opacity"){
                obj.style[i]=leader/100;
            }else if(i=="zIndex"){
                obj.style[i]=target;
            }
            else{
                obj.style[i] = leader + "px";
            }
            if(leader!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },50)
    }
	function getStyle(obj,attr){
	    if(window.getComputedStyle){//检测是否有window.getComputedStyle方法
	        return window.getComputedStyle(obj,null)[attr];
	    }else{//IE浏览器
	        return obj.currentStyle[attr];
	    }
	}
}
