// Introduccion a eventos

const btnOk = document.querySelector("#btnOk")
btnOk.addEventListener('click', ()=>{
    alert("haz dado click en el boton ok")
})
const btnCancel = document.querySelector("#btnCancel")
btnCancel.addEventListener('click', showMessage)

function showMessage(){
    
if (btnCancel.classList.contains('boton')){
    btnCancel.classList.remove('boton');
    btnCancel.textContent = "cancelado";
    btnCancel.style.backgroundColor = "red"
    btnCancel.style.color = "white"
} else{
    btnCancel.textContent = "Aprovado"
    btnCancel.classList.add('boton');
    btnCancel.style.backgroundColor = "green"
    btnCancel.style.color = "white"
}}
document 
