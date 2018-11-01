// class DrawingPolygonalLasso extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;
//         this.clicks = 0;            
//     }
//     onMouseDown(coord){
//         if(this.clicks == 1) {
//             this.origX = coord[0];
//             this.origY = coord[1];
//         }
//     }
//     onDragging(coord){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.beginPath();
//         this.contextDraft.moveTo(this.origX, this.origY);
//         this.contextDraft.lineTo(coord[0],coord[1]);
//         this.contextDraft.stroke();
//     }
//     onMouseMove(){}
//     onMouseUp(coord){
//         // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         // // this.contextDraft.lineTo(this.origX, this.origY);
//         // this.contextReal.beginPath();
//         // this.contextReal.moveTo(this.origX, this.origY);
//         this.contextReal.lineTo(coord[0],coord[1]);
//         this.contextReal.stroke();
//         let val;
//         $( "#canvas-draft" ).dblclick(function(e) {
//             val = true;
//         });

//         if (val) {
//             this.contextReal.closePath(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
//         }
    
//     }
//     onMouseLeave(){}
//     onMouseEnter(){}
// }


// class DrawingPolygonalLasso extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;      
//         this.clicks = 0;      
//     }
//     onMouseDown(coord){

//         let lastCoordsX;
//         let lastCoordsY;
                
//         if(this.clicks == 0) {
//             let startCoordsX = coord[0];
//             let startCoordsY = coord[1];
//         }
//         this.origX = coord[0];
//         this.origY = coord[1];

//         lastCoordsX = coord[0];
//         lastCoordsY = coord[1];

//         // if (lastCoordsX != coord[0] && lastCoordsY != coord[1]) {
            
//         // }
 
//         // console.log(`clicks = ${clicks}`);

//     }
//     onDragging(){}
//     onMouseMove(coord){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.beginPath();
//         this.contextDraft.moveTo(this.origX, this.origY);
//         this.contextDraft.lineTo(coord[0],coord[1]);
//         this.contextDraft.stroke();
//     }
//     onMouseUp(){
//         if (this.clicks == 1) {
//             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//             this.contextReal.beginPath();
//             this.contextReal.moveTo(lastCoordsX, lastCoordsY);
//             this.contextReal.lineTo(coord[0],coord[1]);
//             this.contextReal.stroke();   
//         }
//         this.clicks = 0;
//     }
//     onMouseLeave(){}
//     onMouseEnter(){}
// }

class DrawingPolygonalLasso extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.context = contextReal; 
        this.contextDraft=contextDraft;
        this.a=0;
        this.b=0;
        this.started=false;
        this.arr=[];
    }
    
    onMouseDown(coord,event){

        this.a=coord[0];
        this.b=coord[1];     

        if(this.started==false){
            this.context.beginPath();
            this.context.moveTo(coord[0],coord[1]);
            this.arr.push(coord[0]);
            this.arr.push(coord[1])
        }
        console.log(arr);
    }
    onDragging(){}

    onMouseMove(coord,event){
        if(this.started==true){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.a,this.b);
            this.contextDraft.lineTo(coord[0],coord[1]);       
            this.contextDraft.closePath();
            this.contextDraft.stroke();
        }
    }
    onMouseUp(coord,event){
        if(this.started==false){   
            this.started=true;
        } else {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            //check if line back to original point
            var x=this.arr.length-2;
            var y=this.arr.length-1;
            if(coord[0]>=(this.arr[x]-5)&&coord[0]<=(this.arr[x]+5)){
                if(coord[1]>=(this.arr[y]-5)&&coord[1]<=(this.arr[y]+5)){
                this.started=false
                this.context.lineTo(coord[0],coord[1]);
                this.context.closePath();
                this.context.stroke(); 
                }
            }else{
                this.context.lineTo(coord[0],coord[1]);
                this.context.stroke(); 
            }
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}