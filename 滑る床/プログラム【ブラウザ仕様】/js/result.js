//- Result constructor -------------------------------------//
function Result(){
    'use strict';
    window.addEventListener('keydown', this.keyDown);
    clearInterval(timer);
    timer = setInterval(this.loop, 16);
}

Result.prototype.loop = function(){
    'use strict';
    state.draw();
}

Result.prototype.keyDown = function(e){
    'use strict';
    //console.log(e.keyCode);
    switch(e.keyCode){
        case 13:
            window.removeEventListener('keydown', state.keyDown);
            state = new Title();
            //location.reload();
            break;
    }
}

Result.prototype.draw = function(){
    'use strict';
    
    // draw background
    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "BLACK");
    drawRect(100, 150, 170, 50, "RED"); // push Enter bg
    
    // draw text
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.font = "64px 'Comic Sans MS'";
    ctx.fillText("ゲームクリア", CANVAS_WIDTH / 2 - 160, 100);
    
    ctx.font = "32px 'Comic Sans MS'";
    ctx.fillText("push Enter", 105, 185);
    ctx.fillText("→　タイトル画面に移行します", 300, 190);
}