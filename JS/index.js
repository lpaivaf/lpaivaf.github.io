// alert("Teste de ligação")

// Slides

let contador = 1;

setInterval(function () {
    document.getElementById("radio" + contador).checked = true;
    contador++;

    if (contador > 3) {
        contador = 1;
    }

}, 3000)


// Whatsapp

function enviarwhatsapp() {
    let numerodetelefone = "+351920305354";
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let mensage = document.querySelector('.mensagem').value;

    var url = "https://wa.me/" + numerodetelefone + "?text="
        + "*Name :*" + name + "%0a"
        + "*Email :*" + email + "%0a"
        + "*Mensagem :*" + mensage + "%0a%0a"
        + "*Contato - GitHub*";

    window.open(url, '_blank').focus();

    // Limpa os campos do formulário
    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.mensagem').value = '';
}
