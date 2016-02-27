//- Game constructor -------------------------------------//
function Game(){
    'use strict';
    
    // inisialize evet listener
    window.addEventListener('keydown', this.keyDown);
    
    // inisialize timer
    clearInterval(timer);
    timer = setInterval(this.loop, 50);
    
    // inisialize stage
    this.stage = new Stage01();
}

//- loop method ------------------------------------------------------------------------//
Game.prototype.loop = function(){
    'use strict';
    state.stage.draw();
    state.stage.update();
    state.stage.goalDecision();
}

//- keyDown method ---------------------------------------------------------------------//
Game.prototype.keyDown = function(e){
    'use strict';
    //console.log(e.keyCode);
    switch(e.keyCode){
        case 13:
            //window.removeEventListener('keydown', state.keyDown);
            //state = new Result();
            break;
        case 32:
            //state.stage = new Stage02();
            break;
        case 37:
            if((state.stage.field[state.stage.chara.y / 60][state.stage.chara.x / 60] != 4) || (state.stage.chara.x / 60 == 1) || (state.stage.chara.y / 60 == 1) || (state.stage.chara.y / 60 == 8)){
                state.stage.chara.x = Math.max(60, state.stage.chara.x - 60);
                state.stage.chara.keyL = true;
            }
            break;
        case 39:
           if((state.stage.field[state.stage.chara.y / 60][state.stage.chara.x / 60] != 4) || (state.stage.chara.x / 60 == 13) || (state.stage.chara.y / 60 == 1) || (state.stage.chara.y / 60 == 8)){
                state.stage.chara.x = Math.min(state.stage.chara.x + 60, CANVAS_WIDTH - 120);
                state.stage.chara.keyR = true;
            }
            break;
        case 38:
           if((state.stage.field[state.stage.chara.y / 60][state.stage.chara.x / 60] != 4) || (state.stage.chara.x / 60 == 1) || (state.stage.chara.x / 60 == 13) || (state.stage.chara.y / 60 == 1)){
                state.stage.chara.y = Math.max(60, state.stage.chara.y - 60);
                state.stage.chara.keyU = true;
            }
            break;
        case 40:
           if((state.stage.field[state.stage.chara.y / 60][state.stage.chara.x / 60] != 4) || (state.stage.chara.x / 60 == 1) || (state.stage.chara.x / 60 == 13) || (state.stage.chara.y / 60 == 8)){
                state.stage.chara.y = Math.min(state.stage.chara.y + 60, CANVAS_HEIGHT - 120);
                state.stage.chara.keyD = true;
            }
            break;
    }
}
