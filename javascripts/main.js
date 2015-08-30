console.log("this ist for js")

var speed = 3000 
var img= new Array()
var current = 0

img[0] = new Image(); img[0].src = "images/1.jpg";	
img[1] = new Image(); img[1].src = "images/2.jpg";
img[2] = new Image(); img[2].src = "images/3.jpg";



function start() 
{
current++
if(current >=img.length) current = 0
document.imgs.src = img[current].src
setTimeout("start()",speed);
}