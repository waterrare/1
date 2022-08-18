$(function() {
// aを押すと、そのリンク内に移動する
  $('a').click(function() {
    $('.nav-links.open,hamburger').fadeOut();
  });   
  // 🍔を押すと、navが出る
  $('.hamburger').click(function() {
    $('.nav-links.open').fadeIn();
  });
  // aを押すと、ハンバーガーは消えずに済む
  $('a').click(function() {
    $('.hamburger').trigger('click');
  });
  
});

    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('open');

      hamburger.classList.toggle('toggle');
    });


