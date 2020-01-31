window.onload = function () {


  var mySwiper = new Swiper('.digital-slider', {
    direction: 'horizontal',
    setWrapperSize: false,
    autoHeight: true,
    effect: 'slide',
    watchOverFlow: true,
    slidesPerView: 3,
    slidesPerGroup: 2,
    spaceBetween: 120,
    init: true,
    breakpoints: {

      640: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1100: {
        slidePerView: 3,
        spaceBetween: 10,
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


  var mySecondSwiper = new Swiper('.blog-slider', {

    direction: 'horizontal',
    setWrapperSize: true,
    autoHeight: true,
    effect: 'slide',
    slideShadows: true,
    watchOverFlow: false,
    slidesPerView: 3,
    spaceBetween: 10,
    init: true,
    breakpoints: {

      640: {
        slidesPerView: 1,
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
  var $btns = $(".btn").on("click", function (e) {

    var active =
      $btns.removeClass("active")
      .filter(this)
      .addClass("active")
      .data("filter");

    $boxs
      .hide()
      .filter("." + active)
      .fadeIn(450);
    e.preventDefault();
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 30) {
      $(".hamburger div").addClass("scroll-down");
      $(".hamburger").css("top", "15px");
    } else if (height < 101) {
      $(".hamburger div").removeClass("scroll-down");
      $(".hamburger").css("top", "35px");

    }
  });


  $(".hamburger").on("click", function () {
    $(this).toggleClass("change");
    $(".nav-links").slideToggle();
    if ($("#hamburger div").hasClass("scroll-down")) {
      $(".scroll-down").css("background-color", "transparent");
      // }else{
      //   $("#hamburger div").addClass("scroll-down");
    }
  });



  // active class'ı ekleme///////////////////////////////////////////

  // $('.nav-links ul li').on("click", function(e) {
  //   e.preventDefault();
  //   $(function () {
  //     setNavigation();
  //   });
    
  //   function setNavigation() {
  //     var path = window.location.pathname;
  //     path = path.replace(/\/$/, "");
  //     path = decodeURIComponent(path);
  //     var href = $(this).attr('href');

  //     var loc = window.location.pathname;

  //     $('.nav-links ul li a').removeClass("activeted");
  //     $(this).addClass("activeted", $(this).attr('href') == loc);
    
  
  //   }
      
  // })




// active class ekleme ikinci versiyon///////


  // $(".nav-links ul li").click(function(){
  // $('.nav-links ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('activeted');
  
  // }) 



  
  // active classs 3.versiyon////////////////////////////////////

  // $('.nav-links ul li').click(function(){
  //   //  e.preventDefault();
  //   $(this).parent().children().not(this).removeClass("activeted")
  //     $(e.target).parent('li').addClass("activeted")
      
  // })


 }
