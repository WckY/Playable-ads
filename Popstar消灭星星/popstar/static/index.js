;(function(){
	//下载地址（必填）
	if(map.isIOS){
		map.downUrl = "https://itunes.apple.com/us/app/id834878585";
	}else{
		map.downUrl = "https://itunes.apple.com/us/app/id834878585";
	};
	window.app = {
		initFlag : true,
		currentTime : 0,
		canvas: new createjs.Stage("canvas")
	};
	window.utils = {
		init : function(){
			createjs.Touch.enable(app.canvas);
			utils.timeIncrease();
			utils.createShingStar();
			utils.createGridBg();
			var starArr = [
				{x:1, y:0, StarColor:'orange', unique:'one'},
				{x:2, y:0, StarColor:'#e91e63', unique:'two'},
				{x:4, y:0, StarColor:'limegreen', unique:'three'},
				{x:1, y:1, StarColor:'#e91e63', unique:'four'},
				{x:4, y:1, StarColor:'dodgerblue', unique:'five'},
				{x:0, y:2, StarColor:'orange', unique:'six'},
				{x:2, y:2, StarColor:'yellow', unique:'seven'},
				{x:0, y:3, StarColor:'dodgerblue', unique:'eight'},
				{x:1, y:3, StarColor:'yellow', unique:'nine'},
				{x:2, y:3, StarColor: 'limegreen', unique:'ten'}
			];
			for(var i = 0; i < starArr.length; i++){
				utils.createStarTemplate(starArr[i].x, starArr[i].y, starArr[i].StarColor, starArr[i].unique);
			};
			if("ontouchend" in document){
            	var startName = "touchstart";
            	var moveName = "touchmove";
            	var endName = "touchend";
            }else{
            	var startName = "mousedown";
            	var moveName = "mouseover";
            	var endName = "mouseup";
            };
            app.canvas.addEventListener(startName, utils.touchStart);
            app.canvas.addEventListener(moveName, utils.touchMove);
            app.canvas.addEventListener(endName, utils.touchEnd);
            app.refresh.addEventListener(startName, utils.refresh);
		},
		timeIncrease : function(){
			var timer = setInterval(function(){
				app.currentTime++;
            	app.time.innerHTML = app.currentTime;
            	if(app.time.innerHTML == 60){
            		clearInterval(timer);
            	};
			},1000);
		},
		createShingStar : function(){
			for(var i = 0; i < 25; i++){
	            var span = document.createElement('span');
	            span.className = 'shingStar';
	            document.body.appendChild(span);
	            //位置随机
	            var x = parseInt(Math.random() * app.vw);
	            var y = parseInt(Math.random() * app.vh);
	            span.style.left = x + 'px';
	            span.style.top = y + 'px';
	            //大小随机
	            var curScale = Math.random() * 1.5;
	            span.style.transform = 'scale('+ curScale + ', ' + curScale + ')';
	            //频率随机
	            var rate = Math.random() * 1.5;
	            span.style.animationDelay = rate + 's';
	        }
		},
		// 网格背景图
		createGridBg : function(){
			app.gridSize = app.min*0.18;
			app.gridCur = app.min*0.185;
			app.gridBox = new createjs.Container();
			app.gridBox.x = app.min*0.04;
			app.gridBox.y = app.min*0.08;
			Crt.sence.addChild(app.gridBox);
			createjs.Touch.enable(app.gridBox);
			for(var i = 0; i < 5; i++){
				for(var j = 0; j < 5; j++){
					app["grid_" + i + "_" +j] = Crt.drawRoundRect({
						color : "rgba(255, 255, 255, 0.3)",
						width : app.gridSize,
						height : app.gridSize,
						x : app.gridCur*j,
						y : app.gridCur*i,
						container : app.gridBox,
						round : app.min*0.02 /*圆角*/
					});

					var stage = new createjs.Stage("canvas");
					stage.enableMouseOver(10);
				};
			};
		},
		// 网格内星星渲染
		createStarTemplate :function(x, y, StarColor, unique){
			var shape = new createjs.Shape(), graphics = shape.graphics, starWH = app.min*0.02;
			graphics.beginFill(StarColor);
			graphics.drawPolyStar(starWH, starWH, app.min*0.05, 5, 0.5, -90);
			var currentPos = {x:x*0.185+0.07, y:y*0.18+0.08};
			shape.x = app.min*currentPos.x;
			shape.y = app.min*currentPos.y;
			shape.name = unique;
			app.gridBox.addChild(shape);
		},
		touchStart : function(e){},
		touchMove : function(e){},
		touchEnd : function(e){
			app.count.innerHTML = Number(app.count.innerHTML) + 1;
			app.percent.innerHTML = 15;
			if(app.count.innerHTML >=5){
				map.ad_end();
			};
		}
	};
	//屏幕旋转函数（必填）
	map.ad_resize = function(flag){
		var ad_width = 414,
			ad_height = 736;
        app.dw = map.getScreenSize().width;
        app.dh = map.getScreenSize().height;
        rate = app.dw/app.dh;
		app.vw = 0;
		app.vh = 0;
		if(app.dw < app.dh){
			document.body.setAttribute("class", "vertical");
			if(app.dw/app.dh < ad_width/ad_height){
				app.vw = app.dw;
				app.vh = (ad_height*app.dw)/ad_width;
			}else{
				app.vh = app.dh;
				app.vw = (app.dh*ad_width)/ad_height;
			};
			app.header.style.width = app.footer.style.width = '100%';
			app.refresh.style.width = '100%';
		}else{
			document.body.setAttribute("class", "horizontal");
			if(app.dw/app.dh < ad_height/ad_width){
				app.vh = (app.dw*ad_width)/ad_height;
				app.vw = app.dw;
			}else{
				app.vw = (app.dh*ad_height)/ad_width;
				app.vh = app.dh;
			};
			app.fh = (0.75 * app.vh).toFixed(2);
			app.header.style.width = app.footer.style.width  = app.fh + 'px';
			app.refresh.style.width = (app.vw - app.fh) + 'px';
		};
		app.min = app.vw < app.vh ? app.vw : app.vh;
		app.main.style.width = app.vw + "px";
		app.main.style.height = app.vh + "px";
        app.canvas.width = app.vw;
    	app.canvas.height = app.vh;
    	app.fs = app.min/10;
		document.querySelector("html").style.fontSize = app.fs +'px';
		Crt.autoResize();
	};
	//初始化函数（必填）
	map.ad_init = function(){
		if(app.initFlag){
			app.installBtn = document.getElementById("installBtn");
			app.main = document.getElementById("main");
			app.cover = document.getElementById("cover");
			app.end = document.getElementById("end");
			app.guide = document.getElementById("guide");
			app.count = document.getElementById("count");
			app.step = document.getElementById("step");
			app.percent = document.getElementById("percent");
			app.canvas = document.getElementById("canvas");
			app.header = document.querySelector('.header');
			app.footer = document.querySelector('.footer');
			app.time = document.querySelector('.time');
		};
		map.ad_resize();
		if(app.initFlag){
			Crt.init({
				type : "vertical",
				id : "canvas",
				rate : 1.2,
				scale: 1,
				distance:{
					x : app.vw*0.07,
					y : app.vh*0.25
				}
			});
			app.initFlag = false;
	        utils.init();
		};
	};
	//下载事件（必填）
	window.ad_downloaded = function(){
		map.platDown();
	};
})();
