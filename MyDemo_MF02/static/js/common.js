$(document).ready(function() {
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.right-menu').toggleClass('actived');
        $('.lang,.search,.hamburger').toggleClass('onTop');

        $('.logo').toggleClass('logo-hide');
    });
    
    $('.lang ul>li').click(function(){
        $('.lang ul').toggleClass('actived');
    });

    $('.search-block .icon').click(function(){
        $('.search-block').addClass('actived');
        $('.search-block.actived input').focus();
    });
    $('.search-block input').on('blur', function(){
        $('.search-block').removeClass('actived');
    });
});