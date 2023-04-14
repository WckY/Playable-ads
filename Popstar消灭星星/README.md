![image](https://github.com/WckY/Responsive-h5-game-dictionary/blob/master/Popstar%E6%B6%88%E7%81%AD%E6%98%9F%E6%98%9F/logo.png)

1、https://static.zplay.cn/wap/ad_canPlay/popstar/1/plat/popstar_appLovin_en.html

解析: 实现引擎为pixi.js，难点在于无限递归，我leader亲自写的第一版。

2、https://static.zplay.cn/wap/ad_canPlay/popstar/3-5/plat/popstar_cake_WCKY_adwords_cn.html

解析: 实现引擎为create.js，难点有以下几点  -->

A: 星星的绘制，是通过二次封装的create.js的API，再通过一个公用函数传形参，最后调用传入不同的实参x、y值渲染出来的，这里面还有个计算公式，var currentPos = {x:x*0.185+0.07, y:y*0.18+0.08}。总之，我这里采取了封装类的写法，分别封装网格、星星。

B: 页面初始化时的引导动画，是通过create.js的动画代码createjs.Tween.get实现，具体如何填充不同的背景色，大家可以想一下。

C: A星自动寻路算法的实现。当所有可连接路径被填充完毕或已没有可填充的路径，A星自动寻路算法会立马将落地页展示出来。

D: 修复走外围的bug的颜色填充。当手指或鼠标按住某个颜色的网格不松手，走整个容器(大网格)之外的路线，落到其他小网格再松手，经过的路径背景颜色不会被填充。

3、https://static.zplay.cn/wap/ad_canPlay/popstar/4/plat/popstar_adwords_cn.html

解析: 引擎为create.js，该素材更全面，既有倒计时，也有分数计算。

4、https://static.zplay.cn/wap/ad_canPlay/popstar/20/plat/popstar_nation_WCKY_adwords_cn.html

解析: 引擎同上，难点在于无限递归，以及烟花颜色随机、位置随机的实现。烟花并不是用原生canvas实现，仍然是用create.js实现。

5、https://static.zplay.cn/wap/ad_canPlay/popstar/7_9/plat/ps_checkPoint_GBJ_adwords_cn.html

解析: 引擎同上，新的难点在于大量的飞逝流星的渲染，使用了相关算法。黄色、紫色、绿色、红色不断闪烁的星星也是create.js实现。

6、https://static.zplay.cn/wap/ad_canPlay/popstar/9/plat/ps_sf_9_adwords_en.html

解析: 引擎同上，同事所写。难点在于有新的容器、主舞台，而且是自动的，这款h5属于模拟和线上好友竞技类型，难度很大。

7、https://static.zplay.cn/wap/ad_canPlay/popstar/9-1/plat/ps_sf_9_1_adwords_cn.html

解析: 引擎同上，同事所写。难点在于主舞台一分为二，虽然仍是模拟人机大战，但难度比第十二个更大，而且横竖屏时样式布局都不一样，设计的非常出彩。

8、https://static.zplay.cn/wap/ad_canPlay/popstar/9-4/plat/ps_beauty_9-4_adwords_cn.html

解析: 引擎同上，模拟线上真人PK大战，加入真人gif头像，无限接近真实的PK场景。设计上删繁就简，力求最简化。

9、https://github.com/WckY/Responsive-h5-game-dictionary/tree/master/Popstar%E6%B6%88%E7%81%AD%E6%98%9F%E6%98%9F/popstar

解析: 我写了一个本地popstar的demo仅供大家参考，css、js等都在这项目中。有个小知识点是25个不断闪烁的星星(✨)，频率、大小随机，并不是用create.js或canvas实现，而是原生JS。

![image](https://github.com/WckY/Responsive-h5-game-dictionary/blob/master/Popstar%E6%B6%88%E7%81%AD%E6%98%9F%E6%98%9F/popstar.png)
