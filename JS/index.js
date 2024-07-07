// alert("Teste de ligação")

// Slides

let contador = 1;

setInterval(function () {
    document.getElementById("radio" + contador).checked = true;
    contador ++;

    if ( contador > 3) {
        contador = 1;
    }

}, 3000)


// Whatsapp

/* function enviarwhatsapp() {
let nome = document.querySelector('input[name="name"]').value;
let email = document.querySelector('input[name="email"]').value;
let mensagem = document.querySelector('textarea[name="mensage"]').value;
}*/