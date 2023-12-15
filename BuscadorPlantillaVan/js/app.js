console.log(coders);
// crear dinamicamente los valores del select con nombres coders
coders.forEach((coder)=>{
    const opcion = document.createElement("option");
    opcion.value = coder.nombre
    opcion.textContent = coder.nombre
    document.querySelector("#nombre").appendChild(opcion);
    const opcion3 = document.createElement("option");
    opcion3.value = coder.clan
    opcion3.textContent = coder.clan
    document.querySelector("#clanRiwi").appendChild(opcion3);
})
// establecer un rango de edad

const max = 45;
const min = 15;
for (let i = min; i < max; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.querySelector("#edad").appendChild(option);
    
}
// event lisener
document.addEventListener("DOMContentLoaded", ()=>{
    showCoders(coders);
})
// funcion para inyectar directamente al html 
function showCoders(coders){
    // selector cards
    const contenedorTarjeta = document.querySelector("#tarjetas");
    coders.forEach((coder)=> {
        const coderHtml = document.createElement('p');
        coderHtml.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="img/${coder.imagen}" class="card-img-top" alt="${coder.nombre}">
        <div class="card-body">
          <h5 class="card-title">${coder.nombre}</h5>
          <p class="card-text">${coder.detalle}.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `
        contenedorTarjeta.appendChild(coderHtml)
    })

}