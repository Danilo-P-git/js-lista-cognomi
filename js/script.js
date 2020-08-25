// Inserisco i nomi all'interno di un array
var nomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// Faccio inserire il nome all'utente
var nomeInserito = prompt("Inserisci un nome");
// Inserisco il nome dell'utente all'interno del array
nomi.push(nomeInserito);
nomi.sort(function (a, b) {
  return a.localeCompare(b);
});

for (var i = 0; i < nomi.length; i++) {
  var containerNomi = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = containerNomi + "<li>" + nomi[i] + "</li>";
}
// Metto i nomi in ordine
