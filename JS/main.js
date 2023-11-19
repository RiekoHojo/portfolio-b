console.log("test")

/*トップロゴアニメーション*/
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(800);
  },250); 
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2000); 
});

/*ヘッダー上からアニメーション*/
$(function() {
  $('.art-header').css({top: '-50px'}).fadeIn(500).animate({
    top: "0px"
  }, 1000, 'swing');
});

/*ヘッダー高さアニメーション */
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.art-header').addClass('small-header');
    } else {
      $('.art-header').removeClass('small-header');
    }
  });
});

/*ハンバーガーメニュー・sp-nav 右から出てくるアニメーション*/
$('.art-hamburger-icon').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('active');
    $('nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('.art-header').addClass('active');
    $('.art-hamburger').removeClass('open');
    $('nav').addClass('open');
  }
});
$('.art-hamburger').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.art-hamburger').removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('active');
    $('nav').removeClass('open');
  }
});


/*ふぁっと出現アニメーション*/
function BlurTextAnimeControl() {
	$('.content-box,.map-area,.map-text-box,.lead-box').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
    var offset = windowHeight / 2; 
		if (scroll >= elemPos - offset){
		$(this).addClass('blur');
    }
	});
}
$(window).scroll(function () {
  BlurTextAnimeControl();
});
$(window).on('load', function () {
  BlurTextAnimeControl();
});

/*リザーブ*/
$(function() {
  var $btn = $('.box-container');
  var $trigger = $('#box-container-trigger');
  $btn.hide();
  function checkIfInView() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var triggerPos = $trigger.offset().top;
    if (scrollPos + windowHeight > triggerPos && scrollPos < triggerPos) {
      $btn.fadeIn(200);
    }
  }
  $(window).on('scroll', checkIfInView);
  
  $('.box-container-icon-btn').click(function() {
    $btn.fadeOut(400);
  });
});


//1240