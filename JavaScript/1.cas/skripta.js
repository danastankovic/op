var a, b, c, d;
a = 5;
b = 5.5;
c = true;
d = "Danica";

/* Primer za alert */
// for(var i = 0; i < 10; i++) {
//    alert(d);
// }

/* Primer za confirm */
// var rezultat = confirm("Napolju je hladno?");
// if (rezultat == true) {
//   alert("Napolju jeste hladno.")
// } else {
//   alert("Napolju nije hladno.");
// }

/* Obe funkcije pristupaju elementu koji ima id koji se prosledjuje u zagradi */
var div = document.getElementById("div");
var div1 = document.querySelector("#div");

var poljeForme = document.getElementById("poljeForme");

// var niz = [5,6,5,3,4,5];
// console.log(niz.length);

var imenaOsoba=["Danica", "Luka", "Mladen", "Nikolina","mama", "tata", "bata"];
// console.log(imenaOsoba.length);
// console.log(imenaOsoba[3]);
// alert(imenaOsoba[0]);
// alert(imenaOsoba[1]);
// alert(imenaOsoba[2]);
// alert(imenaOsoba[3]);
// for(var i=0; i<imenaOsoba.length; i++){
//   console.log(imenaOsoba[i]);
// }
var brojevi=[1,4,6,9,34];
for(var i=1; i<51; i++){
//  document.write(i + "<br/>");
brojevi.push(10);
}
//console.log(brojevi);
// console.log(brojevi[0]);
// for(var i=0; i<brojevi.length; i++){
//   console.log(brojevi[i]);
// }

// var ime = "pera1";
//
// switch(ime) {
//   case "pera":
//     alert("Zovete se pera");
//   break;
//   case "mika":
//     alert("Zovete se mika");
//   break;
//   case "laza":
//     alert("Zovete se laza");
//   break;
//   default:
//     alert("Ime nije prepoznato");
//   break;
// }
