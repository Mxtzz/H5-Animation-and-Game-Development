var StartLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var layer = new cc.LayerColor();

        var size = cc.winSize;

        var label = new cc.LabelTTF("这是开始场景","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转游戏场景",function(){
            // cc.director.runScene(new MainScene());
            // 场景转换方式
            cc.director.runScene(new cc.TransitionMoveInB(1,new MainScene()))
        },this);
        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width*0.5;
        menuItem.y = size.height*0.3;
        this.addChild(menu);

    }

    // onEnter:function(){
    //     this._super();
    //     // console.log(123);
    //
    // },
    // onEnterTransitionDidFinish:function(){
    //     this._super();
    //
    // },
    // onExit:function(){
    //     this._super();
    //
    // },
    // onExitTransitionDidFinish:function(){
    //     this._super();
    //
    // }

});
var BgLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var bglayer1 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(0,-1));
        var bglayer2 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(-1,-1),
            [{p:0,color:cc.color.YELLOW},
                {p:.5,color:new cc.Color(0,0,0,0)},
                {p:1,color:cc.color.BLUE}]);
        // var layer = new cc.LayerColor(cc.color.GREEN);
        this.addChild(bglayer1);
    }
});
var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var bglayer = new BgLayer();
        this.addChild(bglayer);
        var layer = new StartLayer();
        this.addChild(layer);
    }
});