nose_x=0;
nose_y=0;
function preload(){
    var clownnose=loadImage("https://i.postimg.cc/PqJDqk2v/Sforclown.png");
}
function setup(){
    canvas=createCanvas(360, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(360, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);
}
function takesnapshot(){
    save("YouWithTheClownNose.png");
}
function draw(){
    image(video, 0, 0, 360, 300);
    image(clownnose, nose_x, nose_y, 30, 30);
}
function modelloaded(){
    console.log("Posenet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}