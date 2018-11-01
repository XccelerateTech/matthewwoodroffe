$(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    function drawRec(element, color, start, dimension) {
        element.fillStyle = color;
        element.fillRect(start[0], start[1], dimension[0], dimension[1]);
    }

    drawRec(ctx, 'green', [10,10], [100,100]);
    
});