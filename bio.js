//Get Modal
var modal = document.getElementById("myModal");

//get Btn id untuk membuka modaal
var btn = document.getElementById("myBtn");

//span element x di pojok nanti
var span = document.getElementsByClassName("close")[0];

//functions tarter
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

//js event listener
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//get the date
var today = new Date();
var date = today.getFullYear();
document.getElementById("date").innerHTML = date;