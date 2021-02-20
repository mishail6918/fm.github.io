$(document).ready(function(){
    $('.popup-button').click(function(){
        $('.popup').addClass('show');
    });
    $('.close-button').click(function(){
        $('.popup').removeClass('show');
    });
});