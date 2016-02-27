//- Chara constructor -----------------------------------------------------------//
function Chara(){
    'use strict';
    this.x = 13 * 60;
    this.y = 6 * 60;
    this.w = 60;
    this.h = 60;
    
    this.keyL = false;
    this.keyR = false;
    this.keyU = false;
    this.keyD = false;
}

Chara.prototype.draw = function(){
    'use strict';
    //drawRect(this.x, this.y, this.w, this.h, "GREEN");
    ctx.drawImage(img[3], this.x, this.y);
}

