$(window).load(function () {
	
 Crafty.init(500,350, document.getElementById('game'));
	
 var width = 1;
 var count = 0;
 var imageCount = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

 var myEntity = Crafty.e('2D, DOM, Mouse, Image')
.image("images/cat.png")
.bind('MouseMove', function (e){

 		count += 1;


		if (count % 30 == 0 ) {
        if ( imageCount < 9) {
          imageCount +=1;
        } else {
          imageCount = 1;
        };
        
        var imageRotationAngle = getRandomInt(-90, 90);
        console.log(imageRotationAngle);


			  var bodyWidth = window.innerWidth;
  			var bodyHeight = window.innerHeight;
  			var randPosX = Math.floor((Math.random()*bodyWidth)) - 50;
  			var randPosY = Math.floor((Math.random()*bodyHeight)) - 50;
  			var image = document.createElement("img");
  			image.src = 'images/' + imageCount + '.svg';
  			image.style.top = randPosY + "px";
			  image.style.left = randPosX + "px";
  			image.style.position = "absolute";
        image.style.webkitTransform = "rotate(-" + imageRotationAngle + "deg)";
  			document.getElementById("screen").appendChild(image);

		};

    if ((count % 50 == 0) && (width < 100)) {
       // move();
       var elem = document.getElementById("myBar");   
       width += 5;
       elem.style.width = width + '%'; 
    }
});

  

});