	var slider = document.getElementById("sliders");
	var lis = slider.getElementsByTagName("div");
	var ctrl = slider.children[1];
	var spans = ctrl.children;
	var num=0;
	
			function autoplay() {
				animation(lis[num], {
					"opacity": 0,
					"zIndex": 1
				});
				++num > lis.length - 1 ? num = 0 : num;
				animation(lis[num], {
					"opacity": 100,
					"zIndex": 10
				});
				light();
			}
			//点亮span
			function light() {
				
				for(var i = 0; i < lis.length; i++) {
					spans[i].className = "";
				}
				spans[num].className = "lip";
			}
				//点击span 时切换
			for(var j = 0; j < lis.length; j++) {
				spans[j].index = j;
				spans[j].onmouseover=function() {
					//判断当前位置与目标位置的大小关系
					animation(lis[num], {
						"opacity": 0,
						"zIndex": 1
					});
					animation(lis[this.index], {
						"opacity": 100,
						"zIndex": 10
					});
					num = this.index;
					light();
	
				}
			}
			slider.timer = setInterval(autoplay, 4000);
			var buton=document.getElementById("buton");
			var gamelist=document.getElementById("gamelist");
			var hiddes=gamelist.children[1].children;
			var num=0;
			for (i=7;i<hiddes.length;i++) {
				hiddes[i].style.display="none";
			}
			buton.onclick=function(){
				
				if(num==0){
					for (i=7;i<hiddes.length;i++) {
						num=1
						hiddes[i].style.display="block";
						this.innerHTML="<img src='img/wujianhua/arrow-d.png'/><p>收起</p>"
					}
				}else{
					for (i=7;i<hiddes.length;i++) {
						num=0
						hiddes[i].style.display="none";
						this.innerHTML="<img src='img/wujianhua/arrow-t.png'/><p>展开更多</p>"
					}
				}
			}
			slider.timer = setInterval(autoplay, 4000);
			slider.onmouseover = function() {
				clearInterval(slider.timer)
			}
			slider.onmouseout = function() {
				slider.timer = setInterval(autoplay, 4000);
			}
			

