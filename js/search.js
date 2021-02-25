$('.input-search').click(function(){
    $('.input-search').css('width', '70px');
});
$(document).click(function(e){
    var div = $('.input-search');
    if (!div.is(e.target)) {
        div.css('width', '45px');
    }
});