window.onload = function () {

  // ANASAYFA SLİDERLARI///////////////////////////////

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

  var ThirthSwiper = new Swiper('.ref-slider', {
    direction: 'horizontal',
    setWrapperSize: false,
    autoHeight: true,
    effect: 'slide',
    watchOverFlow: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 150,
    init: true,
    breakpoints: {

      640: {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1
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




  // ANASAYFA FİLTER BLOGU////////////////////////////////////

  var $boxs = $(".grid-item");
  var $btns = $(".btn").on("click", function (e) {

    var active =
      $btns.removeClass("active2")
      .filter(this)
      .addClass("active2")
      .data("filter");

    $boxs
      .hide()
      .filter("." + active)
      .fadeIn(450);
    e.preventDefault();
  });

  // WORK-SAMPLES FİLTER////////////////////////////////////

  var $boxs2 = $(".grid-list");
  var $btns2 = $(".btn2").on("click", function (e) {

    var activework =
      $btns2.removeClass("active2")
      .filter(this)
      .addClass("active2")
      .data("filter2");

    $boxs2
      .hide()
      .filter("." + activework)
      .fadeIn();
    e.preventDefault();
  });



  // HAMBURGER SCROLL////////////////////////////////////////

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


  // NAVİGATİON BAR ACTİVE CLASS///////////////////////

  $('.nav-links ul li > a').filter(function () {
    return this.href === location.href;
  }).addClass('activeted');


// FORM GONDERİLDİ ANİMASYON/////////////////////////////////////////////

  var formelement = document.querySelector(".form")
  var name = document.getElementById("contact-name");
  var email = document.getElementById("contact-email");
  var phonenm = document.getElementById("contact-phone");
  var head = document.getElementById("contact-head");
  var msg = document.getElementById("contact-message");
  
  formelement.addEventListener("submit", function (e) {
    
    setTimeout(function () {
      $('.showmessage').fadeOut()
    }, 2000)
    $(".showmessage").css("display", "block");
    name.value = ""
    email.value = ""
    phonenm.value = ""
    head.value = ""
    msg.value = ""
    e.preventDefault()
  })


  
}
// ANASAYFA POP UP ////////////////////////////////////////////////////////////////

$(function () {

  $(".grid-item img").click(function () {
  
    $('.show').on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
      e.stopPropagation();
      return false;
    })
    var $src = $(this).attr("src");
    $(".show").fadeIn()
    $(".img-show img").attr("src", $src);
    console.log("afa")

    $("span, .overlay").click(function () {
      $(".show").fadeOut();
  });
  });
  
  
}); 
