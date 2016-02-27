window.addEventListener('load', init);

//- constant -----------------------------------------------------------------------------//
var CANVAS_WIDTH = 900, CANVAS_HEIGHT = 600;
//- global variables --------------------------------------------------------------------//
var ctx;
var state;
var timer;
var img = [];
//- init function ------------------------------------------------------------------------//
function init(){
    'use strict';
    
    // inisialize canvas
    var canvas = document.getElementById('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    
    // inisialize ctx
    ctx = canvas.getContext('2d');
    
    // inisialize state
    state = new Title();
    
    // inisialize img
    for(var i = 0; i < 4; i++){
        img[i] = new Image();
        img[i].src = "img/img0" + i + ".png";
    }
}