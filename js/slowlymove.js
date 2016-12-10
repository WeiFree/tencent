function animation(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //同时改变宽和高
        var flag =true;
        for(var i in json){
        	if(i == "opacity"){
        		var leader = parseInt(getstyle(obj,i)*100);
        	}else{
        		var leader = parseInt(getstyle(obj,i));
        	}
            
            var target = json[i];
            var speed = (target - leader)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            leader = leader + speed;
            if(i == "opacity"){
            	obj.style[i]=leader/100;
            	obj.style.filter = "alpha(opacity="+target+")";
            	if(target==100){
            		obj.style.filter="";
            	}
            }else if(i == "zIndex"){
            	obj.style[i]=target;
            }else{
            	obj.style[i]=leader + "px";
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
    },20)
}

function client(){
	return{
		"width":window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
		"height":window.innerHeiht||document.documentElement.clientHeight||document.body.clientHeight
	}
}


function getstyle(obj,attr){
    if(window.getComputedStyle){//检测是否有window.getComputedStyle方法
        return window.getComputedStyle(obj,null)[attr];
    }else{//IE浏览器
        return obj.currentStyle[attr];
    }
}


function scroll(){
                    var left = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
                    var top = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;

                    return {"left":left,"top":top};
}

function slider(box){
	var slider = document.getElementById(box);
	var show = slider.children[0].children[0];
	var lis = show.children;
	var ctrl = slider.children[1];
	var num1 = 0;
	var num2 = 0;
	var num=0;
			//动态添加span
			addspan();
			var spans = ctrl.children;
			light();
	
			function addspan() {
				for(var i = 0; i < lis.length; i++) {
					var spans = document.createElement("span");
					ctrl.appendChild(spans);
	
				}
			}
			//设置图片位置
			for(var i = 1; i < lis.length; i++) {
				lis[i].style.opacity = 0;
			}
			//点击span 时切换
			for(var j = 0; j < lis.length; j++) {
				spans[j].index = j;
				spans[j].onmouseover=function(){
					//判断当前位置与目标位置的大小关系
					animation(lis[num], {
						"opacity": 0
					});
					animation(lis[this.index], {
						"opacity": 100
					});
					num = this.index;
					light();
	
				}
			}
			slider.timer = setInterval(autoplay, 4000);
			slider.onmouseover = function() {
				clearInterval(slider.timer)
			}
			slider.onmouseout = function() {
				slider.timer = setInterval(autoplay, 4000);
			}
	
			function autoplay() {
				animation(lis[num], {
					"opacity": 0
				});
				++num > lis.length - 1 ? num = 0 : num;
				animation(lis[num], {
					"opacity": 100
				});
				light();
			}
			//点亮span
			function light() {
				spans = ctrl.children;
				for(var i = 0; i < lis.length; i++) {
					spans[i].className = "";
				}
				spans[num].className = "curr";
			}
		
}
