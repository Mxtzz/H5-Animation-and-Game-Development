var MainLayer = cc.Layer.extend({
    arr:[],
    plane:null,
    scoreLabel:null,
    score:0,
    enemy:null,
    speed:4,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //背景
        var bg = new cc.Sprite(res.bg1_jpg);
        bg.x = cc.winSize.width*0.5;
        bg.y = cc.winSize.height*0.5;
        this.addChild(bg);
        this.arr[0] = bg;

        var bg2 = new cc.Sprite(res.bg1_jpg);
        bg2.x = cc.winSize.width*0.5;
        bg2.y = cc.winSize.height*0.5 + bg.getBoundingBox().height;
        this.addChild(bg2);
        this.arr[1] = bg2;

        //飞机
        var p1 = new cc.Sprite(res.p1_png);
        p1.x = cc.winSize.width*0.5;
        p1.y = cc.winSize.height*0.3;
        this.addChild(p1);
        this.plane = p1;

        //敌机1
        var enemy1 = new cc.Sprite(res.p2_png);
        enemy1.setRotation(180);
        enemy1.x = cc.winSize.width*0.3;
        enemy1.y = cc.winSize.height;
        this.addChild(enemy1);
        this.enemy1 = enemy1;

        //敌机2
        var enemy2 = new cc.Sprite(res.p2_png);
        enemy2.setRotation(180);
        enemy2.x = cc.winSize.width*0.7;
        enemy2.y = cc.winSize.height*1.5;
        this.addChild(enemy2);
        this.enemy2 = enemy2;

        this.schedule(this.bgCallBack,0.001);
        this.schedule(this.enemy1Callback,0.001);
        this.schedule(this.enemy2Callback,0.001);

        return true;
    },
    //背景循环
    bgCallBack:function(dt){
        for(var i in this.arr){
            if(this.arr[i].y<-720){
                this.arr[i].y += 2*1440;
            }
            this.arr[i].y-=2;
        }
    },
    //敌机循环
    enemy1Callback: function (dt) {
        if (this.enemy1.y < 0) {
            this.enemy1.y = cc.winSize.height;
            this.enemy1.x = cc.winSize.width * cc.random0To1();
            this.speed += 0.5;
        } else {
            this.enemy1.y -= this.speed;
        }
    },
    enemy2Callback: function (dt) {
        if (this.enemy2.y < 0) {
            this.enemy2.y = cc.winSize.height;
            this.enemy2.x = cc.winSize.width * cc.random0To1();
            this.speed += 1;
        } else {
            this.enemy2.y -= this.speed;
        }
    },

});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new MainLayer();
        this.addChild(layer);
    }
});