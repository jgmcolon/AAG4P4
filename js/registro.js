document.addEventListener('DOMContentLoaded', function(){



    //Select interfaces elements 
const inputFirstname = document.querySelector('#firstname');
const inputLastname  = document.querySelector('#lastname');  
const inputEmail     = document.querySelector('#email');
const inputPassword  = document.querySelector('#password');
const inputSubmit    = document.querySelector('#submit');
const formulario     = document.querySelector('#formulario');

//add eventlistener is aviable once you use the queryselector 
// get an event and when carry through enforce a function 

inputFirstname.addEventListener('blur', validar);
inputLastname .addEventListener('blur', validar);
inputEmail    .addEventListener('blur', validar);
inputPassword .addEventListener('blur', validar);
inputSubmit   .addEventListener('blur', validar);

function validar(e){
//console.log(e.target.parentElement.nextElemtSibling) rrecorrer el DOM
    if(e.target.value.trim() === ''){
      mostarAlerta(`el campo ${e.target.id} es obligatorio` , e.target.parentElement)
      return;
    }
    limpiarAlerta(e.target.parentElement);
}
 
function mostarAlerta(mensaje, referencia){
  limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje; // TextContent add text to an element or get  text  from element , can use inner too but..... 
    error.classList.add('bg-red-600', 'text-white', 'p-1', )



    //push the error to the Form 

    referencia.appendChild(error) // add a new element to the existed one 
}
 function limpiarAlerta(referencia){
    // comprobar si ya existe una alerta
    const alerta = referencia.querySelector('.bg-red-600');
    if(alerta){
        alerta.remove();
    }
 }

})