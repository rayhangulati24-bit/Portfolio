document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
  var track = carousel.querySelector('.track');
  var slides = carousel.querySelectorAll('.slide');
  if (slides.length < 2) { carousel.setAttribute('data-single', ''); return; }
  var index = 0;
  function show(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + index * 100 + '%)';
  }
  carousel.querySelector('.prev').addEventListener('click', function () { show(index - 1); });
  carousel.querySelector('.next').addEventListener('click', function () { show(index + 1); });
});
