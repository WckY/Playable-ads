1、https://static.zplay.cn/wap/ad_canPlay/tilesHop/normal/plat/TH_normal_WSH_adwords_cn.html

解析: 实现引擎为create.js，难点在于手指对小球方向的控制。核心代码为var touch = (event.touches ? event.touches[0] : event || window.event)，然后获取touch.pageX和touch.pageY，通过监听touchstart和touchmove事件等实现，PC端兼容同理。同时在touchmove的时候，禁止页面滚动。

```javascript
document.body.addEventListener(app.moveName,function(event){
    event.preventDefault();
});
```

2、https://static.zplay.cn/wap/ad_canPlay/tilesHop/normal2/plat/TH_normal2_WSH_adwords_cn.html

解析: 同上，但换了主题、皮肤，该主题用css3动画实现。

3、https://static.zplay.cn/wap/ad_canPlay/tilesHop/c4/plat/Th_sf_4_adwords_cn.html

解析: 实现引擎为create.js，同事实现。

![image](https://github.com/WckY/Responsive-h5-game-dictionary/blob/master/%E7%90%83%E7%90%83%E4%BD%A0%E8%B7%B3%E4%B8%80%E8%B7%B3/icon.jpg)
