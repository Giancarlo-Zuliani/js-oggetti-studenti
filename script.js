// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studente = {
  'nome' : 'Carlo',
  'cognome': 'Zuliani',
  'eta' : 30
}

for(key in studente){
  console.log(studente[key])
}

var studenti = [
{
  'nome':'Carlo',
  'cognome':'Zuliani',
  'eta' : 30
},
{
  'nome' : 'Matilde',
  'cognome' : 'Malaman',
  'eta' : 25
},
{
  'nome' : 'Sebastiano',
  'cognome':'Zuliani',
  'eta' : 2
},
]

for(i=0;i<studenti.length;i++){
  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
};

var newStudent={
  'nome' : prompt('inserisci il nome del nuovo studente'),
  'cognome' :  prompt('inserisci il cognome del nuovo studente'),
  'eta' :  parseInt(prompt("inserisci l'eta del nuovo studente"))
};
studenti.push(newStudent);

console.log(studenti)
