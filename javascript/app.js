const caroselloImmagini = [
    './img/01.webp', 
    './img/02.webp', 
    './img/03.webp', 
    './img/04.webp', 
    './img/05.webp'
];

const fotoSfondoDOMElement = document.querySelector('.foto-sfondo');

fotoSfondoDOMElement.innerHTML =`<img src="./img/01.webp" alt="">`;

for (let i = 0; i < caroselloImmagini.length; i++){
    console.log(caroselloImmagini[i]);
}






const btnScorrimentoSu = document.querySelector('.btn-su');

const btnScorrimentoGiu = document.querySelector('.btn-giu');

btnScorrimentoSu.addEventListener('click', function(){
    console.log('click div su');
})

btnScorrimentoGiu.addEventListener('click', function(){
    console.log('click div giu');
})
