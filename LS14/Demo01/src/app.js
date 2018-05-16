
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        var tileMap = new cc.TMXTiledMap(res.MyTmx_tmx);
        this.addChild(tileMap);

        // var mapSize = tileMap.getMapSize();
        // var tileSize = tileMap.getTileSize();

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

