//- Title constructor --------------------------------------//
function Title(){
    'use strict';
    window.addEventListener('keydown', this.keyDown);
    clearInterval(timer);
    this.drawTitle();
}

//- keyDown method ----------------------------------------//
Title.prototype.keyDown = function(e){
    'use strict';
    //console.log(e.keyCode);
    switch(e.keyCode){
        case 72:
            state.drawDiscription();
            break;
        case 13:
            window.removeEventListener('keydown', state.keyDown);
            state = new Game();
            break;
        case 66:
            state.drawTitle();
            break;
    }
}

//- drawTitle method --------------------------------------//
Title.prototype.drawTitle = function(){
    'use strict';
    
    // draw shadow
    ctx.shadowBlur = 4;
    ctx.shadowColor = "gray";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    // draw background
    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "BLACK");
    drawRect(100, 150, 170, 50, "RED"); // push H bg
    drawRect(100, 350, 170, 50, "RED"); // push Enter bg
    
    // draw Text
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.font = "64px 'Comic Sans MS'";
    ctx.fillText("滑る床", CANVAS_WIDTH / 2 - 100, 100);
    
    ctx.font = "32px 'Comic Sans MS'";
    ctx.fillText("push H", 135, 185);
    ctx.fillText("→　説明画面に移行します", 300, 190);
    
    ctx.fillText("push Enter", 105, 385);
    ctx.fillText("→　GAMEを開始します", 300, 390);
    

    
    
}

//- drawDiscription method --------------------------------//
Title.prototype.drawDiscription = function(){
    'use strict';
    
    // draw background 
    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "BLACK");
    drawRect(100, 150, 170, 50, "RED");
    
    // draw Text
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.font = "64px 'Comic Sans MS'";
    ctx.fillText("ゲーム説明", CANVAS_WIDTH / 2 - 180, 100);
    
    ctx.font = "32px 'Comic Sans MS'";
    ctx.fillText("push B", 135, 185);
    ctx.fillText("→　タイトル画面に移行します", 300, 190);
}
