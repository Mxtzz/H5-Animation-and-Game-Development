var OverLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var bg = new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*.5,size.height*.5);
        this.addChild(bg);

        return true;
    }
});

var OverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});
