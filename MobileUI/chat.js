var addMsg = document.forms[0];
var ul = document.querySelector('.chatBox ul');
addMsg.addEventListener('submit', function(a){
	a.preventDefault();

	var value = addMsg.querySelector('input[type="text"]').value;
	
	var li = document.createElement("li");
	var msg = document.createElement("span");

	msg.textContent = value;

	li.appendChild(msg);
	ul.appendChild(li);
	

	});

