
$(window).on('load', function() {
  $('#loader-bg').hide();
});

//モーダル
$('.js-modal-open').on('click', function(){
  var target = $(this).data('target');
  var modal = document.getElementById(target);
  scrollPosition = $(window).scrollTop();

  $('body').addClass('fixed').css({'top': -scrollPosition});
  $(modal).fadeIn();
  return false;
});

// モーダルウィンドウを閉じる
$('.js-modal-close').on('click', function(){
  $('body').removeClass('fixed');
  window.scrollTo( 0 , scrollPosition );
  $('.js-modal').fadeOut();
  return false;
});


//ハンバーガーメニュー
$(function() {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
 
    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});

function showThxMessage() {
  document.googleForm.submit();
  document.getElementById('form').style.display = 'none';
  document.getElementById('thxMessage').style.display = 'block';
  $("#id_button").on("click", function () {
    $(this).parent("form").get(0).reportValidity();
  });
}