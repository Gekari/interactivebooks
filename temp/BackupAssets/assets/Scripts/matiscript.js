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
    },

    // use this for initialization
    onLoad: function () {

    },
    
    
    
    
    
    
    
        
        onMatiClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("Listooo si esss");
     }              
    cc.log("Mati clic");
    this.audioSource.play();
    var anim = this.head_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    }
    
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
