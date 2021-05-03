window.onload = function() {
 document.getElementById('header_s').style.fontSize = '50px'
}

window.onclick = function () {
   document.getElementById('header_s').style.color = 'lightblue'
   }

list = document.querySelectorAll("h4");
  console.log(list);
  list.item(0).addEventListener("click", function() {
    document.querySelector('#ingredients_list').classList.toggle('hide');
  });

  list.item(1).addEventListener("click", function() {
    document.querySelector('#equipment_list').classList.toggle('hide');
  });

  list.item(2).addEventListener("click", function() {
    document.querySelector('#highlight').classList.toggle('hide');
  });
};
