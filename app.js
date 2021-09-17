
function generator(){    
const prova = document.querySelector(".contenitore");
let colori = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let vuoto = [];

for (let i = Math.floor(Math.random() * 16); vuoto.length < 6; i = Math.floor(Math.random() * 16)) {
    vuoto.push(colori[i]);
}

  let b = "#" + vuoto.join("");

prova.style.background = b;
}
