$( function () {
  // カルーセル
  $('.carousel').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });

  $('a').hover(
    function () {
      $(this).animate({'opacity': 0.6}, 300);
    },
    function () {
      $(this).animate({'opacity': 1.0}, 300);
    }
  );

  // スクロールが100pxに達したらTOPボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-btn').fadeIn();
    } else {
      $('#back-btn').fadeOut();
    }
  });

  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop': position}, speed, 'swing');
    return false;
  });

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

  // worksセクションの画像をクリックしたら、モーダルウインドウ内で拡大表示
  $('.works-section img').click(function() {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンでモーダルウインドウを閉じる
  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    return false
  });

});
