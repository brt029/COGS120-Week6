var data = require("../data.json");

exports.addUser = function(request, response) {    
	// Your code goes here
	console.log(data);
	var name = request.query.name;
	var gender = request.query.gender;
	var height = request.query.height;
	var weight = request.query.weight;
	var accomplish = request.query.accomplish
	var newUser = {"name": name, "gender": gender, "height": height, "weight": weight, "accomplish": accomplish};
	data.users.push(newUser);
	response.render('home');
 }