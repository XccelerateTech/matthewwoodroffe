let counter = 0;
let coordEndX;
let coordEndY;
class DrawingTriangle extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    onMouseDown(coord){
        if(counter == 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            counter++;
            console.log(counter);
        } 
        else if(counter == 1) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(coordEndX, coordEndY);
            // if(counter % 2 == 0) {
            this.contextDraft.lineTo(coord[0],coord[1]);
            coordEndX = this.contextDraft.lineTo(coord[0],coord[1]);
            coordEndY = this.contextDraft.lineTo(coord[0],coord[1]);
            // }
            // this.contextDraft.lineTo();
            this.contextDraft.stroke();
            counter++;
        }
        // else if(counter == 2) {
        //     this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        //     this.contextDraft.beginPath();
        //     this.contextDraft.moveTo(this.origX, this.origY);
        //     // if(counter % 2 == 0) {
        //     this.contextDraft.lineTo(coord[0],coord[1]);
        //     coordEndX = this.contextDraft.lineTo(coord[0],coord[1]);
        //     coordEndY = this.contextDraft.lineTo(coord[0],coord[1]);
        //     // }
        //     // this.contextDraft.lineTo();
        //     this.contextDraft.stroke();
        // }
    }
    onDragging(coord,event){

    }
    onMouseMove(coord){        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        // if(counter % 2 == 0) {
        this.contextDraft.lineTo(coord[0],coord[1]);
        coordEndX = this.contextDraft.lineTo(coord[0],coord[1]);
        coordEndY = this.contextDraft.lineTo(coord[0],coord[1]);
        // }
        // this.contextDraft.lineTo();
        this.contextDraft.stroke();
    }
    onMouseUp(coord){
        // let coord2 = coord[0] - this.origX;
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.fillRect(this.origX,this.origY, coord2, coord2);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}