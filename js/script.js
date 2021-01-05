//boolean(true or false) validation variables 
var validName = false;
var validEmail = false; 
var validPhone = false; 
//initialization of input variables 
let email;
var firstName;
var lastName;

//1function to check if names meet constraints
let checkNames = () => {
	//inside the given if statement
	//use string method to check that name values aren't empty ,
	//if both names have values, set the name valid variable to true 
	if (firstName.length && lastName.length) {
		validName = true;
	}
	//if names aren't valid, print alert message 
	else {
		alert('Please enter a first and last name')
	}
}

//function to check email for requirments 
let checkEmail = () => {

	//use a string method to check if an @ symbol is included in the email
	if (email.includes("@")) {
		validEmail = true;
	}
	else {
		alert('Make sure your email address contains the @ symbol')
	}
}


let printWelcome = () => {

//use a string method to combine first and last names with a space between
	let fullName = firstName.concat(" ", lastName)
	console.log(firstName)

	let main = document.querySelector(".main")
	main.innerHTML = "";
	
	let welcomeMessage = `<h1>Welcome  ${fullName}, thank you for signing up!</h1>`
	main.innerHTML = welcomeMessage;

	
}

let form = document.querySelector("form")
//
form.addEventListener('submit', (e) => {
	firstName = document.querySelector("#firstName").value
	lastName = document.querySelector("#lastName").value
		//store value of email input in variable 
	email = document.querySelector("#mail").value
	checkNames()
	checkEmail() 
	if (validEmail && validName) {
		printWelcome()
	} else {
		e.preventDefault()
	}
})




