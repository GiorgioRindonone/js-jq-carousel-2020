$(document).ready(function() {

  var nextButton = $('.next');
  var prevButton = $('.prev');

  nextButton.click(function() {
    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');

    //aggiungo altre la virgola per selezionarle tutte e due insieme
    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');

    //se immagine attiva ha classe last, devo selezionare l'immagine first
    if (imgActive.hasClass('last') == true) {
      $('.slider-wrapper img.first').addClass('active');
      $('.slider-wrapper i.first').addClass('active');
    } else {
      imgActive.next().addClass('active');
      iActive.next().addClass('active');
    }
  });

  //andare indietro
  prevButton.click(function() {
    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');

    //aggiungo altre la virgola per selezionarle tutte e due insieme
    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');

    //se immagine attiva ha classe last, devo selezionare l'immagine first
    if (imgActive.hasClass('first') == true) {
      $('.slider-wrapper img.last').addClass('active');
      $('.slider-wrapper i.last').addClass('active');
    } else {
      imgActive.prev().addClass('active');
      iActive.prev().addClass('active');
    }
  });

});
