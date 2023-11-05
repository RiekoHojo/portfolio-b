console.log("test")

$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); 
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2500); 
});

/*アニメーション違うから修正する*/
$(function() {
  $('.art-header').css({top: '-50px'}).fadeIn(500).animate({
    top: "0px"
  }, 1000, 'swing');
});

$('.art-hamburger').on('click', function(){
  $('.art-hamburger-icon').toggleClass('close');
  $('.sp-nav').slideToggle();
});

