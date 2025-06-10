// attraversamento e manipolazione del dom
//i documenti del web prevedono un livello di dinamicità impossizibile da realizzare solo con html e css
//per ottenere questo livello di interazione è necessario introdurre js nella realizzazione delle pafine
//js serve ad esempio x mostrare o nascondere sezioni al clik del mouse, ingrandire o rimpicciolire gli elementi, cambiare colore a titoli e sfondi
//effetti visivi vari ecc
//al fine di rendere le pagine web dinamiche bisogna capire l'attraversamento e la manipolazione del dom
//
//
//bisogna capire come selezionare gli elementi e poi manipolarli

//DOM TRAVERSING:( attraversamento del dom, cioè selezionare gli elementi della pagina via js)
//vediamo come raggiu ngere i tag del foglio html attraverso js
//
//il documento html è universalmente tracciabile tramite un selezionatore  ja di nome document
//

//un selezionatore è id(quin di bisogna dare un id a una oparte di html)
//per selezionare un elemtno con il suo id bisogna fare:
const myh1 = document.getElementById("title"); // le parentesi indicano il nome dell'id
//si salva tutto in variabilege
console.log(myh1);
const myfooter = document.getElementById("date");
console.log(myfooter);
//
//altro attributo per recuperare un attributo: con class
//per trovare un elemento delineato in html con classe
const section = document.getElementsByClassName("section"); // tornerà un array di elementi
console.log(section);

// selezionare tramite il nome del tag
const title = document.getElementsByTagName("h3");
console.log(title);
//
const main = document.getElementsByTagName("main");
console.log(main);
//anche se è stato trovato solo un elemento il browser rimanderà lo stesso un array ma con solo un elemento
// abbiamo il querySelector e il querySelectorAll
// se i metodi visti fino ad ora non riescono a recuperare gli elementii(troviamo h3 dentro la seconda sezione)
const h3 = document.querySelector("section+section h3");
console.log(h3); //questo metodo viene usato con i selettori particolari di css
const list = document.getElementsByClassName("special");
console.log(list); //
const all = document.querySelectorAll("ul>li > a.special");
console.log(all); // in questo caso i risultati vengono restituiti in una struttura simile ad un array ma senza molti dei metodi tipici di un array. in una node list abbiasmo foreach ma non map, filter, reduce.
//l'html collection(quello che ridà con elementsbyclass o tag, ha il for)
//
//
//ogni riferimento a elementi html recuperati possiede tante proprietà
console.log(all[0].parentElement); //ogni elemento ha un parent element, in modo da trovare il genitore dell'elemento.
//ogni elemento html ha anche i riferimenti ai figli diretti
console.log(document.getElementsByTagName("main")[0].children);
//ci sono alcune proprietà che permettono dio scrivere il contenuto html di quell'elemento
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
