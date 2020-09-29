$('.filter-item').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.filter-button ul li').click(function () {
  $('.filter-button ul li').removeClass('active');
  $(this).addClass('active');
  var selector = $(this).attr('data-filter');
  $('.filter-item').isotope({
    filter: selector
  });
  return false;
});