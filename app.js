document.addEventListener('DOMContentLoaded',function(){

    let caja = document.getElementById('caja');
    setTimeout(function(){
        caja.firstElementChild.style.animation = 'parrafo 3s infinite linear';
        caja.lastElementChild.style.animation = 'parrafo2 3s infinite linear';
    },2000)


});