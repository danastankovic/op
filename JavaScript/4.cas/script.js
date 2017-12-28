setInterval(function () {
  var datum = new Date();
  document.getElementById("sat").innerHTML = datum.toString();
}, 1000);


var dugme = document.getElementById("button");
dugme.innerHTML = "JS dugme";
dugme.setAttribute("class", "btn btn-xs btn-danger");

function bojaPrimary(){
var  ispisDiv = document.getElementById("ispis");
ispisDiv.setAttribute("class","alert alert-info");
}



function ispisSadrzaja(){
  var sadrzajPolja=document.getElementById('name').value;
  document.getElementById("ispis").innerHTML=sadrzajPolja;
  if(sadrzajPolja==""){
    document.getElementById("ispis").setAttribute("style", "display:none");
  }else{
    document.getElementById("ispis").setAttribute("style", "display:block");
  }
}

function promeni(){
  var noviIspsi = document.getElementById("a").innerHTML;
  document.getElementById("ispis").innerHTML=noviIspsi;
}
