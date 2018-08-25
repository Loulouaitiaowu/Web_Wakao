function menuChange(){
	var x = document.getElementById("triangle");
	x.style.borderTop = "5px solid #0088cc";
}
function menuCancle(){
	var x = document.getElementById("triangle");
	x.style.borderTop = "5px solid #fff";
}
function menuDisplay(){
	var x = document.getElementById("menu");
	if (x.style.display !="block"){
		x.style.display="block";
	}else{
		x.style.display="none";
	}
}
function searchHintShow(){
	var x = document.getElementsByClassName("search_hint")[0];
	x.style.display="block";
}
function searchHintMiss(){
	var x = document.getElementsByClassName("search_hint")[0];
	x.style.display="none";
}