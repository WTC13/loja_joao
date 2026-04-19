const btnOpen = document.getElementById('open-menu-mobile');
const btnClose = document.getElementById('close-menu-mobile');
const menu = document.getElementById('side-menu-container');
const overlay = document.getElementById('side-menu-overlay');

function toggleMenu() {
    menu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    // Impede o scroll do fundo quando o menu está aberto
    document.body.classList.toggle('overflow-hidden');
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
