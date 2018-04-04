
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    sp:[],
    runner:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.BLACK));

        var yelloSprite = new cc.Sprite(res.Yellow_png);
        yelloSprite.x = size.width*0.4;
        yelloSprite.y = size.height*0.5;
        yelloSprite.tag = 100;
        this.addChild(yelloSprite);

        var redSprite = new cc.Sprite(res.Red_png);
        redSprite.x = size.width*0.6;
        redSprite.y = size.height*0.5;
        yelloSprite.tag = 99;
        this.addChild(redSprite);
        redSprite.setRotation(45);

        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouch:true,
            onTouchBegan:function(touch,event){
                var location = touch.getLocation();
                var target = event.getCurrentTarget();
                if(cc.rectContainsPoint(target.getBoundingBox(),location)){
                    // label.setString("点击到"+target.tag+"矩形！");
                    return true;
                }
                cc.log("onTouchBegan");
                return false;
            },
            onTouchMoved:function(touch,event){
                var delta = touch.getDelta();
                var target = event.getCurrentTarget();
                target.x += delta.x;
                target.y += delta.y;
                cc.log("onTouchMoved");
                return true;
            }
        });
        // cc.eventManager.addListener(listener,this);
        cc.eventManager.addListener(listener,redSprite);
        cc.eventManager.addListener(listener.clone(),yelloSprite);

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

