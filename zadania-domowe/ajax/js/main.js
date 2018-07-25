$(document).ready(function(){
    $('#pobierz_dane').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', 
                 function(data){
//            var newDwiv = $('<div>');
            var paragraf1 = $('<p>');
            var paragraf2 = $('<p>');
            var paragraf3 = $('<p>');
            var paragraf4 = $('<p>');
            
            $('#pobierz_dane').after('<div id="dane-programisty"></div>');
            
            paragraf1.text(data.imie);
            paragraf2.text(data.nazwisko);
            paragraf3.text(data.zawod);
            paragraf4.text(data.firma);
            
            
            $('#dane-programisty').append(paragraf1);
            $('#dane-programisty').append(paragraf2);
            $('#dane-programisty').append(paragraf3);
            $('#dane-programisty').append(paragraf4);
            
        })
    })
})