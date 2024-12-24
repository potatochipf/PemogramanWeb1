
/* Funcion Spinner */

window.onload= function(){

    const spinner = document.getElementById('spinner');
    const ocultar = document.getElementById('hidden');

    setTimeout(() => {

       ocultar.style.overflowY="scroll";
       spinner.style.visibility='hidden';
       spinner.style.opacity='0'; 

    }, 2000);
    

};