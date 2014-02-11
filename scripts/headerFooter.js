//Call in the header
var header = document.getElementById('header');

//Create nav menu
var nav = document.createElement('nav');
nav.innerHTML = "<a href=\"index.html\">Home</a> |" + "\n" + "<a href=\"parallax.html\">Parallax</a>";

//Append Header
header.appendChild(nav);

//Create h1
var h1 = document.createElement('h1');
header.appendChild(h1);	
h1.innerText = "Web Technology: Parallax Scrolling";

//Call in the footer
var footer = document.getElementById('footer');

//Duplicate the Nav Node.
var cloneNav = nav.cloneNode(true);

//Append Footer
footer.appendChild(cloneNav);

//-------------------------- Custom Alert ------------------------------//

//Custom Alert
var timoutLength = 10000;
var body = document.getElementsByTagName('body');
var alertBox = document.getElementById('alertBox');
var timeTime;

// Timeout Alert PopUp
timeTime = setTimeout(function() {
		alertBox.style.display = "block";
		window.location = "#";
	}, timoutLength);
	
	// Assign Yes and No Functions to Button Clicks
	document.getElementById('alertButtonYes').onclick = alertIntervalYes;
	document.getElementById('alertButtonNo').onclick = alertIntervalNo;

//Yes Button Function
function alertIntervalYes () {
		alertBox.style.display = "none";

		//Keep Timout Going If Yes
		timeTime = setTimeout(function() {
		alertBox.style.display = "block";
		window.location = "#";
	}, timoutLength);
}

//No Button Function
function alertIntervalNo () {
	window.location = "http://www.google.com";
}
//----------------------------------------------------------------//