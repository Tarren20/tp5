function my_change() {
  x = document.getElementById("header");

x.classList.remove("header_s");
x.classList.add("header_ss"); 
}
 
window.onload = my_change();
