
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    sp:[],
    runner:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));

        sp = new cc.Sprite(res["sp_animation_"+1]);
        sp.setPosition(cc.p(size.width*0.2,size.height*0.5));
        this.addChild(sp);

        var animation = new cc.Animation();
        for(var i=1;i<6;i++){
            var frameName = res["Pao_" + i + "_png"];
            animation.addSpriteFrameWithFile(frameName);
        }
        animation.setDelayPerUnit(1.0/20);
        animation.setRestoreOriginalFrame(true);
        var animateAction = cc.animate(animation);
        sp.runAction(cc.repeatForever(animateAction));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

