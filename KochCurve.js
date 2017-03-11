var c = document.getElementById("myCanvas");
var cxt  = c.getContext("2d");

/*科赫曲线函数*/
function Koch(p1,p2,n){

    if(n==0){
        drawLine(p1.x,p1.y,p2.x,p2.y);
        return;
    }

    var p3 = {}, p4={}, p5 = {};
    var d53x,d53y;

    p3.x = (2*p1.x + p2.x) / 3;
    p3.y = (2*p1.y + p2.y) / 3;
    p5.x = (p1.x + 2*p2.x) / 3;
    p5.y = (p1.y + 2*p2.y) / 3;

    d53x = (p2.x - p1.x)/3;
    d53y = (p2.y - p1.y)/3;

    p4.x = p3.x+ d53x* Math.cos(Math.PI/3) +d53y*Math.sin(Math.PI/3);
    p4.y = p3.y- d53x* Math.sin(Math.PI/3) +d53y*Math.cos(Math.PI/3);

    Koch(p1,p3,n-1);
    Koch(p3,p4,n-1);
    Koch(p4,p5,n-1);
    Koch(p5,p2,n-1);
}

function Draw(){
    clearCanvas();
    var n=parseInt(document.getElementById("range").value);  //传入分形次数

    //返回元素的高度和宽度，以像素为单位。
    var osa={x:0,y:c.offsetHeight / 2};
    var osb={x:c.offsetWidth,y:c.offsetHeight / 2};

    Koch(osa, osb, n);
}

/*canvas连线*/
function drawLine(x0,y0,x1,y1){
    cxt.beginPath();
    cxt.strokeStyle ="00ff00";
    //cxt.lineWidth = 2;
    cxt.moveTo(x0,y0);
    cxt.lineTo(x1,y1);
    cxt.stroke();
}

/*清空画布*/
function clearCanvas() {
    cxt.clearRect(0,0,c.width,c.height);
}

/*滑块数字显示*/
function change(){
    var num = document.getElementById("range");
    var location = document.getElementById("show");
    location.value = num.value;
}
