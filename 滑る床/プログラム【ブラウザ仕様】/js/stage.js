//- stage constructor ------------------------------------//
function Stage(){
    'use strict';
    this.chara = new Chara();
    
    this.draw = function(){
        'use strict';
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 15; j++){
                drawField(j * 60, i * 60, j * 60 + 60, i * 60 + 60, state.stage.field[i][j]);
                this.chara.draw();
            }
        }
    }
    
    this.update = function(){
        'use strict';
        switch(state.stage.field[state.stage.chara.y / 60][state.stage.chara.x / 60]){
            case 4:
                if(state.stage.chara.keyL == true){
                    state.stage.chara.x = Math.max(60, state.stage.chara.x - 60);
                    if(state.stage.chara.x / 60 == 1){
                        state.stage.chara.keyL = false;
                    }
                }else if(state.stage.chara.keyR == true){
                    state.stage.chara.x = Math.min(state.stage.chara.x + 60, CANVAS_WIDTH - 120);
                    if(state.stage.chara.x / 60 == 13){
                        state.stage.chara.keyR = false;
                    }
                }else if(state.stage.chara.keyU == true){
                    state.stage.chara.y = Math.max(60, state.stage.chara.y - 60);
                    if(state.stage.chara.y / 60 == 1){
                        state.stage.chara.keyU = false;
                    }
                }else if(state.stage.chara.keyD == true){
                    state.stage.chara.y = Math.min(state.stage.chara.y + 60, CANVAS_HEIGHT - 120);
                    if(state.stage.chara.y / 60 == 8){
                        state.stage.chara.keyD = false;
                    }
                }
                break;
            case 5:
                state.stage.chara.keyL = false;
                state.stage.chara.keyR = false;
                state.stage.chara.keyU = false;
                state.stage.chara.keyD = false;
                break;
        }
        
        //console.log(state.stage.chara.x / 60, state.stage.chara.y / 60);
        //console.log(state.stage.chara.keyL, state.stage.chara.keyR, state.stage.chara.keyU, state.stage.chara.keyD);
    }
}

//- stage01 constructor --------------------------------------------//
function Stage01(){
    'use strict';
    this.chara.x = 13 * 60;
    this.chara.y = 6 * 60;    

    this.field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
        [0, 4, 5, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    
    this.goalDecision = function(){
        'use strict';
        
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fillText("Stage1", CANVAS_WIDTH / 2 - 60, 45);
        
        if(((state.stage.chara.x / 60) == 6) && ((state.stage.chara.y / 60) == 3)){
            state.stage.chara.keyR = false;
        } 
        if(((state.stage.chara.x / 60) == 8) && ((state.stage.chara.y / 60) == 3)){
            state.stage.chara.keyL = false;
        } 
        if(((state.stage.chara.x / 60) == 7) && ((state.stage.chara.y / 60) == 3)){
            if(state.stage.chara.keyU == true){
                state.stage = new Stage02();                
            }
        } 
    }
}

Stage01.prototype = new Stage();


//- stage02 constructor --------------------------------------------//
function Stage02(){
    'use strict';
    
    this.chara.x = 360;
    this.chara.y = 240;
    
    this.field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 0],
        [0, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 5, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 0],
        [0, 5, 4, 4, 4, 4, 5, 4, 4, 4, 5, 5, 5, 4, 0],
        [0, 4, 4, 4, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 0],
        [0, 4, 5, 4, 4, 4, 4, 5, 4, 4, 4, 5, 4, 4, 0],
        [0, 4, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    
    this.goalDecision = function(){
        'use strict';
        
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fillText("Stage2", CANVAS_WIDTH / 2 - 60, 45);
        
        if(((state.stage.chara.x / 60) == 4) && ((state.stage.chara.y / 60) == 2)){
            window.removeEventListener('keydown', state.keyDown);
            state = new Result();
        }
    }
}

Stage02.prototype = new Stage();