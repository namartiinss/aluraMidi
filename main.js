/* No nosso caso a função tocaSom está recebendo o ID de um elemento que vai ser 
   buscado pelo querySelector e então reproduzido o seu som através da função play. */
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto 
while (contador < listaDeTeclas.length) {

    //isso vai nos retornar uma lista que é um tipo de dado
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //A cada elemento vamos acessar seu onclick e atribuir uma função anônima e aí sim chamará função tocaSom.
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    contador = contador + 1;
}
