var a = document.querySelector(".contact-list");
var b = document.querySelector(".chat");
var c = document.querySelector(".msg");
var d = document.querySelector("#search");
var e = document.querySelector("footer");
var f = document.querySelector(".msg header")

	


function contact(){

	if(a.style.display === "none"){
		a.style.display = "block";
		b.style.display = "none";
	}
	else{
		a.style.display = "block";
		b.style.display = "none";
	}
}

	function chats(){
	
	if(b.style.display === "none"){
		b.style.display = "block";
		a.style.display = "none";
	}
	else{
		b.style.display = "block";
		a.style.display = "none";
	}
}

	function msg(){
	
	if(c.style.display === "none"){
		c.style.display = "block";
		a.style.display = "none";
		b.style.display = "none";
		d.style.display = "none";
		e.style.display = "none";
	}
	else{
		c.style.display = "block";
		a.style.display = "none";
		b.style.display = "none";
		d.style.display = "none";
		e.style.display = "none";
	}
}

function back(){
	
	if(b.style.display === "none"){
		b.style.display = "block";
		d.style.display = "block";
		e.style.display = "block";
		a.style.display = "none";
		c.style.display = "none";
		}	
	else{
		b.style.display = "block";
		d.style.display = "block";
		e.style.display = "block";
		a.style.display = "none";
		c.style.display = "none";

	
}
}