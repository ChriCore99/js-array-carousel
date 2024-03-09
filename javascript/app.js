const caroselloImmagini = [
    './img/01.webp', 
    './img/02.webp', 
    './img/03.webp', 
    './img/04.webp', 
    './img/05.webp'
];

const fotoSfondoDOMElement = document.querySelector('.foto-sfondo');   
    
let index = 0;
    
fotoSfondoDOMElement.innerHTML =`<img src="${caroselloImmagini[index]}" alt="">`;

const btnScorrimentoSu = document.querySelector('.btn-su');

const btnScorrimentoGiu = document.querySelector('.btn-giu');

btnScorrimentoSu.addEventListener('click', function(){
    console.log('click div su');
    index++
    fotoSfondoDOMElement.innerHTML =`<img src="${caroselloImmagini[index]}" alt="">`;
})

btnScorrimentoGiu.addEventListener('click', function(){
    index--
    fotoSfondoDOMElement.innerHTML =`<img src="${caroselloImmagini[index]}" alt="">`;
})
