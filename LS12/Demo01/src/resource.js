var res = {
    HelloWorld_png : "res/HelloWorld.png",

    Yellow_png:"res/Yellow.png",
    Red_png:"res/Red.png",
    Open_png:"res/CloseNormal.png",
    Close_png:"res/CloseSelected.png",
    music_off_normal:"res/music-off-normal.png",
    music_on_normal:"res/music-on-normal.png",
    music_off_selected:"res/music-off-selected.png",
    music_on_selected:"res/music-on-selected.png",

    click_music:"res/click.mp3",
    bg_music:"res/background.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
