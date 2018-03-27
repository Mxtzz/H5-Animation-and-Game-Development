var EndLayer = cc.Layer.extend({
    ctor :function(){
        this._super();
        var size = cc.winSize;

        var menuItem = new cc.MenuItemFont("跳到开始场景",function(){
            cc.director.runScene(new HelloWorldScene());
        },this);
        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width*0.5;
        menuItem.y = size.height*0.3;
        this.addChild(menu);
    }
});

var EndScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new EndLayer();
        this.addChild(layer);
    }
});