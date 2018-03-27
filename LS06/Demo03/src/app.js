
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var redLayer = new cc.LayerColor(cc.color.RED,100,100);
        redLayer.ignoreAnchor = false;
        redLayer.setAnchorPoint(0.5,0.5);
        // position the label on the center of the screen
        redLayer.x = size.width / 2;
        redLayer.y = size.height;
        // add the label as a child to this layer
        this.redLayer = redLayer;
        this.addChild(this.redLayer);

        // this.scheduleUpdate();
        this.schedule(this.myCallBack,0.05,cc.REPEAT_FOREVER,2);
        return true;

    },
    update:function(dt){
        cc.log(dt);
    },
    speed:0,
    myCallBack:function(){
        // this.redLayer.x+=10;
        // if(this.redLayer.x>500){
        //     this.unschedule(this.myCallBack);
        // }

        this.redLayer.y-=this.speed;
        if(this.redLayer.y<0){
            this.speed = -this.speed;
        }else{
            this.speed+=0.6;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

