
 function animationOld(obj,target){
            clearInterval(obj.timer);
            //原理：盒子的位置 = 盒子本身所在位置+步长
            //style.left = offsetLeft+speed
            //分析：如果盒子在0位置，目标在200，速度为正
            //如果盒子在200，目标在0，速度为负
            obj.timer = setInterval(function(){
                var speed = (obj.offsetLeft<target?10:-10)
                if(Math.abs(obj.offsetLeft-target)<10){
                    obj.style.left = target+"px";
                    clearInterval(obj.timer);
                }else{
                    obj.style.left=(obj.offsetLeft +speed)+"px";
                }
                
            }, 10)
        
}
function animation(obj,json,fn){
    clearInterval(obj.timer);
	obj.timer = setInterval(function(){
        //开闭原则
        var flag = true;//开
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
               	obj.style.filter = "alpha(opacity="+target+")";
            	if(target==100){
            		obj.style.filter="";
            	}
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
    },10)
}
function animationTop(obj,target){
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                //走一步
                var speed = (target - obj.offsetTop)/10;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                // if(speed>0){
                //     speed = Math.ceil(speed);
                // }else{
                //     speed = Math.floor(speed);
                // }
                obj.style.top = (obj.offsetTop + speed)+"px";
                if(obj.offsetTop==target){
                    clearInterval(obj.timer);
                    // console.log("定时器停了");
                }
            },20)
}
function scroll(){
                    var left = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
                    var top = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;

                    return {"left":left,"top":top};
}
function client(){
            return {
                "width":window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
                "height":window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
            }        
}
function getStyle(obj,attr){
    if(window.getComputedStyle){//检测是否有window.getComputedStyle方法
        return window.getComputedStyle(obj,null)[attr];
    }else{//IE浏览器
        return obj.currentStyle[attr];
    }
}
function trim(str){
				return str.replace(/(^\s+)|(\s+$)/g,"")
			}

//通过ClassName查找元素
function findclass(a){
	var all=document.getElementsByTagName("*");
	var arr=[];
	for(i=0;i<all.length;i++){
		classArr = all[i].className.split(" ");
		for(var j=0;j<classArr.length;j++){
			if(classArr[j]==a){
			arr.push(all[i]);

		}
		}
		
	}
	return arr;
}
//tab选项框
function tab(aaa){
        var lis = aaa.getElementsByTagName("li");
        var Spans = aaa.getElementsByTagName("span");
			for(i=0;i<lis.length;i++){
				lis[i].index=i;
				lis[i].onmouseover=function(){
					for(j=0;j<lis.length;j++){
						lis[j].className="";
						Spans[j].className="";
					}
					lis[this.index].className="show";
					Spans[this.index].className="current";
				}
			}

}

function $(id){
        return document.getElementById(id);
                }