$(document).ready(function(){
    /*nav to fixed
    $(window).scroll(function(){
        var $menu = $("nav");

            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });    
    */
    /*top-slider*/
      $('.top-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    
     /*scroll to category*/
    $("nav ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
    $(".mobile-menu").click(function(){
           $("ul.main").toggleClass("block");
            $(".mobile-menu").toggleClass("active");
        });
    
    /*feedback*/
         $('input#name, input#email, textarea#message').unbind().blur( function(){
             
             var id = $(this).attr('id');
             var val = $(this).val();

           switch(id)
           {

                 case 'name':
                    var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val))
                    {
                       $(this).addClass('not_error');
                       $(this).next('.error-box').text('Принято')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                    }
                  
                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').html('&bull; поле "Имя" обязательно для заполнения')
                                                  .css('color','red')
                                                  .animate({'paddingLeft':'10px'},400)
                                                  .animate({'paddingLeft':'5px'},400);
                    }
                break;

                case 'email':
                   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).addClass('not_error');
                      $(this).next('.error-box').text('Принято')
                                                .css('color','green')
                                                .animate({'paddingLeft':'10px'},400)
                                                .animate({'paddingLeft':'5px'},400);
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').html('&bull; поле "Email" обязательно для заполнения')
                                                 .css('color','red')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                   }
               break;

              case 'message':
                  if(val != '' && val.length < 5000)
                  {
                     $(this).addClass('not_error');
                     $(this).next('.error-box').text('Принято')
                                               .css('color','green')
                                               .animate({'paddingLeft':'10px'},400)
                                               .animate({'paddingLeft':'5px'},400);
                  }
                  else
                  {
                     $(this).removeClass('not_error').addClass('error');
                     $(this).next('.error-box').html('&bull; поле "Текст письма" обязательно для заполнения')
                                               .css('color','red')
                                               .animate({'paddingLeft':'10px'},400)
                                               .animate({'paddingLeft':'5px'},400);
                  }
              break;
                   
           }
         });        
});
