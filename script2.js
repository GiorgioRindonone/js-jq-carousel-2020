//per far si che le immagini scorrano anche con i tasti della tastiera

$(document).ready(function() {

  var nextButton = $('.next');
  var prevButton = $('.prev');
  //mi creo due variabili che siano legate poi alle funzioni per permettermi di cambiare le immagini nello slider

  nextButton.click(function() {
    nextImg();
  });



  //andare indietro
  prevButton.click(function() {
    prevImg();
  });



  $(document).keydown(function(){
    // console.log(event.which, event.keyCode);
    if (event.wich == 39  || event.keyCode == 39) {
      nextImg();
    } else if (event.wich == 37 || event.keyCode == 37) {
      prevImg();
    }
  })

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
