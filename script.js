let w = window.innerWidth;
let h = window.innerHeight;
//declare an object
let player;
let speed = 15;
let ringSpeed;
let hit;
let lives;
let rings;
let evilSpeed = 25;
let mc;
let bg;
let bad_thing;
let sonic_spritesheet;
let sonic;
let gifRun;
let gifJump;
let angle;
let ringGif;
let evilBeamGif;
let crushYouGif;
let coolEarthBackground;
let screen = 0;
let init = false;
let buttons;
let bgm;
let ringBling;
let eggmanrobot;
let eggmanrobot_damaged;
let asteroidImage;

window.addEventListener('keydown', (e) => {  
    e.preventDefault();  
  
});


function preload(){
	// sonic_spritesheet = loadSpriteSheet("https://demyanov.dev/sites/default/files/images/js-animation/sonic3_spritesheet_example.png", 114, 120, 21);
		bg = loadImage("https://64.media.tumblr.com/3ad211a039800c353b978f456b378da6/tumblr_oouv8oKQyG1s9fn3ko1_500.gif");
	bad_thing = loadImage("https://static.wikia.nocookie.net/sonic/images/7/7c/SuperMechaSonic.gif/");
	ringGif = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13f110a9-d6e3-49f9-b274-dadaeda17152/de6f71s-6fc0d454-44aa-48b2-9a37-6dac8c06915a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzZjExMGE5LWQ2ZTMtNDlmOS1iMjc0LWRhZGFlZGExNzE1MlwvZGU2Zjcxcy02ZmMwZDQ1NC00NGFhLTQ4YjItOWEzNy02ZGFjOGMwNjkxNWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tn8L9JbE0ZHKO2iarRkRXXWZ7a6c4VZl---SJ81q7YY");
	evilBeamGif = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26e16ffb-2f88-4caf-8f65-6e35f0e78177/d74kefa-d3488cf5-a9d7-4e9d-9f57-7f9f19c708d8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2ZTE2ZmZiLTJmODgtNGNhZi04ZjY1LTZlMzVmMGU3ODE3N1wvZDc0a2VmYS1kMzQ4OGNmNS1hOWQ3LTRlOWQtOWY1Ny03ZjlmMTljNzA4ZDguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8apZLRag1zPQBsjw_NfUnaIv_ARTsb_chyY_8ZwszoU");	
	crushYouGif = loadImage("https://c.tenor.com/jiPWx9wnEeUAAAAC/mecha-sonic.gif")
	transformGif = loadImage("https://thumbs.gfycat.com/EnviousWelcomeFlies-max-1mb.gif");
	gifRun = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee3b0f1a-e6b7-4d10-b5bf-62ebd2637b7a/dej3qlf-f8e13033-8ba7-46e5-855b-9aebc7229893.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlM2IwZjFhLWU2YjctNGQxMC1iNWJmLTYyZWJkMjYzN2I3YVwvZGVqM3FsZi1mOGUxMzAzMy04YmE3LTQ2ZTUtODU1Yi05YWViYzcyMjk4OTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CFUzndt0E_HAjqqkDx5PwAu-vWJGZDIvhJcOag3jQ0k";
  coolEarthBackground = "https://media.istockphoto.com/photos/earth-planet-viewed-from-space-3d-render-of-planet-earth-picture-id1189556235?b=1&k=20&m=1189556235&s=170667a&w=0&h=pQPArYU1ZpYl02w6rf6wnWYI1kWTcqrYCqbZ76sDZpQ=";
	gifJump = "https://c.tenor.com/GZBJyaDeJGQAAAAi/sonic-the-hegdehog-sonic.gif";
	bgm = loadSound('media/ddayzone.mp3')
	ringBling = loadSound('media/ringbling.mp3')
	eggmanrobot = loadImage('media/giganiga.png')
	eggmanrobot_damaged = loadImage('media/giganiga.png')
	asteroidImage = loadImage('media/asteroid.png');

}

function setup() {
	
	angle = 0;
  createCanvas(w,h);
	lives = 3;
	rings = 60;
	ringSpeed = 15;
  player = new jumper();
	danger = new obstacle();
	bbox = new blackBox();
	a_ring = new ring();
	b_ring = new ring();
	c_ring = new ring();
	d_ring = new ring();
	asteroid1 = new asteroid();
	asteroid2 = new asteroid();
	asteroid3 = new asteroid();

	beam = new evilBeam();
	eggnigga = new eggrobo();
	mc = loadImage(gifRun);
	
	bgm.loop();

	bgm.stop();

	bgm.play();


}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

function blackBox(){
	this.x = w - 50
	this.y = 0
	this.width = 144
	this.height = 120
	this.angle = 0;
	this.show = function(){
		push();
		rotate(angle);
		fill("black");
		image(bad_thing,this.x, this.y, this.width, this.height);
		pop();
	}
	
}

function evilBeam(){
	this.x = 0;
	this.y = h/2;
	this.width = w;
	this.height = 270;
	this.show = function(){
    image(evilBeamGif, this.x, this.y, this.width, this.height);
	}
	
	
}


function ring(){
	this.x = w - 50;
	this.y = 0;
	this.width = 40
	this.height = 40
	this.show = function(){
		image(ringGif, this.x, this.y, this.width, this.height);
	}
}

function asteroid(){
	this.x = w/2
	this.y = h/2
	this.width = 250
	this.height = 191
	this.show = function(){
		image(asteroidImage, this.x, this.y, this.width, this.height);
	}
}


function obstacle(){
	this.x = w/2
	this.y = h/2
	this.width = 300
	this.height = 300
	
	this.show = function(){
		fill(color("purple"));
		rect(this.x, this.y, this.width, this.height);
	}
}

//now build the jumper object
function jumper() {
  //starting x and y positions for jumper
  this.x = 0
  this.y = 0
	this.width = 144;
	this.height = 120;
  //apply the force of gravity
  this.gravity = 15;
  //apply opposing force of gravity
  this.lift = -30;
  //current velocity of the jumper
  this.velocity = 0;

  //build a show function to show the object on the canvas
  this.show = function() {
    fill(color("lime"));
    image(mc, this.x, this.y, this.width, this.height);
  }

  //build a jump function
  this.jump = function() {
    //take the initial velocity and modify it by the lift
    //this.velocity += this.lift;
    this.y += this.lift;
  }
  
  //build a function that will update itself in the draw function
  this.update = function() {
    //apply gravity to y axis
    this.y += this.gravity;
    //resistance to velocity
    this.velocity *= 0.9;

  }

	
}

function eggrobo(){
	this.x = w/2
	this.y = (h/2) + 100
	this.width = 672
	this.height = 448
	this.image = eggmanrobot

	this.show = function(){
		image(this.image, this.x, this.y, this.width, this.height);
	}
}



function spaceScreen(){

	clear();
	background(bg)
	bbox.show();
	player.show();
	a_ring.show();
	b_ring.show();
	c_ring.show();
	d_ring.show();
	eggnigga.show();
	asteroid1.show();
	// beam.show();
	hit = collideRectRect(player.x, player.y, player.width, player.height, bbox.x,bbox.y,bbox.width,bbox.height)
	aCollect = collideRectRect(player.x, player.y, player.width, player.height, a_ring.x,a_ring.y,a_ring.width,a_ring.height)
	bCollect = collideRectRect(player.x, player.y, player.width, player.height, b_ring.x,b_ring.y,b_ring.width,b_ring.height)
	cCollect = collideRectRect(player.x, player.y, player.width, player.height, c_ring.x,c_ring.y,c_ring.width,c_ring.height)
	dCollect = collideRectRect(player.x, player.y, player.width, player.height, d_ring.x,d_ring.y,d_ring.width,d_ring.height)

	// beamHit = collideRectRect(player.x, player.y, player.width, player.height, beam.x,beam.y,beam.width,beam.height)

	textSize(25);
	fill(color('white'))
	text(`Rings: ${rings}`, 10, 30);

	if(rings < 100){
	textSize(25);
	fill(color('yellow'))
	text(`Collect 100 Rings!`, (w/2) - 15, 30);

	textSize(25);
	fill(color('red'))
	text(`Avoid Mecha Sonic`, (w/2) - 20, 60);

	} else {
	textSize(25);
	fill(color('red'))
	text(`Defeat Eggman`, (w/2) - 15, 30);

	aCollect = null
	bCollect = null
	cCollect = null
	dCollect = null
	hit = null

	ringSpeed = 0;
	evilSpeed = 0;

	bbox.y = a_ring.y = b_ring.y = c_ring.y = d_ring.y = h + 50000

	}
	


	if (rings <= 0){
		clear();
		screen = 0
		window.location.href = "pages/death.html"
		}
		
	if (hit){
		rings = rings - 3;
	}
	
	// if (beamHit){
	// 	rings = 0;
	// }
	
	if (aCollect){
		rings += 2;
		a_ring.x = w - 50
		a_ring.y = random(0, h-50);
		ringBling.play();
	}
	if (bCollect){
		rings += 2;
		b_ring.x = w - 30
 	b_ring.y = random(0, h-50);
		ringBling.play();


	}
	if (cCollect){
		rings += 2;
		c_ring.x = w - 10
		c_ring.y = random(0, h-50);
		ringBling.play();

}

if (dCollect){
	rings += 2;
	d_ring.x = w 
	d_ring.y = random(0, h-50);
	ringBling.play();

}
	
	
	
	bbox.x -= evilSpeed;
	a_ring.x -= ringSpeed;
	b_ring.x -= ringSpeed;
	c_ring.x -= ringSpeed;
	d_ring.x -= ringSpeed;



	
	if(bbox.x < -30){
		bbox.x = w - 70
		bbox.y = random(0, h-50);
		evilSpeed += 0.8


	}
	
	if(a_ring.x < -30){
		a_ring.x = w - 50
		a_ring.y = random(0, h-50);

	}
	
	if(b_ring.x < -30){
		b_ring.x = w - 30
		b_ring.y = random(0, h-50);

	}
	
	if(c_ring.x < -30){
		c_ring.x = w - 10
		c_ring.y = random(0, h-50);

	}

  if (player.y < h-100){
    player.update();
  }
  //if spacebar pressed, player jumps
  if ((keyIsDown(32)) && (player.y >= 25)) {
    player.jump();
  }

  if ((keyIsDown(37)) && (player.x > 25)) {
    player.x -= speed;
  }
  if ((keyIsDown(39)) && (player.x < w-25)) {
    player.x += speed;
  }
}



function draw() {
 spaceScreen();

}

