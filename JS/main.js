console.log("test")

/*トップロゴアニメーション*/
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); 
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2500); 
});

/*ヘッダー上からアニメーション*/
$(function() {
  $('.art-header').css({top: '-50px'}).fadeIn(500).animate({
    top: "0px"
  }, 1000, 'swing');
});

/*ハンバーガーメニュー・sp-nav 右から出てくるアニメーション*/
/*$('.art-hamburger').on('click',function(){
  if($(this).hasClass('active')) {
  }
});*/

$('.art-hamburger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('art-header').removeClass('open');/*ヘッダーも動かしたい。。。*/ 
    $('nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('art-header').addClass('open');
    $('nav').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.art-hamburger').removeClass('active');
    $('main').removeClass('open');
    $('art-header').removeClass('open');
    $('nav').removeClass('open');
  }
});