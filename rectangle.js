class rectangle{
    constructor(height,breadth){
     this.height=height;
     this.breadth=breadth;
    }
    

}
const myplot = new rectangle(56,34);
function areaof(){

    var area= myplot.height*myplot.breadth;
    console.log(area);
}

areaof();