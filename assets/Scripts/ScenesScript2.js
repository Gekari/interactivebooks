cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        first_button: cc.Button,
        myCanvas: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this.myCanvas.opacity = 0;
    //this.myCanvas.color = new cc.Color(255, 255, 255);
    this.myCanvas.runAction(
     cc.fadeIn(1.0)
    ); 
    },
    
    onButtonClick: function(){
                    //cc.director.loadScene('Pagina2');

         this.myCanvas.runAction(cc.moveTo(2, 64, -200));
    this.myCanvas.runAction(cc.sequence( 
        cc.fadeOut(1.0), 
        cc.callFunc(function () {
            cc.director.loadScene('Pagina1');
        })
    )); 
    
        //cc.director.runScene(new cc.TransitionFade(1.0, new Pagina2()));
        //new cc.TransitionFade(1.0, new PausedLayer())
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
