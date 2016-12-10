window.onload=function(){
	var yimain=document.getElementById("box");
	var slider=yimain.children[0];
	var slideritem2=slider.children[1];
	var item2one=slideritem2.children[0];
	var item2two=slideritem2.children[1];
	var siimg=slideritem2.children[1];
	var lis=siimg.children[0].children;
	var square=slideritem2.children[2];
	var num=0;
	
	for(var i=0;i<lis.length;i++){
		var sp=document.createElement("span");
		square.appendChild(sp);
	}
	var squsp=square.children;
	ligth();
	
	function ligth(){
		for(var i=0;i<squsp.length;i++){
			squsp[i].className="";
		}
		squsp[num].className="cgreen";
	}
	timer=setInterval(autoplay,2000);
	function autoplay(){
        animation(lis[num],{"left":-item2two.offsetWidth,"opacity":0});
        ++num>lis.length-1?num=0:num;
        lis[num].style.left = -item2two.offsetWidth+"px";
        if(num==0){
        	animation(lis[num],{"left":0,"opacity":100});
        	yimain.style.background="url('img/dengjijiasu/bg_12.jpg') center 0px no-repeat,url('img/dengjijiasu/bg_13.jpg') center 400px  no-repeat";
        	item2one.style.background="url('img/dengjijiasu/img7.jpg') 0px  0px no-repeat";
        }else if(num==1){
        	animation(lis[num],{"left":300,"opacity":100});
        	yimain.style.background="url('img/dengjijiasu/bg_17.jpg') center 0px no-repeat,url('img/dengjijiasu/bg_18.jpg')  center 400px no-repeat";
        	item2one.style.background="url('img/dengjijiasu/img5.jpg') 0px  0px no-repeat";
        }else{
        	console.log(num);
        	animation(lis[num],{"left":0,"opacity":100});
        	console.log(num);
        	yimain.style.background="url('img/dengjijiasu/bg_15.jpg') center 0px no-repeat,url('img/dengjijiasu/bg_16.jpg')  center 400px no-repeat";
        	item2one.style.background="url('img/dengjijiasu/img10.jpg') 0px  0px no-repeat";
        }
        ligth();
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
