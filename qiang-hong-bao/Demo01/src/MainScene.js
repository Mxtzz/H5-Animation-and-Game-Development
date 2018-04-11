var MainLayer = cc.Layer.extend({
    hand:null,//手
    timeCount:10,//时间
    timeLabel:null,//
    hbArr:[],//红包组数
    score:0,//分数
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        // 1.添加背景
        this.addBg(size);

        // 2.添加倒计时图标
        this.addCountDown(size);

        // 3.添加倒计时
        this.schedule(this.countDownFun,1);

        // 4.添加手节点
        this.addHand(size);

        // 5.事件监听
        this.addTouchListener();

        //6.红包
        this.addHongbao(size);

        //7.红包下落
        this.scheduleUpdate();

        return true;

    },
    // 背景
    addBg:function(size){
        var bg = new cc.Sprite(res.Bg_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
    },
    // 倒计时图标
    addCountDown:function(size){
        var countDown = new cc.Sprite(res.CountDown_png);
        countDown.setPosition(size.width*0.7,size.height-countDown.getBoundingBox().height);
        this.addChild(countDown);

        //倒计时内容
        this.timeLabel=new cc.LabelTTF("","",size.width*0.1);
        this.timeLabel.setPosition(countDown.x+countDown.getBoundingBox().width*0.8,countDown.y)
        this.timeLabel.setString(10);
        this.timeLabel.setColor(cc.color(200,100,100));
        this.addChild(this.timeLabel);
    },

    // 倒计时
    countDownFun:function(){
        if(this.timeCount<1){
            cc.director.runScene(new OverScene);
        }else{
            this.timeCount-=1;
            this.timeLabel.setString(this.timeCount);
        }
    },
    //手动画
    addHand:function(size){
        this.hand = new cc.Sprite(res.Hand_1_png);
        this.hand.setPosition(size.width*0.5,this.hand.getBoundingBox().height*0.5);
        this.addChild(this.hand);

        var animation=new cc.Animation();
        for(var i=1;i<2;i++){
            var frameName=res["Hand_"+i+"_png"];
            animation.addSpriteFrameWithFile(frameName);
        }

        animation.setDelayPerUnit(0.2);
        animation.setRestoreOriginalFrame(true);
        var animate = cc.animate(animation);
        this.hand.runAction(animate.repeatForever());
    },

    //事件监听
    addTouchListener:function(){
        var that=this;
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                return true;
            },
            onTouchMoved:function(touch,event){
                var delta = touch.getDelta();
                that.hand.setPositionX(that.hand.x+delta.x);
            }
        },this)
    },

    //红包
    addHongbao:function(size){
        for(var i=0;i<100;i++){
            var hb = new cc.Sprite(res.Hongbao_png);
            hb.setPosition(Math.random()*size.width,(Math.random()*i+1)*size.height);
            hb.runAction(cc.repeatForever(cc.rotateBy(Math.random()*5,360)));
            this.addChild(hb);
            this.hbArr.push(hb);
        }
    },

    //定时器
    update:function(){
        for(var k in this.hbArr){
            this.hbArr[k].y-=10;
        }
        for(var i=0;i<this.hbArr.length;i++){
            if(cc.rectContainsPoint(this.hbArr[i].getBoundingBox(),this.hand.getPosition())){
                this.hbArr[i].removeFromParent();
                this.hbArr.splice(i,1);
                this.score++;
            }
        }
    }

});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});
