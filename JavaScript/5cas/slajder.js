function sakriSlajder(){
  document.getElementById("slajder").setAttribute("class","hidden");
  document.getElementById("sakriDugme").setAttribute("class", "hidden");
  document.getElementById("prikaziDugme").setAttribute("class","btn btn-danger");
}
function prikaziSlajder() {
  document.getElementById("slajder").setAttribute("class","");
  document.getElementById("sakriDugme").setAttribute("class", "btn btn-danger");
  document.getElementById("prikaziDugme").setAttribute("class","hidden");
}

var nizSlike=[
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg"
];
// function prikaziCetvrtu(){
//   document.getElementById("slika").src=nizSlike[4];
// }
//
// function vratiPrvu() {
//   document.getElementById("slika").src=nizSlike[0];
// }
 var brojacZaSLike=0;
function napred() {
  var brojac = ++brojacZaSLike;
  if(brojac < nizSlike.length){
    document.getElementById("slika").src=nizSlike[brojac];

  }else{
    brojacZaSLike --;
  }
  console.log(brojacZaSLike);


}

function nazad() {
  var brojac = -- brojacZaSLike;
  if(brojac >= 0){
    document.getElementById("slika").src=nizSlike[brojac];

  }else{
    brojacZaSLike ++;
  }
  console.log(brojacZaSLike);
}

function menjajSlike(){
  console.log("prokazi");
  var index = ++brojacZaSLike;
  if(index < brojacZaSLike.length){

    document.getElementById("slika").src=nizSlike[index];
  } else { console.log(brojacZaSLike.length);
    brojacZaSLike=0;
    index=0;
    document.getElementById("slika").src=nizSlike[index];
  }}

   var brojacZaSLike=0;

   setInterval(menjajSlike, 3000);
