var anni = parseInt(prompt('Inserisci quanti anni hai'));
var kilometri = parseInt(prompt('inserisci i kilometri da effettuare'));
var prezzokm = (kilometri * 0.21);
var prezzo = prezzokm;
if (anni < 18){
    var sconto = (prezzokm * 20 / 100);
    var prezzo = (prezzokm - sconto);
} else if (anni > 64) {
    var sconto = (prezzokm * 40 / 100);
    var prezzo = (prezzokm - sconto);
};
document.getElementById('prezzo').innerHTML='il prezzo del tuo biglietto è' + ' ' + prezzo;
