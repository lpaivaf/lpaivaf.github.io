// Troca de conteúdo na página
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('.input');
    const sobre = document.querySelector('.sobre_mim');
    const projetos = document.querySelector('.projetos');
    const curriculo = document.querySelector('.curriculo ');
    const sections = document.querySelectorAll('.container_main_content article');

    function mostrarSeção(id) {
        // Inicialmente, ocultar todas as seções
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar a seção correspondente ao botão de rádio selecionado
        if (id === 'home' || id === 'sobre') {
            sobre.style.display = 'block';
        } else if (id === 'projetos') {
            projetos.style.display = 'block';
        } else if (id === 'curriculo') {
            curriculo.style.display = 'block';
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedId = this.id;
            mostrarSeção(selectedId);
        });
    });

    // Mostrar a seção 'sobre' ao abrir a página
    mostrarSeção('sobre');
});


//Tamas - dark e light mode

document.addEventListener('DOMContentLoaded', function () {
    const html = document.documentElement;

    // Verifica o modo atual e ajusta os ícones ao carregar a página
    const dark_moon = document.querySelector('.dark_moon');
    const light_sun = document.querySelector('.light_sun');

    if (html.classList.contains("light")) {
        dark_moon.style.display = 'block';
        light_sun.style.display = 'none';
    } else {
        dark_moon.style.display = 'none';
        light_sun.style.display = 'block';
    }
});

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const dark_moon = document.querySelector('.dark_moon');
    const light_sun = document.querySelector('.light_sun');

    if (html.classList.contains("light")) {
        dark_moon.style.display = 'block';
        light_sun.style.display = 'none';
    } else {
        dark_moon.style.display = 'none';
        light_sun.style.display = 'block';
    }
}


// Rolar para o topo da página quando clicado na seção desejada do menu
document.querySelectorAll('.input').forEach(button => {
    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



// Whatsapp mensage
function enviarwhatsapp(){
    const url = "https://wa.me/920305354?text=*Contato%20GitHub*";
    window.open(url, '_blank').focus();
}

