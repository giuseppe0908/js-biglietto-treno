//Chiedere all'utente quanti km vuole percorrere e salvo la risposta in una variablie

var km = parseFloat(prompt("Quanti km vuoi percorrere?"));
console.log(km);

//Chiedere all'utente quanti anni ha e mi salvo la risposta in una variablie

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

var prezzo_biglietto = km * (0.21);
// console.log(prezzo_biglietto);

//Ora faccio la verifica e applico lo sconto in base al età

if (eta < 18) {
   var sconto = (prezzo_biglietto * 20) / 100.toFixed(2) ;
  console.log("questo è lo sconto applicato in base alla tua età"+ " "+ sconto +"€");
  prezzo_biglietto-=sconto;
  console.log("Questo è il prezzo totale del biglietto applicando lo sconto"+ " " + prezzo_biglietto+"€");
}
else if (eta > 65) {
  sconto = (prezzo_biglietto * 40) / 100.toFixed(2) ;
  console.log("questo è lo sconto applicato in base alla tua età"+ " "+  sconto+"€");
  prezzo_biglietto-=sconto;
  console.log("Questo è il prezzo totale del biglietto applicando lo sconto" + " " + prezzo_biglietto+"€");
}else{
  console.log("Questo è il prezzo totale del biglietto" + " " + prezzo_biglietto+"€");
}
