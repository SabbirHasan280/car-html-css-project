  // option
  function ddselect(){
    var d = document.getElementById("ddselect");
    var displaytext = d.options[d.selectedIndex].text;
    document.getElementById("text_value").value = displaytext;
  }
  // option
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
// input value save
const text1 = document.getElementById("text_value");
const btn1 = document.getElementById("btn1");
const text = document.getElementById("p_one");
const texttwo = document.getElementById("p_one");
const text2 = document.getElementById("text_Vehicle")
function fun1 (){
  // select box
  if(text1.value == ""){
    alert("Please select car iteam");
  }else{
  text.innerHTML = text1.value;
  } 
}