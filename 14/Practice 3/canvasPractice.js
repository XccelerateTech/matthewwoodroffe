$(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle= 'red'
    ctx.fillRect(0,100,6,6);

    function drawQuadraticCurve(ctx,start,cp1,end) {
        ctx.setLineDash([]);
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(start[0],start[1]);
        ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
        ctx.stroke();
    }
    function drawLine(ctx,start,end){
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(start[0],start[1]);
        ctx.lineTo(end[0],end[1]);
        ctx.stroke();
    }

    drawLine(ctx,[30,200],[30,50]);
    drawLine(ctx,[170,200],[170,50]);
    drawLine(ctx,[30,150],[170,150]);
    
    drawQuadraticCurve(ctx,[30,50],[100,0],[170,50]);
    
});