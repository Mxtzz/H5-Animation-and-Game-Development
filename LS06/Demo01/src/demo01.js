var StartLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var size = cc.winSize;

        var helloLable = new cc.LabelTTF("Hello World","", 38);
        helloLable.x = size.width/2;
        helloLable.y = size.height/2;
        this.addChild(helloLable);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});