const imagenNavegador = document.querySelector(".logo");
imagenNavegador.src = "img/cc.jpg";

const placeholder1 = document.querySelector("header form input");
placeholder1.placeholder = "Buscar película";

const enlaces = document.querySelector("nav");
enlaces.innerHTML =
  "<a>Cartelera</a> <a>Pronto</a> <a>Cineco Alternativo</a> <a>Comidas</a>";

const textoMedellin = document.querySelector("header p");
textoMedellin.textContent = "Medellín";

const cinePelicula = document.querySelector("h2");
cinePelicula.innerHTML = "Cine Colombia - Peliculas";

const imgGato = document.querySelector(".container");
imgGato.children[1].children[0].children[0].src = "img/gato.jpg";

const imgBallea = document.querySelector(".container");
imgBallea.children[1].children[1].children[0].src = "img/ballena.jpg";

const imgBailar = document.querySelector(".container");
imgBailar.children[1].children[2].children[0].src = "img/houston.jpg";

const imgConejo = document.querySelector(".container");
imgConejo.children[1].children[3].children[0].src = "img/conejo.jpg";

const textoGato = document.querySelector(".container");
textoGato.children[1].children[0].children[1].textContent = "Gato con Botas";

const textoBallena = document.querySelector(".container");
textoBallena.children[1].children[1].children[1].textContent = "La Ballena";

const textoHouston = document.querySelector(".container");
textoHouston.children[1].children[2].children[1].textContent =
  "Whitney Houston";

const textoConejo = document.querySelector(".container");
textoConejo.children[1].children[3].children[1].textContent =
  "Academia de Conejos";[]

const piePagina = document.querySelector("footer");

piePagina.children[0].style.color = "White";
piePagina.children[0].style.backgroundColor = "rgb(31, 31, 96)";
piePagina.children[0].style.position = "fixed";
piePagina.children[0].style.left = "0";
piePagina.children[0].style.bottom = "0";
piePagina.children[0].style.width = "100%";
piePagina.children[0].style.textAlign = "center";
piePagina.children[0].textContent = "Todos los derechos reservados";

const main = document.querySelector("main")
main.parentElement.childElementCount(0)