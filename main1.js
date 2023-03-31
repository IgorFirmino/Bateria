function tocarSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();
   
   if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
   }
}

const listadeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listadeTeclas.length ; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (e) {
        console.log(e)
        tocarSom(idAudio)
    
}
    tecla.onkeydown = function (e) {
        //console.log(e.code);
        //console.log(e);
        if( e.code == 'Space' || e.code == 'Enter'){
           tecla.classList.add('ativa'); 
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}