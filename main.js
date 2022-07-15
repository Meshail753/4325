img = "";
nose_x = 0 ;
nose_y = 0 ;
mario_x = 325 ;
mario_y = 325 ;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,300);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modeloaded);
	posenet.on('pose', gotPoses);

	instializeInSetup(mario);


}

function gotPoses(results)
{
	if(results.length > 0 )
	{
		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;
		
	}
}


function modeloaded(){
	console.log("model is loaded.")
}

function draw() {
	game()
	background('#D3D3D3')
	if(nose_x < 300)
	{
       mario_x = mario_x - 1
	}

	if(nose_x > 300)
	{
		mario_x = mario_x + 1
	}

	if(nose_y < 150)
	{
		mario_y = mario_y - 1
	}
	Image(img,morio_x,mario_y, 40,70)
}







