
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
