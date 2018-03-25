
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    second:0,
    label:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // 玩家1标签
        var labelTTF = new cc.LabelTTF("玩家1："+this.second, "Arial", 60);
        labelTTF.x = 50;
        labelTTF.y = size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);

        // 设置字体
        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.setFontSize(60);

        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);
        this.label = labelTTF;

        return true;
    },
    myTimer:function(){
        this.second+=1;
        this.label.setString('玩家：'+parseInt(this.second));
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

