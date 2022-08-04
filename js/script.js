// Script 1
$(window).on('scroll', function(){
    if($(window).scrollTop() > 200){
        $('.menu') .addClass('bgcol');
    }
    else{
        $('.menu') .removeClass('bgcol')
    }
})