$(document).ready(function(){
    $('.owl-carousel:not(#card-carousel, #promotion-carousel, #iniciante-carousel, #tecnico-carousel, #radar-carousel, #estilo-carousel, #frete-carousel, #elite-carousel, #outlet-carousel)').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    dots: false,
    nav: false
    });

    $('#card-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
    });

    $('#promotion-carousel').owlCarousel({
    loop:false,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    // autoplayTimeout: 3000,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 3
        },
        1000:{
            items:5
        }
    }
    });

    $('#iniciante-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        navText: ["<i class='bi bi-arrow-left-circle-fill text-3xl text-zinc-600 hover:text-emerald-500'></i>","<i class='bi bi-arrow-right-circle-fill text-3xl text-zinc-600 hover:text-emerald-500'></i>"],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 } // 4 kits por vez no desktop
        }
    });

    $('#tecnico-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true, // Aqui ativamos os dots para facilitar a navegação técnica
        autoplay: false, // Jogador técnico gosta de analisar, melhor não rodar sozinho rápido
        navText: ["<i class='bi bi-chevron-left text-2xl text-blue-500'></i>","<i class='bi bi-chevron-right text-2xl text-blue-500'></i>"],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1200: { items: 4 }
        }
    });

    $('#radar-carousel').owlCarousel({
        loop: true,
        margin: 12,
        nav: false, // Sem setas para parecer um feed de ofertas
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 2 },    // No mobile mostramos 2 para gerar volume
            600: { items: 3 },
            1000: { items: 5 }  // No desktop 5 itens pequenos
        }
    });

    $('#estilo-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ["<i class='bi bi-arrow-left text-xl text-purple-500'></i>","<i class='bi bi-arrow-right text-xl text-purple-500'></i>"],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1200: { items: 4 }
        }
    });

    $('#frete-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: false, // Itens caros, o cliente precisa de tempo para ler
        navText: ["<i class='bi bi-arrow-left-square-fill text-3xl text-emerald-700 hover:text-emerald-400 transition-colors'></i>","<i class='bi bi-arrow-right-square-fill text-3xl text-emerald-700 hover:text-emerald-400 transition-colors'></i>"],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1100: { items: 3 } // 3 itens por vez para dar destaque ao tamanho
        }
    });

    $('#elite-carousel').owlCarousel({
        loop: true,
        margin: 0,
        center: true, // Item central fica em destaque
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    $('#outlet-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500, // Mais rápido para passar ideia de movimento
        smartSpeed: 800,
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            1000: { items: 5 }
        }
    });
});