$(document).ready(function() {

  var nextButton = $('.next');
  var prevButton = $('.prev');
  //mi creo due variabili che siano legate poi alle funzioni per permettermi di cambiare le immagini nello slider

  nextButton.click(function() {
    //al click sul bottone assegno una funzione per i cambi di classe in modo da mostrarmi le immagini in sequenza
    var imgActive = $('.slider-wrapper img.active');
    //collego alla variabile imgActive l'immagine con classe active presente nell'elemento con la classe slider-wrapper
    imgActive.removeClass('active');
    //rimuovo la classe active dall'immagine per poterla poi assegnare all'elemento successivo

    //!! se voglio aggiungo altre classi con la virgola per selezionarle tutte e due insieme
    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');
    //lo lasciamo generico questo perchè qualcunque elemento abbia active la classe deve slittare all'elemento successivo

    //se immagine attiva ha classe last, devo selezionare l'immagine first
    if (imgActive.hasClass('last') == true) {
      //andiamo a specificare una classe (in questo caso last) e se è vero che c'è ci restituisce o true o false
      //lo uso per controllare l'ultimo elemento in modo che quando arrivo all'ultimo elemento la classe active va al primo elemento del loop
      $('.slider-wrapper img.first').addClass('active');
      $('.slider-wrapper i.first').addClass('active');
      //
    } else {
      imgActive.next().addClass('active');
      iActive.next().addClass('active');
    }
  });

  //andare indietro
  prevButton.click(function() {
    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');


    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');

    //se immagine attiva ha classe first, devo selezionare l'immagine last
    if (imgActive.hasClass('first') == true) {
      $('.slider-wrapper img.last').addClass('active');
      $('.slider-wrapper i.last').addClass('active');
    } else {
      imgActive.prev().addClass('active');
      iActive.prev().addClass('active');
    }
  });

  //clicco sul pallino
  //devo far corrispondere il pallino all'immagine
  //trovo l'indice del pallino sul quale clicco e lo uso per trovare anche l'immagine
  $('.nav > i').click(function()  {
    //!!quando facciamo una selezione di una classe del DOM lui cercherà in tutto il documento a differenza della selezione con ID
    //mi seleziono tutte le i figlie di .nav e al click assegno una funzione
    $('.nav > i').removeClass('active');
    //vado a togliere la classe agli elementi i figli di .nav che hanno attualmente la classe .active
    $(this).addClass('active');
    //vado ad assegnare all'elemento attivo (this) su cui è stato eseguito il click la classe .active

    var thisIndex = $(this).index();
    //usiamo la funzione jquery .index per farci ridare un valore di indice dell'elemento selezionato

    //!!devo togliere l'active attivo e metterla nell'elemento selezionato
    $('img.active').removeClass('active');
    //togli da qualsiasi elemento img con classe .active la classe .active
    $('img').eq(thisIndex).addClass('active');
    //vammi a prendere l'immagine che corrisponde all'indice dell'elemento selezionato (in questo caso i) e aggiungigli la classe .active
  });


});
