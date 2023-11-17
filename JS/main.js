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

/*ハンバーガーメニュー・sp-nav 右から出てくるアニメーション*/

$('.art-hamburger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('open');
    $('nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('art-hamburger').removeClass('open');
    $('nav').addClass('open');
  }
});
$('.art-hamburger').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.art-hamburger').removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('open');
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
		}else{
		$(this).removeClass('blur');
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

$(function(){
  var $btn = $('.box-container');
  var isHidden = true;
  $btn.hide();
    $(window).scroll(function () {
    if( $(this).scrollTop() > 5700 ) {
      if( isHidden ) {
        $btn.stop(true,true).fadeIn(200);
        isHidden = false;
      }
    } else {   
      if( !isHidden ) {
        $btn.stop(true,true).fadeOut();
        isHidden = true;
      }
    }
  });
});