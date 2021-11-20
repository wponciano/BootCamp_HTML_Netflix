$('.owl-carousel').owlCarousel({
    loop:true,/* vai perdir girar o carrosel*/
    margin:20,/*espaçamento entre os filmes do carrosel*/
    nav:false, /*habilita as setinhas para girar o carrosel*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})