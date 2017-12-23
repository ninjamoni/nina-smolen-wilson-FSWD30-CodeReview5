/*//var daters = [
//{name: "John", surname: "Doe", age: "25", myphoto:},
//{name: "Jane", surname: "Doe", age: "25", myphoto:},
//{name: "Maxima", surname: "Musterman", age: "25", myphoto: },
//{name: "Max", surname: "Musterman", age: "25", myphoto:}
];


//console.log(daters);

//print daters
//var John = document.getElementById(Name).innerHTML
//for (var i=0; i < daters.length; i++) {
	//calculateLikes
//	var timesLikes
//}*/

class Daters {

	constructor(name, surname, age, img, likes, heartsimg) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.img = img;
		this.likes = 0;
		this.heartsimg = heartsimg;
	}
}


var newDaters = [
new Daters("John", "Doe", "25", "img/boy1.800x1000.jpg", " ", "img/like.png"),
new Daters("Jane", "Doe", "25", "img/girl1.800x1000.jpg", " ", "img/like.png"),
new Daters("Maxima", "Musterman", "25", "img/girl2.800x1000.jpg", " ", "img/like.png"),
new Daters("Max", "Musterman", "25", "img/boy2.800x1000.jpg", " ", "img/like.png")
];


var allDaters = document.getElementById("datingPartners");


for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += '<div class="daters"><div class="pic"><img src="'       + newDaters[i].img + 
    								       '"></div><div class="details">Name: '   + newDaters[i].name + 
					                						' <br>Surname: '       + newDaters[i].surname + 
														  		' <br>Age: '       + newDaters[i].age +
												    	'<div class="votes"><button class="add" value="i">Likes</button><div class="showLikes">'
												   								   + newDaters[i].likes + 
															'</div><div class="heart"><img class="heartimg" src="'              
																				   + newDaters[i].heartsimg + 
    						'"></div></div></div></div>';
}




/*$(document).ready(function() {
	$(".add").on('click', function() {
		$(this).add("likes.value"++).html(".showLikes");
	});
	});

alert("function is called");*/



