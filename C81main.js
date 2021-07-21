var canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener('mousedown',md);
function md(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
circle(x,y);
}
function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();    
}