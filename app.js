$(window).load(function () {

Crafty.init(500,350, document.getElementById('game'));

var count = 0;

var numbers = ["one", "two", "three", "four", "five"]


 var myEntity = Crafty.e('2D, DOM, Mouse, Image')
.image("bunny.png")
.bind('MouseOver', function(e){
 	Crafty.log('mouse over', e);
 	count += 1;
 	Crafty.log(count);
	if (count > 3) {
		document.getElementById("heart").innerHTML = "hello";
	};
	if (count % 5 == 0) {
	document.getElementById("text").innerHTML = "tendiv";
};
});



$("#clickme").click(function() {
	console.log(count);
});

});