function proveriFun() {
var ime = document.getElementById("ime").value;
console.log(ime);

var pr = document.getElementById("prezime").value;
console.log(pr);

var email= document.getElementById("email").value;
console.log(email);

var uname= document.getElementById("username").value;
console.log(uname);

var pass= document.getElementById("password").value;
console.log(pass);

var porukaDiv=document.getElementById("poruka");
// porukaDiv.innerHTML="<ul><li>"+ime+"</li>"+
// "<li>"+pr+"</li>"+
// "<li>"+email+"</li>"+
// "<li>"+uname+"</li>"+
// "<li>"+pass+"</li>"
// "</ul>";


var reIme= /^[A-z]{2,20}(\s[A-z]{2,20})*$/;
  var imeGreska= document.getElementById("imeGreska");
  var prezimeGreska= document.getElementById("prezimeGreska");
  var emailGreska= document.getElementById("emailGreska");
  var usernameGreska= document.getElementById("usernameGreska");
  var passwordGreska= document.getElementById("passwordGreska");
if(ime == ""){
  imeGreska.setAttribute("class", "text-danger");
  imeGreska.innerHTML="Polje za ime ne sme biti prazno";
}else{
  imeGreska.setAttribute("class", "hidden");
if(reIme.test(ime)){
  imeGreska.setAttribute("class", "hidden");
}else{
  imeGreska.innerHTML="Polje za ime mora imati bar 2 karakteri i mora sadrzati samo slova";
  imeGreska.setAttribute("class", "text-danger");
}
}


if(pr ==""){
  prezimeGreska.setAttribute("class", "text-danger");
  prezimeGreska.innerHTML="Polje za prezime ne sme biti prazno";
} else {
  prezimeGreska.setAttribute("class", "hidden");
  if (reIme.test(pr)) {
    prezimeGreska.setAttribute("class", "hidden");

  } else {
    prezimeGreska.innerHTML="Polje za prezime mora imati bar 2 karakteri i mora sadrzati samo slova";
    prezimeGreska.setAttribute("class", "text-danger");
  }
}



if(email ==""){
  document.getElementById("emailGreska").setAttribute("class", "text-danger");
}else{
  document.getElementById("emailGreska").setAttribute("class", "hidden");
}


if(uname ==""){
  document.getElementById("usernameGreska").setAttribute("class", "text-danger");
}else{
  document.getElementById("usernameGreska").setAttribute("class", "hidden");
}


if(pass ==""){
  document.getElementById("passwordGreska").setAttribute("class", "text-danger");
}else{
  document.getElementById("passwordGreska").setAttribute("class", "hidden");
}




  return false;
}



//
// function proveriFun(){
//   var ime = document.getElementById("ime").value;
//   var prezime = document.getElementById("prezime").value;
//   var email= document.getElementById("email").value;
//   var username= document.getElementById("username").value;
//   var password= document.getElementById("password").value;
//
//   var reIme = /^[A-z]{2,20}(\s[A-z]{2,20})*$/
//
//     var imeGreska= document.getElementById("imeGreska");
//     var prezimeGreska= document.getElementById("prezimeGreska");
//     var emailGreska= document.getElementById("emailGreska");
//     var usernameGreska= document.getElementById("usernameGreska");
//     var passwordGreska= document.getElementById("passwordGreska");
//
//   if(ime == ""){
//     imeGreska.setAttribute("class", "text-danger");
//     imeGreska.innerHTML("Obavezno polje");
//   }else{
//     imeGreska.setAttribute("class", "hidden");
//   if(reIme.test(ime)){
//     imeGreska.setAttribute("class", "hidden");
//   }else{
//     imeGreska.innerHTML("neispravan unos");
//     imeGreska.setAttribute("class","text-danger");
//   }
//   }
//
//
//
//
//
//
//
//
//
//
//
//   return false;
// }
