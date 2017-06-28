require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ScenesScript1":[function(require,module,exports){
"use strict";
cc._RF.push(module, '560efOIaE9H/4zTUIxfY4Dm', 'ScenesScript1');
// Scripts/ScenesScript1.js

"use strict";

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
            default: null
        },

        audioSamba: {
            type: cc.AudioSource,
            default: null

        },

        audioXavi: {
            type: cc.AudioSource,
            default: null

        },

        audioPaco: {
            type: cc.AudioSource,
            default: null
        },

        audioPepe: {
            type: cc.AudioSource,
            default: null
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myCanvas.opacity = 0;
        this.myCanvas.color = new cc.Color(0, 0, 0);
        this.myCanvas.runAction(cc.fadeIn(1.0));
    },

    onButtonClick: function onButtonClick() {
        //cc.director.loadScene('Pagina2');


        this.myCanvas.runAction(cc.sequence(cc.fadeOut(2.0), cc.callFunc(function () {
            cc.director.loadScene('Pagina2');
        })));
    },

    onBetoClick: function onBetoClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

            cc.log("Listooo si esss");
        }
        cc.log("Beto clic");
        this.audioSource.play();
        var anim = this.head_button.getComponent(cc.Animation);

        // if no animation is designated to play and defaultClip is set up, play defaultClip animation
        anim.play();
    },

    onMatiClick: function onMatiClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

            cc.log("Listooo si esss");
        }
        cc.log("Mati clic");
        this.audioMati.play();
        var anim = this.mati_button.getComponent(cc.Animation);

        // if no animation is designated to play and defaultClip is set up, play defaultClip animation
        anim.play();
    },

    onSambaClick: function onSambaClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

            cc.log("Suena samba suenaaa");
        }
        cc.log("Samba click!!");
        this.audioSamba.play();
        var anim = this.samba_button.getComponent(cc.Animation);

        // if no animation is designated to play and defaultClip is set up, play defaultClip animation
        anim.play();
    },

    onPacoClick: function onPacoClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

            cc.log("PACOOOU");
        }
        cc.log("PACOOOOOOO click!!");

        this.audioPaco.play();
        var anim = this.paco_button.getComponent(cc.Animation);

        // if no animation is designated to play and defaultClip is set up, play defaultClip animation
        anim.play();
    },

    onPepeClick: function onPepeClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

            cc.log("OOOK OOOK");
        }
        cc.log("PEPESIO click!!");

        this.audioPepe.play();
        var anim = this.pepe_button.getComponent(cc.Animation);

        // if no animation is designated to play and defaultClip is set up, play defaultClip animation
        anim.play();
    },

    onXaviClick: function onXaviClick() {
        //cc.director.loadScene('Pagina2');
        this.head_button.tag = 100;
        if (this.head_button.tag == 100) {

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

cc._RF.pop();
},{}],"ScenesScript2":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6a676g54OFDsbYBQLARNhP4', 'ScenesScript2');
// Scripts/ScenesScript2.js

'use strict';

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
    onLoad: function onLoad() {
        this.myCanvas.opacity = 0;
        //this.myCanvas.color = new cc.Color(255, 255, 255);
        this.myCanvas.runAction(cc.fadeIn(1.0));
    },

    onButtonClick: function onButtonClick() {
        //cc.director.loadScene('Pagina2');

        this.myCanvas.runAction(cc.moveTo(2, 64, -200));
        this.myCanvas.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function () {
            cc.director.loadScene('Pagina1');
        })));

        //cc.director.runScene(new cc.TransitionFade(1.0, new Pagina2()));
        //new cc.TransitionFade(1.0, new PausedLayer())
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}]},{},["ScenesScript1","ScenesScript2"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NjZW5lc1NjcmlwdDEuanMiLCJhc3NldHMvU2NyaXB0cy9TY2VuZXNTY3JpcHQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNJO0FBQ0E7QUFGUzs7QUFLYjtBQUNJO0FBQ0E7QUFGTzs7QUFLWDtBQUNJO0FBQ0E7O0FBRk87O0FBTVg7QUFDSTtBQUNBOztBQUZNOztBQU1WO0FBQ0k7QUFDQTtBQUZNOztBQUtWO0FBQ0k7QUFDQTtBQUZNOztBQTlDRjs7QUF1RFo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdDOztBQUVEO0FBQ2dCOzs7QUFHaEI7QUFHUTtBQUNIO0FBRUo7O0FBR0E7QUFDZTtBQUNkO0FBQ0Q7O0FBRUk7QUFDSDtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBSUc7QUFDWTtBQUNkO0FBQ0Q7O0FBRUk7QUFDSDtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBSU87QUFDUTtBQUNkO0FBQ0Q7O0FBRUk7QUFDSDtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBSUQ7QUFDZ0I7QUFDZDtBQUNEOztBQUVJO0FBQ0g7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQzs7QUFFQTtBQUNlO0FBQ2Q7QUFDRDs7QUFFSTtBQUNIO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBRVc7QUFDSTtBQUNkO0FBQ0Q7O0FBRUk7QUFDSDtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBS0Q7QUFDQTs7QUFFQTtBQXhMSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaUTs7QUFlWjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBR0M7O0FBRUQ7QUFDZ0I7O0FBRVg7QUFDTDtBQUdRO0FBQ0g7O0FBR0Q7QUFDQTtBQUNIOztBQUVEO0FBQ0E7O0FBRUE7QUE3Q0siLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBoZWFkX2J1dHRvbjogY2MuQnV0dG9uLFxuICAgICAgICBtYXRpX2J1dHRvbjogY2MuQnV0dG9uLFxuICAgICAgICBzYW1iYV9idXR0b246IGNjLkJ1dHRvbixcbiAgICAgICAgcGFjb19idXR0b246IGNjLkJ1dHRvbixcbiAgICAgICAgeGF2aV9idXR0b246IGNjLkJ1dHRvbixcbiAgICAgICAgcGVwZV9idXR0b246IGNjLkJ1dHRvbixcbiAgICAgICAgbXlDYW52YXM6IGNjLk5vZGUsXG4gICAgICAgIFxuICAgICAgICBhdWRpb1NvdXJjZToge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBhdWRpb01hdGk6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBhdWRpb1NhbWJhOntcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgYXVkaW9YYXZpOntcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgYXVkaW9QYWNvOntcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBhdWRpb1BlcGU6e1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2UsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm15Q2FudmFzLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubXlDYW52YXMuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XG4gICAgdGhpcy5teUNhbnZhcy5ydW5BY3Rpb24oXG4gICAgIGNjLmZhZGVJbigxLjApXG4gICAgKTsgXG4gICAgfSxcbiAgICBcbiAgICBvbkJ1dHRvbkNsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGFnaW5hMicpO1xuXG4gICAgICAgIFxuICAgIHRoaXMubXlDYW52YXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKCBcbiAgICAgICAgY2MuZmFkZU91dCgyLjApLCBcbiAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdQYWdpbmEyJyk7XG4gICAgICAgIH0pXG4gICAgKSk7IFxuICAgIH0sXG4gICAgXG4gICAgXG4gICAgIG9uQmV0b0NsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGFnaW5hMicpO1xuICAgICAgdGhpcy5oZWFkX2J1dHRvbi50YWcgPSAxMDA7XG4gICAgIGlmKHRoaXMuaGVhZF9idXR0b24udGFnID09IDEwMCl7XG4gICAgICAgICBcbiAgICAgICAgIGNjLmxvZyhcIkxpc3Rvb28gc2kgZXNzc1wiKTtcbiAgICAgfSAgICAgICAgICAgICAgXG4gICAgY2MubG9nKFwiQmV0byBjbGljXCIpO1xuICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xuICAgIHZhciBhbmltID0gdGhpcy5oZWFkX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcblxuICAgIC8vIGlmIG5vIGFuaW1hdGlvbiBpcyBkZXNpZ25hdGVkIHRvIHBsYXkgYW5kIGRlZmF1bHRDbGlwIGlzIHNldCB1cCwgcGxheSBkZWZhdWx0Q2xpcCBhbmltYXRpb25cbiAgICBhbmltLnBsYXkoKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICAgICAgb25NYXRpQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdQYWdpbmEyJyk7XG4gICAgICB0aGlzLmhlYWRfYnV0dG9uLnRhZyA9IDEwMDtcbiAgICAgaWYodGhpcy5oZWFkX2J1dHRvbi50YWcgPT0gMTAwKXtcbiAgICAgICAgIFxuICAgICAgICAgY2MubG9nKFwiTGlzdG9vbyBzaSBlc3NzXCIpO1xuICAgICB9ICAgICAgICAgICAgICBcbiAgICBjYy5sb2coXCJNYXRpIGNsaWNcIik7XG4gICAgdGhpcy5hdWRpb01hdGkucGxheSgpO1xuICAgIHZhciBhbmltID0gdGhpcy5tYXRpX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcblxuICAgIC8vIGlmIG5vIGFuaW1hdGlvbiBpcyBkZXNpZ25hdGVkIHRvIHBsYXkgYW5kIGRlZmF1bHRDbGlwIGlzIHNldCB1cCwgcGxheSBkZWZhdWx0Q2xpcCBhbmltYXRpb25cbiAgICBhbmltLnBsYXkoKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgb25TYW1iYUNsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGFnaW5hMicpO1xuICAgICAgdGhpcy5oZWFkX2J1dHRvbi50YWcgPSAxMDA7XG4gICAgIGlmKHRoaXMuaGVhZF9idXR0b24udGFnID09IDEwMCl7XG4gICAgICAgICBcbiAgICAgICAgIGNjLmxvZyhcIlN1ZW5hIHNhbWJhIHN1ZW5hYWFcIik7XG4gICAgIH0gICAgICAgICAgICAgIFxuICAgIGNjLmxvZyhcIlNhbWJhIGNsaWNrISFcIik7XG4gICAgdGhpcy5hdWRpb1NhbWJhLnBsYXkoKTtcbiAgICB2YXIgYW5pbSA9IHRoaXMuc2FtYmFfYnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuXG4gICAgLy8gaWYgbm8gYW5pbWF0aW9uIGlzIGRlc2lnbmF0ZWQgdG8gcGxheSBhbmQgZGVmYXVsdENsaXAgaXMgc2V0IHVwLCBwbGF5IGRlZmF1bHRDbGlwIGFuaW1hdGlvblxuICAgIGFuaW0ucGxheSgpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgXG4gICAgb25QYWNvQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdQYWdpbmEyJyk7XG4gICAgICB0aGlzLmhlYWRfYnV0dG9uLnRhZyA9IDEwMDtcbiAgICAgaWYodGhpcy5oZWFkX2J1dHRvbi50YWcgPT0gMTAwKXtcbiAgICAgICAgIFxuICAgICAgICAgY2MubG9nKFwiUEFDT09PVVwiKTtcbiAgICAgfSAgICAgICAgICAgICAgXG4gICAgY2MubG9nKFwiUEFDT09PT09PTyBjbGljayEhXCIpO1xuXG4gICAgdGhpcy5hdWRpb1BhY28ucGxheSgpO1xuICAgIHZhciBhbmltID0gdGhpcy5wYWNvX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcblxuICAgIC8vIGlmIG5vIGFuaW1hdGlvbiBpcyBkZXNpZ25hdGVkIHRvIHBsYXkgYW5kIGRlZmF1bHRDbGlwIGlzIHNldCB1cCwgcGxheSBkZWZhdWx0Q2xpcCBhbmltYXRpb25cbiAgICBhbmltLnBsYXkoKTtcbiAgICB9LFxuICAgIFxuICAgICBvblBlcGVDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1BhZ2luYTInKTtcbiAgICAgIHRoaXMuaGVhZF9idXR0b24udGFnID0gMTAwO1xuICAgICBpZih0aGlzLmhlYWRfYnV0dG9uLnRhZyA9PSAxMDApe1xuICAgICAgICAgXG4gICAgICAgICBjYy5sb2coXCJPT09LIE9PT0tcIik7XG4gICAgIH0gICAgICAgICAgICAgIFxuICAgIGNjLmxvZyhcIlBFUEVTSU8gY2xpY2shIVwiKTtcblxuICAgIHRoaXMuYXVkaW9QZXBlLnBsYXkoKTtcbiAgICB2YXIgYW5pbSA9IHRoaXMucGVwZV9idXR0b24uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG5cbiAgICAvLyBpZiBubyBhbmltYXRpb24gaXMgZGVzaWduYXRlZCB0byBwbGF5IGFuZCBkZWZhdWx0Q2xpcCBpcyBzZXQgdXAsIHBsYXkgZGVmYXVsdENsaXAgYW5pbWF0aW9uXG4gICAgYW5pbS5wbGF5KCk7XG4gICAgfSxcbiAgICBcbiAgICAgICAgICAgICAgICBvblhhdmlDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1BhZ2luYTInKTtcbiAgICAgIHRoaXMuaGVhZF9idXR0b24udGFnID0gMTAwO1xuICAgICBpZih0aGlzLmhlYWRfYnV0dG9uLnRhZyA9PSAxMDApe1xuICAgICAgICAgXG4gICAgICAgICBjYy5sb2coXCJPSU5LIE9JTktcIik7XG4gICAgIH0gICAgICAgICAgICAgIFxuICAgIGNjLmxvZyhcIlhhdmkgY2xpY2shIVwiKTtcbiAgICB0aGlzLmF1ZGlvWGF2aS5wbGF5KCk7XG4gICAgdmFyIGFuaW0gPSB0aGlzLnhhdmlfYnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuXG4gICAgLy8gaWYgbm8gYW5pbWF0aW9uIGlzIGRlc2lnbmF0ZWQgdG8gcGxheSBhbmQgZGVmYXVsdENsaXAgaXMgc2V0IHVwLCBwbGF5IGRlZmF1bHRDbGlwIGFuaW1hdGlvblxuICAgIGFuaW0ucGxheSgpO1xuICAgIH1cbiAgICBcbiAgICBcbiBcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbiIsImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIGZpcnN0X2J1dHRvbjogY2MuQnV0dG9uLFxuICAgICAgICBteUNhbnZhczogY2MuTm9kZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5teUNhbnZhcy5vcGFjaXR5ID0gMDtcbiAgICAvL3RoaXMubXlDYW52YXMuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdGhpcy5teUNhbnZhcy5ydW5BY3Rpb24oXG4gICAgIGNjLmZhZGVJbigxLjApXG4gICAgKTsgXG4gICAgfSxcbiAgICBcbiAgICBvbkJ1dHRvbkNsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGFnaW5hMicpO1xuXG4gICAgICAgICB0aGlzLm15Q2FudmFzLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMiwgNjQsIC0yMDApKTtcbiAgICB0aGlzLm15Q2FudmFzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSggXG4gICAgICAgIGNjLmZhZGVPdXQoMS4wKSwgXG4gICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUGFnaW5hMScpO1xuICAgICAgICB9KVxuICAgICkpOyBcbiAgICBcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5ydW5TY2VuZShuZXcgY2MuVHJhbnNpdGlvbkZhZGUoMS4wLCBuZXcgUGFnaW5hMigpKSk7XG4gICAgICAgIC8vbmV3IGNjLlRyYW5zaXRpb25GYWRlKDEuMCwgbmV3IFBhdXNlZExheWVyKCkpXG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==