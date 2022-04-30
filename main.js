function preload(){

}

function setup(){
    canvas=createcanvas(300,300);
    canvas.centre;
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function draw(){
    image(video,0,0,300,300);
    // fill(255,0,0);
    // stroke(255,0,0);
     //circle(nose_x,nose_y,20);
     image( clown_nose,nose_x-15,nose_y-15,30,30);
 
 
 }
 


function take_snapshot(){
    save('myImageFilter.jpg')
}

