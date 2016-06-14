/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Zakariya'u  Tanimu Muhammad "]);
 var awesomeThoughts;
 awesomeThoughts = "I am Zakariya and I am AWESOME";

 console.log(awesomeThoughts);

var email = "zax20yau@gmail.com";
var newEmail = email.replace("gmail","udacity");

console.log(email);
console.log(newEmail);


var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var formattedName;
var name = "Zakariyau Tanimu Muhammad";
var formattedRole;
var role = "Software Engineer";

// The Two HTMLheader..... are variables referenced from helper.js file
formattedName = HTMLheaderName.replace("%data%",name);
formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);