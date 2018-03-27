var MainLayer = cc.Layer.extend({
    ctor :function(){
        this._super();

        var size = cc.winSize;

        //背景
        var bg = new cc.LayerColor(cc.color.RED);
        this.addChild(bg);

        var label = new cc.LabelTTF("这是游戏场景","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转结束场景",function(){
            cc.director.runScene(new EndScene());
        },this);
        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width*0.5;
        menuItem.y = size.height*0.3;
        this.addChild(menu);
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
   }
});