//cambiamo il valore del titolo
const tit = document.getElementById("title");
tit.innerText = "Luna"; //ho cambiato il titolo
//inner.Html permette di cambiare il contenuto html di un testo,ma vanno fatti a mano! quindi il foglio html viene aggiornato direttamente sul foglio js e acquisisce tutte le proprietà css
// si può manipolare tutto il css applicato su un e,lemento
const ciao = document.getElementsByClassName("ciao");
ciao[0].style.color = "red";
ciao[0].style.fontStyle = "italic";
//
const makethea = function () {
  const allthea = document.getElementsByTagName("a");
  for (let i = 0; i < allthea.length; i++) allthea[i].style.color = "black";
};
makethea();
//set attribute si usa per cambiare
//src nelle immagini
//alt delle immagini
//href dei link
//cambiare id, assegnarne uno
//manipolazione classi css assegnate a un elemento
//non cambiarlo in inline,
//
const allyellow = function () {
  const p = document.querySelector("footer > p");
  p.classList.add("green");
}; // con classList.add abbiamo aggiunto la classe, con remove la togli
//
allyellow();
//
//
// creazione da zero di nuovi elementi
//crea un nuovo link  nella sezione poi ul
//

const createNewLink = function () {
  const ul = document.getElementsByTagName("ul")[0];
  //abbiamo usato il gettagsname in quanto unico ul
  //possiamo aggiungerlo tramite innertext
  const newA = document.createElement("a"); //a vuota
  newA.innerText = "aprile"; //testo della a
  newA.setAttribute("href", "#aprile"); // primo valore, attributo, secondo valore quello da aggiungere
  //

  const newLi = document.createElement("li");
  newLi.appendChild(newA); //noparentesi
  ul.appendChild(newLi); //noparentesi
};

//
createNewLink(); // in questo modo l'elemento esiste ma non c'è in pagina. è necesario inserire l'elemento. il metodo per inserire l'elemento si chiama appendChild()

//
//S
