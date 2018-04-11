var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        // var start = new cc.MenuItemFont("开始",function () {
        //     cc.director.runScene(new StartScene());
        // },this);
        // var menu1 = new cc.Menu(start);
        // menu1.setPosition(0,0);
        // start.setPosition(size.width*0.5,size.height*0.7);
        // this.addChild(menu1);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        // var layer = new StartLayer();
        var layer = new MainLayer();

        this.addChild(layer);
    }
});

