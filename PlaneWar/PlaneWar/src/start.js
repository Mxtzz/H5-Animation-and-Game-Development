var StartLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var startLabel = new cc.LabelTTF("开 始","",50);
        startLabel.setFontFillColor(cc.color.RED);
        startLabel.enableStroke(cc.color.YELLOW,5);

        var startMenuItem = new cc.MenuItemLabel(startLabel, function () {
            cc.director.runScene(new MainScene());
        },this);

        var menu = new cc.Menu(startMenuItem);
        menu.y = size.height*0.5;
        this.addChild(menu);

        var logo = new cc.LabelTTF("飞机大战Demo","",80);
        logo.setFontFillColor(cc.color.RED);
        logo.enableStroke(cc.color.YELLOW,5);
        logo.setPosition(size.width*0.5,size.height*0.7);
        this.addChild(logo);
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new StartLayer();
        this.addChild(layer);
    }
});