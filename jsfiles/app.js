window.onload = function(){




        var mySwiper = new Swiper ('.digital-slider', {
        direction: 'horizontal',
        setWrapperSize: false,
        autoHeight: true,
        effect: 'slide',
        watchOverFlow: true,
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 120,
        init: true,
        breakpoints :{

            640: {
                slidesPerView:1,
                spaceBetween: 40,
            },
            1100: {
              slidePerView:3,
              spaceBetween:10,
            }
        },
        
        pagination: {
          el: '.swiper-pagination',
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });


        var mySecondSwiper = new Swiper ('.blog-slider', {
        
        direction: 'horizontal',
        setWrapperSize: true,
        autoHeight: true,
        effect: 'slide',
        slideShadows: true,
        watchOverFlow: false,
        slidesPerView: 3,
        spaceBetween: 10    ,
        init: true,
        breakpoints :{

            640: {
                slidesPerView:1,
                spaceBetween: 40,
            }
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-n',
          prevEl: '.swiper-button-p',
        },
       
    });


        var $boxs = $(".grid-item");
        var $btns = $(".btn").on("click", function(e) {

        var active = 
        $btns.removeClass("active")
        .filter(this)
        .addClass("active")
        .data("filter");

        $boxs
        .hide()
        .filter( "." + active )
        .fadeIn(450);
        e.preventDefault();
    });

        $(window).scroll(function(){
        var height = $(window).scrollTop();
        if(height > 30){
          $(".hamburger div").addClass("scroll-down");
        }
        else if(height < 101){
        $(".hamburger div").removeClass("scroll-down");
        }
    });


        $(".hamburger").on("click",function(){
        $(this).toggleClass("change");
        $(".nav-links").slideToggle();
          if($("#hamburger div").hasClass("scroll-down")){
            $(".scroll-down").css("background-color","transparent");
          // }else{
          //   $("#hamburger div").addClass("scroll-down");
          }
    });



}
