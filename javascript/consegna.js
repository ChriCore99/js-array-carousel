const caroselloImmagini = [
    './img/01.webp', 
    './img/02.webp', 
    './img/03.webp', 
    './img/04.webp', 
    './img/05.webp'
];

const imagesContainerDOMElement = document.querySelector('.images-container');

imagesContainerDOMElement.classList.add 

for (let i = 0; i < caroselloImmagini.length; i++){

    let immagineCaricata = caroselloImmagini[i];
    
    let fotoSfondo = `
    <div class="foto-sfondo invisibile">
        <img src="${immagineCaricata}" alt="">
    </div>
    `;

    imagesContainerDOMElement.innerHTML += fotoSfondo;
}

let fotoVisibileIndex = 0;

const similArrayFotoSfondo = document.getElementsByClassName('foto-sfondo');

similArrayFotoSfondo[fotoVisibileIndex].classList.add('visibile');

const btnScorrimentoSu = document.querySelector('.btn-su');

 const btnScorrimentoGiu = document.querySelector('.btn-giu');

btnScorrimentoSu.addEventListener('click', function(){
    console.log('click div su');

    similArrayFotoSfondo[fotoVisibileIndex].classList.remove('visibile');

    fotoVisibileIndex++;

    similArrayFotoSfondo[fotoVisibileIndex].classList.add('visibile');
})

btnScorrimentoGiu.addEventListener('click', function(){
    console.log('click div giu');

    similArrayFotoSfondo[fotoVisibileIndex].classList.remove('visibile');

    fotoVisibileIndex--;

    similArrayFotoSfondo[fotoVisibileIndex].classList.add('visibile');
})