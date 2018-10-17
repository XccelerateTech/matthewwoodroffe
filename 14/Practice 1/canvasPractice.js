$(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    function drawLine(element, start, end) {
        element.beginPath();
        element.moveTo(start[0], start[1]);
        element.lineTo(end[0], end[1]);
        element.stroke();
    }

    let line1 = drawLine(ctx, [20,20], [100,100]);
    let line2 = drawLine(ctx, [100,20], [20,100]);

    line1;
    line2;
    
});