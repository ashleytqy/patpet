$(window).load(function () {


Crafty.init(500,350, document.getElementById('game'));


var count = 0;

 var myEntity = Crafty.e('2D, DOM, Mouse, Image')
.image("cat.png")
.bind('MouseMove', function(e){
 	Crafty.log('mouse is moving', e);
 	count += 1;
 	Crafty.log(count);
	if (count % 5 == 0 ) {
	var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  var image = document.createElement("img");
  image.src = 'images/kenma.png';
  image.style.position = "absolute";
	image.style.top = randPosY + "px";
	image.style.left = randPosX + "px";

		  document.getElementById("wind").appendChild(image);
		};
});



});