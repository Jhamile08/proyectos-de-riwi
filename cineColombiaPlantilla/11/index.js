




/* 1 DOCUMENT OBJET MODEL - DOM */
/* ------------------------------------------------------------------------ */
console.log("Hola mundo");

const body = document.body
console.log(body);

const head = document.head
console.log(head);

const domain = document.domain
console.log(domain);

const uri = document.baseURI //URL
console.log(uri);

const formulario = document.forms //Formulario
console.log(formulario);

const formularioHijo = document.forms[0] //Formulario en la posicion 0
console.log(formularioHijo);

const enlaces = document.links //Enlaces
console.log(enlaces);

/* 1.1 seleccionar elementos por su clase - getElementsByClassName('nombreDeLaClase')*/
const navFondo = document.getElementsByClassName('nav-bg');
console.log(navFondo);

const navegacion = document.getElementsByClassName('navegacion-principal');
console.log(navegacion);

const serviciosContenido = document.getElementsByClassName('servicios-contenido');
console.log(serviciosContenido);

/* 1.2 seleccionar elementos por su id - getElementById('nombreDeLaClase') */
const servicios = document.getElementById('services');
console.log(servicios);

/* 1.2.1 seleccionar elementos por nombre etiqueta html - getElementsByTagName('nombreDeLaClase') */
const tituloH1 = document.getElementsByTagName('h1');
console.log(tituloH1);

/* 1.3 Seleccionar elementos con querySelector('nombreDeLaClase') -
Solo el primero - clases, id, tag*/

/* class */
const serviciosClass = document.querySelector('.servicios');//(.nombre) cuando es una clase
console.log(serviciosClass);

const serviciosContent = document.querySelector('.servicios-contenido');
console.log(serviciosContent);

const clientes = document.querySelector('.clientes');
console.log(clientes);

/* id */
const serviciosId = document.querySelector('#services');//(#nombre) cuando es un ID
console.log(serviciosId);


/* tag */
const footerSelector = document.querySelector('footer');//(nombre) cuando es una etiqueta
console.log(footerSelector);

/* 1.4 Seleccionar todos los elementos con querySelectorAll -
todos - clases,id,tag*/
const contenido = document.querySelectorAll('.servicios-contenido');
console.log(contenido);

const enlacesAll = document.querySelectorAll('a');
console.log(enlacesAll);


/* 1.5 Seleccionar y modificar el texto - textContent */
//.innerText;

const titulo = document.querySelector('.titulito h1');
console.log(titulo);
titulo.textContent = 'He is the best duuuuuuuuuuuude';

//.innerHTML;
titulo.innerHTML = `
Hola pez
<p> Chanchito feliz está feliz </p>
`

/* 1.6 Seleccionar y modificar imagenes imagen.src*/
const imagenWeb = document.querySelector('img');
imagenWeb.src = 'programming.jpg';

/* 1.7 Traversing de Padre a Hijo - children[] recorre hacia el hijo*/
const menuTraversing = document.querySelector('.nav-bg');
menuTraversing.children[0].children[3].textContent = 'Hola pez';



/* 1.8 Traversing de Hijo a Padre - parentElement - recorre
hacia el padre*/
const main = document.querySelector('img');
main.parentElement.parentElement.parentElement;
console.log(main);
console.log(main.parentElement.parentElement.parentElement);

main.parentElement.parentElement.parentElement.children[0].textContent = 'Productosss'

/* 1.9 Traversing - hermanos nextElementSibling previousElementSibling*/
const contenedor1 = document.querySelector(".contenedor")
contenedor1.firstElementChild.textContent = "Primero"
contenedor1.lastElementChild.textContent = "ultimo"
/* 1.10. traversing primero - ultimo firstElementChild lastElementChild */
let newProduct = document.createElement("h3")
newProduct.textContent = "metaverso"
let newImg = document.createElement("img");
newImg.src = "img/programming.jpg"
let newP = document.createElement("p")
newP.textContent = "lorem inpsun"
let seccion = document.createElement("section")
seccion.classList.add("servicios-contenido")

seccion.appendChild(newProduct)

seccion.appendChild(newImg)

seccion.appendChild(newP)

const services = document.querySelector("#services")
services.appendChild(seccion)

let newProduct2 = document.createElement("h3")
newProduct2.textContent = "metaverso"
let newImg2 = document.createElement("img");
newImg2.src = "gato.jpg"
newImg2.style.width = "7rem"
let newP2 = document.createElement("p")
newP2.textContent2 = "lorem inpsun"
let seccion2 = document.createElement("section")
seccion2.classList.add("servicios-contenido")

seccion2.appendChild(newProduct2)

seccion2.appendChild(newImg2)

seccion2.appendChild(newP2)

const services2 = document.querySelector("#services")
services2.appendChild(seccion2)




