// импорт базы Swiper
import Swiper from 'swiper';

//
const sliderMain = ({sliderName, nextArrow, prevArrov, dots, number = 1, spaceBetween = 0, scrolling = 1}) => {
    new Swiper(sliderName, {
        //стрелки
        navigation: {
            nextEl: nextArrow,
            prevEl: prevArrov,
        },
        //Точки
        pagination: {
            el: dots,
            type: 'bullets',
            clickable: true,
        },
        //автопереключение
        autoplay: {
            //пауза
            delay: 3000,
            //отключить во время ручного управления
            disableOnInteraction: false,
        },
        //циклическое пролистывание
        loop: true,
        //количество слайдов для показа
        slidesPerView: number,
        spaceBetween: spaceBetween,
        //количество пролистываемых слайдов
        slidesPerGroup: scrolling,
        //автоматическое отключение слайдера, если слайдов недостаточно
        watchOverflow: true,
        //обновление Swiper
        //при изменении элементов слайдера
        observer: true,
        //при изменении родительских элементов
        observerParents: true,
        //при изменении дочерних элементов
        observerSlideChildren: true,

    });
}

export {
    sliderMain
};