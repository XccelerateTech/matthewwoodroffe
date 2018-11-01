class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    onMouseDown(coord){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        // this.contextReal.moveTo(this.origX, this.origY);
        // this.contextReal.lineTo(coord[0],coord[1]);
        let dist = Math.sqrt(((coord[0] - this.origX) * 2) + ((coord[1] - this.origY) * 2));
        console.log(dist);
        this.contextReal.arc(this.origX, this.origY, (this.origX, this.origY, coord[0]- this.origX, coord[1] - this.origY), 0, 2*Math.PI);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}