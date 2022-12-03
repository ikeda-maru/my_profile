$( function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // メニューのホバー時に色を薄くする
  $('.menu-item').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.menu-item').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  // スクロールが100pxに達したらTOPボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-btn').fadeIn();
    } else {
      $('#back-btn').fadeOut();
    };
  })

  // セクションをフェードインさせる
  $(window).scroll(function() {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function() {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  $('.works-section img').click(function() {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    return false
  });

});
