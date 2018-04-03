
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));

        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }
        // // 即时动作
        // this.sprites[0].runAction(cc.place(this.sprites[0].x+50,this.sprites[0].y));
        //     //翻转
        // this.sprites[1].runAction(cc.flipX(true));
        // this.sprites[1].runAction(cc.flipY(true));
        //     //隐藏
        // this.sprites[2].runAction(cc.hide());
        //     //回调
        // this.sprites[2].runAction(cc.callFunc(function(){
        //     this.sprites[2].runAction(cc.show());
        // },this));

        // //间隔动作
        // var action1 = cc.moveBy(5,200,0);//时间，位置xy。
        // this.sprites[0].runAction(action1);
        //
        // var action2=cc.moveTo(5,400,300);//绝对位置
        // this.sprites[1].runAction(action2);
        //
        // var action3=cc.jumpBy(5,cc.p(300,0),200,10);//时间，位置，跳的高度，跳的次数
        // this.sprites[2].runAction(action3);

        //旋转
        // var action4=cc.rotateBy(5,90,0);//时间，左右，前后
        // this.sprites[2].runAction(action4);

        //暂停
        // var node_1_MenuItem,node_2_MenuItem;
        // var isPaused = false;
        //
        // node_1_MenuItem=new cc.MenuItemFont("Node1",function(){
        //     if(!isPaused){
        //         this.sprites[0].pause();
        //         isPaused=!isPaused;
        //     }else{
        //         this.sprites[0].resume();
        //         isPaused=!isPaused;
        //     }
        // },this);
        // //停止
        // node_2_MenuItem=new cc.MenuItemFont("Node2",function () {
        //     this.sprites[1].stopAllActions();
        // },this)
        //
        // var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        // menu.y=size.height*0.5;
        // menu.alignItemsHorizontallyWithPadding(50);
        // this.addChild(menu);

        //闪烁
        // this.sprites[0].runAction(cc.blink(20.0,10));
        // var timer = new cc.ProgressTimer(this.sprites[1]);
        // timer.x = this.sprites[1].x+100;
        // timer.y = this.sprites[1].y;
        // this.addChild(timer);

        //组合动画
        var mAction = cc.moveBy(3,200,0);
        // var rAction = cc.rotateBy(3,90);//旋转
        var rAction = cc.delayTime(2);//延迟2s
        var scaleAction = cc.scaleTo(3,0.5);
        var sAction = cc.sequence(mAction,rAction,scaleAction);
        this.sprites[0].runAction(sAction);
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

