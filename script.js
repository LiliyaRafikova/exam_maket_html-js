$(document).ready(function () {
    //--------------------------------------------------------//
    //рекламный баннер
    $('.small a').click(function (e) { //объект для блокировки стандартного поведения ссылки
        e.preventDefault(); //блокировки стандартного поведения    
        if ($('.big img').attr('src') != $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn().css({
                width: '100%',
                height: '100%',
            })
        }
    });
    // Выделение выбранной картинки (css - св-ва)
    $('.small a img').click(function () {
        $(this).fadeTo(600, 0.6);
    });
//--------------------------------------------------------//
//скрытое меню
    $('.gamb').click(function(){
        $('.links').css(
            {
            left:'300px',
            'z-index': 1,
        });
    }).dblclick(function () {
        $('.links').css(
            {
            left:'-350px',           
            });
    });

//--------------------------------------------------------//
     //открытие окна авторизации
     $('.btnLogin').click(function () {
              $('.forms').fadeIn();
    });  
     //открытие окна регистрации
    $('.btnReg').click(function () {
        $('.forms2').fadeIn();
}); 
     //открытие модального окна по кнопке download 
     $('.btnDownload').click(function () {
            $('.download').fadeIn();
    }); 
//--------------------------------------------------------//
//скрытый текст открывается по кнопке LearnMore
$('.btnHiddenText').click(function () {
      $('.hidden_text').toggle(1000);
})
//--------------------------------------------------------//
     //закрытие модальных окон нажатие на крестик
     $('.close-popup').click(function () {
        $('.forms').fadeOut(); 
        $('.forms2').fadeOut();   
        $('.download').fadeOut();   
    });
});