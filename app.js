$(window).load(function () {
	
 Crafty.init(500,350, document.getElementById('game'));
	
 var count = 0;

 var myEntity = Crafty.e('2D, DOM, Mouse, Image')
.image("cat.png")
.bind('MouseMove', function (e){

 		count += 1;

		if (count % 10 == 0 ) {
			var bodyWidth = window.innerWidth;
  			var bodyHeight = window.innerHeight;
  			var randPosX = Math.floor((Math.random()*bodyWidth));
  			var randPosY = Math.floor((Math.random()*bodyHeight));
  			var image = document.createElement("img");
  			image.src = 'images/kenma.png';
  			image.style.top = randPosY + "px";
			image.style.left = randPosX + "px";
  			image.style.position = "absolute";
  			document.getElementById("screen").appendChild(image);
  			
		};
	});

});