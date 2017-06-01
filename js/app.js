$(".animsition").animsition({
  inClass: 'fade-in-left-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'nav a',
  inDuration: 1500,
  outDuration: 600
});

$('.sticky').sticky();
$('.about-greeting').sticky({
  topSpacing:30
});
// $('.greeting').sticky({
//   topSpacing:30
// });

$('.sticky').on('sticky-start', function(){
  $('.about-greeting').text('Awwww Cute Puppy!');
});
$('.sticky').on('sticky-end', function(){
  $('.about-greeting').text('About Us');
});


// stick more than one element to the top of the window.
// add an email link to the sticky text when scrolled to, then removes when scrolled up
