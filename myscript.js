/*//var daters = [
//{name: "John", surname: "Doe", age: "25", myphoto:},
//{name: "Jane", surname: "Doe", age: "25", myphoto:},
//{name: "Maxima", surname: "Musterman", age: "25", myphoto: },
//{name: "Max", surname: "Musterman", age: "25", myphoto:}
];
//console.log(daters);*/
class Daters {
	constructor(name, surname, age, img, likes, heartsimg) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.img = img;
		this.likes = 0 //count[0,1,2,3]; oder 0 oder likes?
		this.heartsimg = heartsimg;
	}
}

//var count = [0,0,0,0];

var newDaters = [
new Daters("John", "Doe", "25", "img/boy1.800x1000.jpg", 1, "img/like.png"),
new Daters("Jane", "Doe", "25", "img/girl1.800x1000.jpg", 0, "img/like.png"),
new Daters("Maxima", "Musterman", "25", "img/girl2.800x1000.jpg", 0, "img/like.png"),
new Daters("Max", "Musterman", "25", "img/boy2.800x1000.jpg", 0, "img/like.png")
];

var allDaters = document.getElementById("datingPartners");

for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += 
	'<div class="daters">' + 
		'<div class="pic"><img src="' + newDaters[i].img + '">' + 
		'</div>' + 
		'<div class="details">Name: ' + newDaters[i].name + ' <br>Surname: ' + newDaters[i].surname + ' <br>Age: ' + newDaters[i].age +
			'<div class="votes"><button id="add" class="buttonlike" value="">Likes</button>' + 
				'<div id="' + newDaters[i].name + '"">' + newDaters[i].likes + 
				'</div>' + 
				'<div class="heart"><img class="heartimg" src="' + newDaters[i].heartsimg + '">' + 
				'</div>' + 
			'</div>' + 
		'</div>' + 
	'</div>';
}

$("#add").click(function(){
	var number = newDaters[0].likes += 1;
	$("#"+this.id).html(number);

});


// $("#add").click(function(){
// 	var x = $(this).attr("value");
// 	count[x]++;
// 	$("newDaters"+x).attr("showLikes")
// 					.html(count[x]);

// });
alert("function button is called");


/*/*var likebtn = document.getElementById("add");
likebtn.addEventListener('click', function(){updateLikes});
function updateLikes(x) {Daters[x].likes += 1;
var show = document.getElementById("showLikes" + x).innerHTML = Daters[x].likes
}*/

/*var click = 0
$("button").click(function() {
	click++;
	$(showLikes).html(click);
});*/

/*var LikeDaters = newDaters[i].likes;

$(".add[0]").on('click', function () {
	$("showLikes[0]").text(newDaters[0].likes + 1);
});*/



// $(document).ready(function() {
// 	$("#add").on('click', function() {
// 		$(this).add("likes.value"++).html(".showLikes");
// 	});
// 	});

// alert("function is called");



