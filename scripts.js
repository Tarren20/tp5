window.onload = function() {
 document.getElementById('header_s').style.fontSize = '50px'
};

Click = document.querySelector("#header h1");
  Click.onclick = function () {
  Click.classList.toggle("click");
};

list_0 = document.querySelector("div#ingredients");
list_0.onclick = function () {
  list_0.classList.toggle("hide");
};

list_1 = document.querySelector("div#equipment");
list_1.onclick = function () {
  list_1.classList.toggle("hide");
};

list_2 = document.querySelector("div#directions");
list_2.onclick = function () {
  list_2.classList.toggle("hide");
};

var element = document.getElementById("new");
element.innerHTML = "By:Tarren McDaniel";