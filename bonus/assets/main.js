
//Chiedere all'utente quanti km vuole percorrere e salvo la risposta in una variablie

var km = parseFloat(prompt("Quanti km vuoi percorrere?"));


//Chiedere all'utente quanti anni ha e mi salvo la risposta in una variablie

var eta = parseInt(prompt("Quanti anni hai?"));

//Chiedere all'utente quale giorno vuole partire e mi salvo la risposta in una variablie

var data = prompt("Quale giorno vuoi partire? formato dd/mm")

//Scrivo nel Dom la data scritta dall'utente

document.getElementById('data').innerHTML = data;

//Chiedere all'utente in quale ora vuole partire e mi salvo la risposta in una variablie

var ora = prompt("In quale ora vuoi partire? formato hh/mm")

//Scrivo nel Dom l'ora scritta dall'utente

document.getElementById('ora').innerHTML = ora;

//Chiedere all'utente da quale citta vuole partire e mi salvo la risposta in una variablie

var citta_part = prompt("Da quale città vuoi partire?")

//Scrivo nel Dom la ciità scritta dall'utente

document.getElementById('citta_part').innerHTML = citta_part;

//Chiedere all'utente la città di destinazione mi salvo la risposta in una variablie

var citta_arrivo = prompt("Scegli la città di destinazione?")

//Scrivo nel Dom la cità scritta dall'utente

document.getElementById('citta_part').innerHTML = citta_arrivo;

//Chiedere all'utente in quale ora vuole arrivare e mi salvo la risposta in una variablie

var ora_arrivo = prompt("In quale ora vuoi arrivare? formato hh/mm")

//Scrivo nel Dom l'ora scritta dall'utente

document.getElementById('ora_arrivo').innerHTML = ora_arrivo;





var prezzo_biglietto = km * (0.21);

// console.log(prezzo_biglietto);

//Ora faccio la verifica e applico lo sconto in base al età

if (eta < 18) {
   var sconto = (prezzo_biglietto * 20) / 100 ;
  console.log("questo è lo sconto applicato in base alla tua età"+ " "+ sconto +"€");
  prezzo_biglietto-=sconto;
  document.getElementById('prezzo_biglietto').innerHTML = "Il prezzo del biglietto è:" +  prezzo_biglietto + "€";
  console.log("Questo è il prezzo totale del biglietto applicando lo sconto"+ " " + prezzo_biglietto+"€");
}
else if (eta > 65) {
  sconto = (prezzo_biglietto * 40) / 100;
  console.log("questo è lo sconto applicato in base alla tua età"+ " "+  sconto+"€");
  prezzo_biglietto-=sconto;
    document.getElementById('prezzo_biglietto').innerHTML ="Il prezzo del biglietto è:" + prezzo_biglietto + "€";
  console.log("Questo è il prezzo totale del biglietto applicando lo sconto" + " " + prezzo_biglietto+"€");
}else{
    document.getElementById('prezzo_biglietto').innerHTML = "Il prezzo del biglietto è:" + prezzo_biglietto + "€";
  console.log("Questo è il prezzo totale del biglietto" + " " + prezzo_biglietto+"€");
}
