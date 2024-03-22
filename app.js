let ListaDestinacija=document.getElementById("lista-destinacija");
console.log(ListaDestinacija);

let title=document.getElementsByClassName("title");
console.log(title);

let elementListe=document.getElementsByTagName("li");
console.log(elementListe);

let wrap=document.querySelector("#wrapper");
console.log(wrap);


let destinacija=document.querySelectorAll(".naziv");
console.log(destinacija);

let destinacije=document.querySelector("#lista-destinacija");
console.log("roditelj mu je", destinacije.parentNode);
console.log("deca su mu", destinacije.children);

let sibling=document.querySelector("#lista-destinacija");
console.log("Next sibling is",sibling.nextElementSibling);
console.log("Previous sibling is",sibling.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log(banner.nodeName);
console.log(banner.nodeType);
console.log(banner.nodeValue);

let destinacija1=document.querySelector(".naziv");
destinacija1.textContent="Beograd, Srbija";

let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
        const li=e.target.parentNode;
        ul=li.parentNode;
        ul.removeChild(li);
    })
})

let forma=document.forms["dodaj-destinaciju"];

forma.addEventListener("submit", function(e){
e.preventDefault()

    let vrednost=document.forms["dodaj-destinaciju"]["polje"].value;
    console.log(vrednost);
})