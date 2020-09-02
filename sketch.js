var start;
var bg;
var submit;
function preload(){
bg=loadImage("images/bg.jpg");

}
function setup()
{
    createCanvas(displayWidth-350, displayHeight);

     start= new Start();
}
function draw()
{
    background(bg);
    start.display();
}