var OverLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var bg = new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*.5,size.height*.5);
        this.addChild(bg);

        //结束框
        var kuang = new cc.Sprite(res.JieShuKuang);
        kuang.setPosition(size.width*.5,size.height*.5);
        this.addChild(kuang);

        //读取并展示分数
        var scoreLabel = new cc.LabelTTF("","",size.width/12);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.height*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);

        // var score = cc.sys.localStorage.getItem("currentScore");
        // scoreLabel.setString(score);
        // scoreLabel.scale=0;
        // var scaleAction=cc.scaleTo(0.5,1.0).easing(())


        var zailaiMenuItem = new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new MainScene);
        });
        zailaiMenuItem.x=size.width/2;
        zailaiMenuItem.y=size.height*0.25;
        // this.addChild(startMenuItem);

        var menu = new cc.Menu(zailaiMenuItem);
        menu.x=0;
        menu.y=0;
        this.addChild(menu);
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
