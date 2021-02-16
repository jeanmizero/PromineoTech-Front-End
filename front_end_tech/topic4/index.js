let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

const inputLength = () => input.value.length;
const listLength = () => item.length;

const createListElement = ()=> {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""; 

	let crossOut = ()=> {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
}
const addListAfterClick = ()=>{
	if (inputLength() > 0) {
		createListElement();
	}
}
enterButton.addEventListener("click",addListAfterClick);



