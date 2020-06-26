// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music

$(document).ready(function() {
	$.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(dataResponse) {
        var disco = dataResponse.response;

        var source = document.getElementById("entry-template").innerHTML;
        var template = Handlebars.compile(source);

        for (var i = 0; i < disco.length; i++) {
          var context = disco[i];
          var html = template(context);
          $('.cds-container').append(html);
        }
      },
      error: function() {
        alert('C\'è stato un\'errore');
      }
    }
  );
});
