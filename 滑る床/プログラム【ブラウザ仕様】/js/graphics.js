// draw rect ----------------------------------------------//
function drawRect(x1, y1, x2, y2, color){
    'use strict';
    switch(color){
        case "BLACK":
            ctx.fillStyle = "rgb(0, 0, 0)";
            break;
        case "WHITE":
            ctx.fillStyle = "rgb(255, 255, 255)";
            break;
        case "RED":
            ctx.fillStyle = "rgb(255, 0, 0)";
            break;
        case "GREEN":
            ctx.fillStyle = "rgb(0, 255, 0)";
            break;
        case "BLUE":
            ctx.fillStyle = "rgb(0, 0, 255)";
            break;
    }
    ctx.fillRect(x1, y1, x2, y2);
}

//- drawField function -------------------------------------------//
function drawField(x1, y1, x2, y2, color){
    'use strict';
    switch(color){
        case 0:
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillRect(x1, y1, x2, y2);
            break;
        case 1:
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillRect(x1, y1, x2, y2);
            break;
        case 2:
            ctx.drawImage(img[0], x1, y1);
            break;
        case 3:
            ctx.drawImage(img[3], x1, y1);
            break;
        case 4:
            ctx.drawImage(img[1], x1, y1);
            break;
        case 5:
            ctx.drawImage(img[2], x1, y1);
            break;
    }
}
