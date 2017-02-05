
$(document).ready(function () {

            $('#project-carousel').owlCarousel({
                loop: true, //Зацикливаем слайдер
                autoplay: true, //Автозапуск слайдера
                smartSpeed: 1000, //Время движения слайда
                autoplayTimeout: 10000, //Время смены слайда

                responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0: {
                        items: 1
                    }
                }

            });
        });


$(document).ready(function(){
		$("#btn-up").on("click","a", function (event) {
		    event.preventDefault();
		    var id  = $(this).attr('href'),
		        top = $(id).offset().top;
		    $('body,html').animate({scrollTop: top}, 1500);
		});
	});



$(document).ready(function () {
   
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
