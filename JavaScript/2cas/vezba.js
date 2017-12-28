// var brojevi = [1, 2, 3];
// for(var i=0; i<brojevi.length; i++){
//   document.write(brojevi[i] + "</br>");
// }

//
// // rad sa stringovima
// var x = "neki text";
// // console.log("x");
// var y = "DRUGI TEXT";
// var z =" ";
// // Odredjivanje pozicije u stringu
//
// var pozicijaSlovaI= x.indexOf("i");
// console.log(pozicijaSlovaI);
//
// // toUpperCase
// // toLowerCase
//
//
// x=x.toUpperCase();
// y= y.toLowerCase();
//
//
//
// var text= x+z+y;
// console.log(text);
//
//
// // var x1=5;
// // var x2=6;
// // console.log(x1+x2);
//
// // var x1='5';
// //  var x2='6';
// // console.log(x1+x2);




// var x1= document.getElementById("text");
// var x2=document.querySelector("#text");
//
// var x3=document.getElementsByClassName("text")[0];
 // var x4=document.getElementsByName("text");
 //
 //
 //
 //
 //
 //
 //
 // console.log(x4.length);
 //
 // for(i=0; i<x4.length; i++){
 //   console.log(x4[i].id);
 // }

 // var p = document.getElementById("p");
 // console.log(p);

 // // innerHTML
 //
 // p.innerHTML= "neki text";

 // var sadrzaj= document.getElementById("p").innerHTML;
 // console.log(sadrzaj);


 // x1.value="Sign up";




// DOMACI




// 1. Napisati 20 p taga u html, preko JS u parne upisati tekst malim slovima, a u neparne velikim slovima.

var div= document.getElementById("d");
for(var i=0;i<20;i++){
  div.innerHTML+="<p>"+i+"</p>";
}



// 2. Forma u html koja ce imati 3 prazna polja i jedno prazno dugme i preko JS upisati sadrzaj.


ime.value="Danica";

prezime.value="Stankovic"

email.value="danicastankovic86@gmail.com"

prijava.value="Prijavi se"



// 3.Napraviti 5 razlicitih el u html sa razlicitim id i uraditi console.log sa svaki od njih


console.log(d);

p.innerHTML=("Danica");


console.log(boldovan);
boldovan.innerHTML=("Danica");

console.log("podvucen");
podvucen.innerHTML="Danica";


console.log("citat");
citat.innerHTML="JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language."


var novNaslov=document.getElementsByClassName("naslov").length;//ovo mi ne radi

document.getElementsByClassName("naslov")[0].innerHTML = "Ime";
document.getElementsByClassName("naslov")[1].innerHTML ="Prezime";
document.getElementsByClassName("kolona")[0].innerHTML = "Danica";
document.getElementsByClassName("kolona")[1].innerHTML = "Stankovic";
document.getElementsByClassName("kolona1")[0].innerHTML = "Mladen";
document.getElementsByClassName("kolona1")[1].innerHTML = "Stankovic";

//Pristupanje id slike


document.getElementById("paprika").alt;

document.getElementById("paprika").alt = "slika";


document.getElementById("paprika").src = "povrce.jpg";


//Pristup textu u inputu i ispis u h6 tagu


document.getElementById("a").innerHTML="<h6>ss</h6>";
