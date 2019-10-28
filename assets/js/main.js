$( document ).ready(function() {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect:true
      });
      $('.multiple-items').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="next arrows"><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="prev arrows"><i class="fas fa-angle-left"></i></button>'
      });
      $(".dropdown-menu li a").click(function(){
  
        $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
        
      });

      $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
          $(this).addClass("parent");
        };
      })
    
      $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggle();
      });
      adjustMenu();      
      

});    


$(window).bind('resize orientationchange', function() {
  ww = document.body.clientWidth;
  adjustMenu();
});

var adjustMenu = function() {
  var ww = document.body.clientWidth;
  if (ww < 768) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent").unbind('click').bind('click', function(e) {
      // must be attached to anchor element to prevent bubbling
      e.preventDefault();
      $(this).parent("li").toggleClass("hover");
    });
  } 
  else if (ww >= 768) {
    $(".toggleMenu").css("display", "none");
    $(".nav").show();
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind('click');
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
      // must be attached to li so that mouseleave is not triggered when hover over submenu
      $(this).toggleClass('hover');
    });
  }
}