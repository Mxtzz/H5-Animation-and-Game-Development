var HelloWorldLayer = cc.Layer.extend({
    setScene:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.setScene = new SetScene();
        var btn = new cc.MenuItemFont("设置",function () {
            cc.director.pushScene(this.setScene);
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width/2,size.height/2);
        this.addChild(menu);


        var start = new cc.MenuItemFont("开始",function () {
            cc.director.runScene(new StartScene());
        },this);
        var menu1 = new cc.Menu(start);
        menu1.setPosition(0,0);
        start.setPosition(size.width*0.5,size.height*0.7);
        this.addChild(menu1);

        return true;
    }
});
var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
var SetLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.RED));
        var btn = new cc.MenuItemFont("返回",function () {
            cc.director.popScene();
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width/2,size.height/2);
        this.addChild(menu);
        return true;
    }
});
// var SetScene = cc.Scene.extend({
//     ctor:function () {
//         this._super();
//         cc.log("设置场景：ctor");
//         var setLayer = new SetLayer();
//         this.addChild(setLayer);
//     },
//     onEnter:function () {
//         this._super();
//         cc.log("设置场景：onEnter");
//     },
//     onExit:function () {
//         this._super();
//         cc.log("设置场景：onExit");
//     }
// });

