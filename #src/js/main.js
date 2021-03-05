/* 
Примеры webpack
Экспорты:
    export let one = 1;
           let two = 2
    export {two}
    export defoult function arr(){ - пеоедаем по дефолту
        console.log('Helo!');
}
Импорты:
    import {one} from './moduls/function'; - именованный синтаксис
    import {one, tow} from './moduls/function'; - именованный синтаксис
    import {one as num} from './moduls/function'; - переименование переменной one в num
    import * as data from './moduls/function'; 
        console log (`${data.one} and ${data.tow}`)
    import arr from './moduls/function'; - принимаем по дефолту
        arr();
*/
// импорт блоков Swiper


import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);



import {
    tabCatalog
} from './moduls/01_tab-catalog';
import {
    sliderMain
} from './moduls/02_slider';


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabCatalog();
    sliderMain({
        sliderName: ".baner__swiper",
        nextArrow: ".baner__next",
        prevArrov: ".baner__prev",
        dots: ".baner__pagination",
        number: 1,
        spaceBetween: 0,
        scrolling: 1
    });
})