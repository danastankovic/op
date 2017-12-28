function proveriFun() {
var ime = document.getElementById("ime").value;
var prezime = document.getElementById("prezime").value;
var email= document.getElementById("email").value;
var poruka = document.querySelector("#poruka").value;
var password = document.querySelector("#password").value;
var passwordPotvrda = document.querySelector("#passwordPotvrda").value;

var reIme= /^[A-z]{2,20}(\s[A-z]{2,20})*$/;
  var imeGreska= document.getElementById("imeGreska");
  var prezimeGreska= document.getElementById("prezimeGreska");
  var emailGreska= document.getElementById("emailGreska");
  var porukaGreska = document.querySelector("#poruka");
  var passwordGreska = document.querySelector("#password");
  var potvrdaGreska = document.querySelector("#potvrdaGreska");

  if(ime == ""){
    imeGreska.setAttribute("class", "text-danger");
    imeGreska.innerHTML="Obavezno polje";
  }else{
    imeGreska.setAttribute("class", "hidden");
    if(reIme.test(ime)){
      imeGreska.setAttribute("class", "hidden");
    }else {
      imeGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
      imeGreska.setAttribute("class", "text-danger");
    }
  }


var rePrezime = /^[A-z]{2,20}(\s[A-z]{2,20})*$/;
var imeGreska= document.getElementById("imeGreska");
var prezimeGreska= document.getElementById("prezimeGreska");
var emailGreska= document.getElementById("emailGreska");

if(prezime == ""){
  prezimeGreska.setAttribute("class", "text-danger");
  prezimeGreska.innerHTML="Obavezno polje";
}else{
  prezimeGreska.setAttribute("class", "hidden");
  if(rePrezime.test(prezime)){
    prezimeGreska.setAttribute("class","hidden");
  }else{
    prezimeGreska.setAttribute("class", "text-danger");
    prezimeGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
  }
}



if(email == ""){
  emailGreska.setAttribute("class", "text-danger");
  emailGreska.innerHTML="Obavezno polje";
}else{
  emailGreska.setAttribute("class", "hidden");
  if(rePrezime.test(prezime)){
    emailGreska.setAttribute("class","hidden");
  }else{
    emailGreska.setAttribute("class", "text-danger");
    emailGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
  }
}



if(poruka == ""){
  porukaGreska.setAttribute("class", "text-danger");
  porukaGreska.innerHTML="Obavezno polje";
}else{
  porukaGreska.setAttribute("class", "hidden");
  if(rePrezime.test(prezime)){
    porukalGreska.setAttribute("class","hidden");
  }else{
    porukaGreska.setAttribute("class", "text-danger");
    porukaGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
  }
}


if(poruka == ""){
  porukaGreska.setAttribute("class", "text-danger");
  porukaGreska.innerHTML="Obavezno polje";
}else{
  porukaGreska.setAttribute("class", "hidden");
  if(rePrezime.test(prezime)){
    porukalGreska.setAttribute("class","hidden");
  }else{
    porukaGreska.setAttribute("class", "text-danger");
    porukaGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
  }
}



if(poruka == ""){
  porukaGreska.setAttribute("class", "text-danger");
  porukaGreska.innerHTML="Obavezno polje";
}else{
  porukaGreska.setAttribute("class", "hidden");
  if(rePrezime.test(prezime)){
    porukalGreska.setAttribute("class","hidden");
  }else{
    porukaGreska.setAttribute("class", "text-danger");
    porukaGreska.innerHTML="Polje mora sadrzati samo slova i ne sme biti manje od 2!";
  }
}




  return false;
}







function skloniGreske(){
  document.querySelector("#imeGreska").innerHTML = "";
  document.querySelector("#prezimeGreska").innerHTML = "";
  document.querySelector("#emailGreska").innerHTML = "";
  document.querySelector("#porukaGreska").innerHTML = "";
}
