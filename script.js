//foi utilizado IA para criar o código a seguir, o código foi editado posteriormente para corrigir erros e melhorar a funcionalidade.

function toggleMenuMobile() {
    const linksNav = document.querySelector('.links-nav');
    linksNav.classList.toggle('aberto');
}

const botaoMenuMobile = document.querySelector('.botao-menu-mobile');
if (botaoMenuMobile) {
    botaoMenuMobile.addEventListener('click', toggleMenuMobile);
}

const linksNav = document.querySelectorAll('.links-nav a');
linksNav.forEach(link => {
    link.addEventListener('click', () => {
        const menuMobile = document.querySelector('.links-nav');
        menuMobile.classList.remove('aberto');
    });
});
