
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));

        cc.audioEngine.playMusic(res.bg_music,true);
        var onItem = new cc.MenuItemImage(res.music_on_normal,res.music_on_selected,function(){
            cc.log("On");
        },this);
        var offItem = new cc.MenuItemImage(res.music_off_normal,res.music_off_selected,function(){
            cc.log("Off");
        },this);
        var toggleMenuItem = new cc.MenuItemToggle(onItem,offItem,function(){
            if(toggleMenuItem.getSelectedIndex()==0){
                ls.setItem("isMusicOn","YES");
                cc.audioEngine.playMusic(res.bg_music,true);
            }else {
                ls.setItem("isMusicOn","NO");
                cc.audioEngine.stopMusic();
            }
        },this);

        var menu = new cc.Menu(StartItemMenu)

        // 控制按钮
        var recordItem = new cc.MenuItemFont("记录",function(){
            var ls = cc.sys.localStorage;
            ls.setItem("currentScore",this.score);
            if(this.score > ls.getItem("bestScore")){
                ls.setItem("bestScore",this.score);
            }
            cc.director.runScene(new SecondScene());
        })

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

