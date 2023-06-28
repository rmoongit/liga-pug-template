import {iosVhFix} from './utils/ios-vh-fix';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {Burger} from './modules/burger';
import {StickyHeader} from './modules/sticky-header';

import './modules/slider';
import {initParallax} from './modules/parallax';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();

    const burger = new Burger();
    burger.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
  });

  initParallax();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia('(min-width:1024px)');
// const headerElement = document.querySelector('[data-header]');

// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//     headerElement.classList.remove('is-open');
//   } else {
//     return;
//   }
// };
// breakpoint.addListener(breakpointChecker);

// используйте .closest(el)
