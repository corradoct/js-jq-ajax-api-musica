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
        var cds = dataResponse.response;

        var source = document.getElementById("entry-template").innerHTML;
        var template = Handlebars.compile(source);

        for (var i = 0; i < cds.length; i++) {
          var context = cds[i];
          var html = template(context);
          $('.cds-container').append(html);
        }

        $('#genreSelect').on('change',
          function() {
            var selectedGenre = $(this).val();
            console.log(selectedGenre);

            if (selectedGenre === '') {
              $('.cd').removeClass('hidden');
            } else {
              $('.cd').each(
                function() {
                  if ($(this).find('.genre').text().toLowerCase() === selectedGenre) {
                    $(this).removeClass('hidden');
                  } else {
                    $(this).addClass('hidden');
                  }
                }
              );
            }
          }
        );
      },
      error: function() {
        alert('C\'è stato un\'errore');
      }
    }
  );
});
