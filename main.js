// Hamburger Menu JS + jquery

$('i.fa-bars').click( // Punto all'icona hamburger tramite i selettori css
  function () {
    $('.hamburger-menu').addClass('active'); // Aggiunto la classe già definita col css contenente il display: block;
  }
);
// Stessa cosa di sopra, ma rimuovo la classe per ritornare alla situazione di partenza
$('i.fa-times').click( // Questa volta punto alla (X) che fa parte del menu hamburger esteso
  function () {
    $('.hamburger-menu').removeClass('active');
  }
);
