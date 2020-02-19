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

  //  var inputs = document.querySelectorAll(".form-inputs input")
  //  var form = document.querySelector(".form")
  //  var btn = document.querySelector(".btn1")
  //  var b = document.querySelector(".showmessage")

  //  btn.addEventListener('sumbit'),(e) => {
  //   if(inputs.values !== ''){
      
  //    console.log(b)
  //    e.preventDefault();
  //   }
    
  //  }
  
   

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


  $('.nav-links ul li a').filter(function(){
    return this.href === location.href;
  }).addClass('activeted');

 

  //ANASAYFA İŞLERİMİZ CONTAİNERININ GRİD YAPISININ YENİDEN OLUSTURULMASI///////////


//    $vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//    $vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//   // console.log($vw)
  
//   var index = document.querySelectorAll('.works-2 ul li a');
//   var viewport = $vw

//   if(viewport > 650){
//   $('.works-2').on('click', function(e){
//       $('.works-3').css("display","flex")
//       var a = e.target
//       var b = index[0]
//       if(a === b){
//         $('.works-3').css("display", "grid")
//       }
//   })
// }
 }



