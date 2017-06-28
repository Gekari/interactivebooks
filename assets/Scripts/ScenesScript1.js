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
        head_button: cc.Button,
        mati_button: cc.Button,
        samba_button: cc.Button,
        paco_button: cc.Button,
        xavi_button: cc.Button,
        pepe_button: cc.Button,
        myCanvas: cc.Node,
        
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
        
        audioMati: {
            type: cc.AudioSource,
            default:null
        },
        
        audioSamba:{
            type: cc.AudioSource,
            default:null
        
        },
        
        audioXavi:{
            type: cc.AudioSource,
            default:null
        
        },
        
        audioPaco:{
            type: cc.AudioSource,
            default:null
        },
        
        audioPepe:{
            type: cc.AudioSource,
            default:null
        }
        
        
        
    },

    // use this for initialization
    onLoad: function () {
    this.myCanvas.opacity = 0;
    this.myCanvas.color = new cc.Color(0, 0, 0);
    this.myCanvas.runAction(
     cc.fadeIn(1.0)
    ); 
    },
    
    onButtonClick: function(){
                    //cc.director.loadScene('Pagina2');

        
    this.myCanvas.runAction(cc.sequence( 
        cc.fadeOut(2.0), 
        cc.callFunc(function () {
            cc.director.loadScene('Pagina2');
        })
    )); 
    },
    
    
     onBetoClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("Listooo si esss");
     }              
    cc.log("Beto clic");
    this.audioSource.play();
    var anim = this.head_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    },
    
    
        
        onMatiClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("Listooo si esss");
     }              
    cc.log("Mati clic");
    this.audioMati.play();
    var anim = this.mati_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    },
    
    
    
            onSambaClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("Suena samba suenaaa");
     }              
    cc.log("Samba click!!");
    this.audioSamba.play();
    var anim = this.samba_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    },
    
    
    
    onPacoClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("PACOOOU");
     }              
    cc.log("PACOOOOOOO click!!");

    this.audioPaco.play();
    var anim = this.paco_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    },
    
     onPepeClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("OOOK OOOK");
     }              
    cc.log("PEPESIO click!!");

    this.audioPepe.play();
    var anim = this.pepe_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    },
    
                onXaviClick: function(){
                    //cc.director.loadScene('Pagina2');
      this.head_button.tag = 100;
     if(this.head_button.tag == 100){
         
         cc.log("OINK OINK");
     }              
    cc.log("Xavi click!!");
    this.audioXavi.play();
    var anim = this.xavi_button.getComponent(cc.Animation);

    // if no animation is designated to play and defaultClip is set up, play defaultClip animation
    anim.play();
    }
    
    
 

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
