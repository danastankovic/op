function funkcija() {
  alert("kliknuo");
}

// var novaProm = document.getElementById('pTag');
//
// document.getElementById('pTag').onclick= function (){
//     alert(novaProm.innerHTML);
// }

function prelazakMisa() {
  document.getElementById("slika").src="povrce.jpg";
  brojPrelazaka++;
console.log(brojPrelazaka);
document.getElementById("strong").innerHTML=brojPrelazaka;
}
var brojPrelazaka=0;

function izlazak(){
  document.getElementById("slika").src="paprika.jpg";
}

var brojPrelazaka=0;



// window.onload = function() {
//   saberi(5,6);
// }
//
//
// function saberi(a,b){
//   var c=a+b;
//   console.log(c);
//
// }



function prlazak(){
var vrednostPolja = document.getElementById("polje").value;//za input

document.getElementById("tag").innerHTML = vrednostPolja;//za tag
}



function saberi(){
  var a = document.getElementById("prviBroj").value;
  var b = document.getElementById("drugiBroj").value;
  var ukupno= parseInt(a)+parseInt(b);
  console.log(ukupno);
  document.getElementById("rezultat").value = ukupno;
}

function oduzmi(){
  var a = document.getElementById("prviBroj").value;
  var b = document.getElementById("drugiBroj").value;
  var ukupno =  parseInt(a)-parseInt(b);
  console.log(ukupno);
  document.getElementById("rezultat").value = ukupno;
}

function pomnozi(){
  var a = document.getElementById("prviBroj").value;
  var b = document.getElementById("drugiBroj").value;
  var ukupno =  parseInt(a)*parseInt(b);
  console.log(ukupno);
  document.getElementById("rezultat").value = ukupno;
}

function podeli(){
  var a = document.getElementById("prviBroj").value;
  var b = document.getElementById("drugiBroj").value;
  var ukupno =  parseInt(a)/parseInt(b);
  console.log(ukupno);
  document.getElementById("rezultat").value = ukupno;
}
