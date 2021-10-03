function openContainerSelect() {
   var element = document.querySelector(".containerSelectLayout");
   element.classList.toggle("open");
}


document.querySelector(".buttonSelectAddOn").addEventListener("click", function(){
	var task = document.querySelector(".inputAddOnEmail").value;
	if (task) {
		addNewTask(task);
		document.querySelector(".inputAddOnEmail").value="";
	}
});

function removeItem(){
	var item = this.parentNode.parentNode; //targeting li
	var parent = item.parentNode; //targeting ul

	parent.removeChild(item);
}


//Adds new item to todo list
function addNewTask(item){
	var list = document.querySelector(".containerTotalSelected");

	var newItem = document.createElement("li");
	newItem.innerText = item;

	var buttons = document.createElement("div");
	buttons.classList.add("buttonsSelected");

	var inputSelect = document.createElement("input");
	inputSelect.type = ("type", "checkbox");
	inputSelect.name = ("selectBox[]");
	inputSelect.classList.add("inputBodySelect");

	//creates remove and complete buttons + add classes
	var remove = document.createElement("button");
	remove.classList.add("remove");
	remove.addEventListener("click", removeItem);

	newItem.appendChild(inputSelect);
	buttons.appendChild(remove);
	newItem.appendChild(buttons);
	

	//insert new todo before the first element
	list.insertBefore(newItem, list.childNodes[0]);
}

//add event listener to pre-made list items

var deleteIt = document.getElementsByClassName("remove");
for (var i = 0; i < deleteIt.length; i++){
	deleteIt[i].addEventListener("click", removeItem);
}


// CONTADOR CHECKBOX SELECT





function validacaoEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
	if ((usuario.length >=1) &&
		 (dominio.length >=3) &&
		 (usuario.search("@")==-1) &&
		 (dominio.search("@")==-1) &&
		 (usuario.search(" ")==-1) &&
		 (dominio.search(" ")==-1) &&
		 (dominio.search(".")!=-1) &&
		 (dominio.indexOf(".") >=1)&&
		 (dominio.lastIndexOf(".") < dominio.length - 1)) {
	document.getElementById("msgemail").innerHTML="E-mail válido";
	alert("email valido");
	}
	else{
	document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido </font>";
	alert("E-mail invalido");
	}
	}