function tocaSom (seletorAudio) {
  document.querySelector(seletorAudio).play();
}

const listDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listDeTeclas.length; contador++) {

    const tecla = listDeTeclas[contador];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}