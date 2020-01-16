var inputText = document.getElementById("txt"),
items = document.querySelectorAll(".poem-title"),
tab =[], index;

//get the selected li index using array
// populate array with li values

for(var i=0;i< items.length; i++){
	tab.push(items[i].innerHTML);
}

//get index onclick
for(var i=0;i< items.length;i++) {
	items[i].onclick= function() {
		index=tab.indexOf(this.innerHTML);
		console.log(this.innerHTML + "INDEX =" + index);
        
		//set the selected li value into input text
		inputText.value =this.innerHTML;
	};
}

function refreshArray() {    
	// clear array
	tab.length = 0;
	items = document.querySelectorAll(".poem-title");
    
	//fill array
    for(var i=0;i< items.length; i++) {
		tab.push(items[i].innerHTML);
	}
}

function addLI() {
	var list = document.getElementById("list"),
	textInput= document.createTextNode(inputText.value),
	newLi= document.createElement("LI");
	newLi.setAttribute("class", "poem-title");
	newLi.appendChild(textInput);
	list.prepend(newLi);
	refreshArray();

	// adding event to the new Li
	newLi.onclick= function() {
	index=tab.indexOf(newLi.innerHTML);
	console.log(newLi.innerHTML + "INDEX =" + index);

	//set the selected li value into input text
	inputText.value =newLi.innerHTML;
	}
};

function editLI() {
	//edit selected li using input text
	items[index].innerHTML = inputText.value;
	refreshArray();     
}

function deleteLI() {
	refreshArray();
	if(items.length>0){
	items[index].parentNode.removeChild(items[index]);
	inputText.value = "";
	}
}
