function preload(){

}
function setup(){
canvas=createCanvas(500, 500);
canvas.position(200,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
    image(video,50,50,400,400);
    stroke(0,255,0);
    fill(0,255,0);
    rect(40,25,430,20);
    rect(40,455,430,20);
    rect(25,25,20,430);
    rect(455,25,20,430);
    stroke(255,0,0);
    fill(255,0,0);
    circle(35,35,50);
    circle(465,35,50);
    circle(465,465,50);
    circle(35,465,50);
    tint(tint_color);
}

function take_snapshot(){
    save("Filter_selfie.jpg");
}
function filter_tint(){
    tint_color=document.getElementById("tint_color").value;
}
