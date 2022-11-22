$(document).ready(() => {
  $('.navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar__list').toggleClass('active');
  });
});
