//var daters = [
//{name: "John", surname: "Doe", age: "25", myphoto:},
//{name: "Jane", surname: "Doe", age: "25", myphoto:},
//{name: "Maxima", surname: "Musterman", age: "25", myphoto: },
//{name: "Max", surname: "Musterman", age: "25", myphoto:}
//];


//console.log(daters);

//print daters
//var John = document.getElementById(Name).innerHTML
//for (var i=0; i < daters.length; i++) {
	//calculateLikes
//	var timesLikes
//}

class daters {

	constructor(name, surname, age, imagesrc ) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.imagesrc = imagesrc;
	}

	show(elId){
	var myart = document.getElementById(elId);
	myart.innerHTML += '<article>' + 'Name' + this.name + '</article>';
	myart.innerHTML += '<article>' + 'Name' + this.surname + '</article>';
	myart.innerHTML += '<article>' + 'Name' + this.age + '</article>';
	myart.innerHTML += '<img src = "' + this.imagesrc + '">';

	}
}

var JohnDoe = new daters("John", "Doe", "25", "img/boy1.800x1000.jpg");
JohnDoe.show(ArticleJohn);

var JaneDoe = new daters("Jane", "Doe", "25", "img/boy1.800x1000.jpg");
JaneDoe.show(ArticleJane);






