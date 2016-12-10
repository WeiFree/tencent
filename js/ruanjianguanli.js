window.onload=function(){
	var rimain=document.getElementById("box");
	var ritwo=rimain.children[1];
	var rithree=rimain.children[2];
	var square=ritwo.children[1]
	var lis=ritwo.children[0].children;
    var rithreedv=rithree.children[0];
//  var img=rithreedv.children[0];
    var rithreedvsp=rithreedv.children[1];
    var rithreedvsptwo=rithreedv.children[2];
	var num=0;
	for(var i=0;i<lis.length;i++){
		var sp=document.createElement("span");
		square.appendChild(sp);
	}
	var squsp=square.children;
	lis[num].style.zIndex=4;
	ligth();
	function ligth(){
		for(var i=0;i<squsp.length;i++){
			squsp[i].className="";
		}
		squsp[num].className="color";
	}
	timer=setInterval(autoplay,2000);
	function autoplay(){
        ++num>lis.length-1?num=0:num;
        if(num==0){
        	for(var i=0;i<lis.length;i++){
        		lis[i].style.zIndex=2;
        	}
        	lis[num].style.zIndex=4;
        	rithreedvsp.innerHTML="01";
        	rithreedvsptwo.innerHTML="电脑必备 一键轻松安装";
        }else if(num==1){
        	for(var i=0;i<lis.length;i++){
        		lis[i].style.zIndex=2;
        	}
        	lis[num].style.zIndex=4;
        	rithreedvsp.innerHTML="02";
        	rithreedvsptwo.innerHTML="软件快速升级 极速体验";
        }else{
        	for(var i=0;i<lis.length;i++){
        		lis[i].style.zIndex=2;
        	}
        	lis[num].style.zIndex=4;
        	rithreedvsp.innerHTML="03";
        	rithreedvsptwo.innerHTML="软件安全卸载 不留残余";
        }
        ligth();
    }
	
//	function animation(obj,json,fn){
//  clearInterval(obj.timer);
//  obj.timer = setInterval(function(){
//      var flag = true;
//      for(var i in json){
//          //i代表：键（属性）
//          //json[i]代表值（目标位置）
//          if(i=="opacity"){
//              //原来的opacity是0-1之间，现在0-100之间
//              var leader = parseInt(getStyle(obj,i)*100);
//          }else if(i=="zIndex"){
//              var leader = json[i];
//          }else{
//              var leader = parseInt(getStyle(obj,i));//获取该属性当前值
//          }
//          var target = json[i];//获取该属性目标值
//          var speed = (target - leader)/10;
//          speed = speed>0?Math.ceil(speed):Math.floor(speed);
//          leader = leader +speed;
//          if(i=="opacity"){
//              obj.style[i]=leader/100;
//          }else if(i=="zIndex"){
//              obj.style[i]=target;
//          }
//          else{
//              obj.style[i] = leader + "px";
//          }
//          if(leader!=target){
//              flag=false;
//          }
//      }
//      if(flag){
//          clearInterval(obj.timer);
//          if(fn){
//              fn();
//          }
//      }
//  },50)
//}
//	function getStyle(obj,attr){
//	    if(window.getComputedStyle){//检测是否有window.getComputedStyle方法
//	        return window.getComputedStyle(obj,null)[attr];
//	    }else{//IE浏览器
//	        return obj.currentStyle[attr];
//	    }
//	}
}
