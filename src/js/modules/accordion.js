// Если делать крутящуюся кнопку, то мы будем добавлять класс к кнопке, а не к списку

function accordion() {
  const btns = document.querySelectorAll(".mobile-links__parent-btn"); // находим все кнопки которые открывают мобильную навигацию

  // далее отслеживаем клик по каждый кнопке, для этого нам надо их обойти, каждую кнопку объявляю как btn
  btns.forEach(function(btn) {
    //обращаюсь к btn и по событию click запускаем функцию и внутри функции выводим
    btn.addEventListener("click", function() {
      console.log("click");

      // обращаемся по свойству сиблинг (надо выбрать следующий элемент который мы будем раскрывать)
      const content = btn.nextElementSibling;
      console.log(content);
      // СКРЫТИЕ
      // к контенту делаем тоггл (добавление-удаление класса модификатора)
      // когда работает toggle он возвращает true/false, поэтому записываем isOpen
      const isOpen = btn.classList.toggle("active"); // мы нажимаем на кнопку и этот класс модификатор добавляется или убирается
      //надо для иконки добавить класс, чтобы она поворачивалась
      if (isOpen) {
        // ОТКРЫТИЕ
        // мы будем раскрывать этот блок content (mobile-sub), изменяя его высоту. Задам транзишн в scss, чтобы высота менялась плавно
        //   content.style.maxHeight = "200px";
        // высота блока зависит от контента внутри и высота определяется через scroll height(возвращает просто число), поэтому надо добавить +px, потому что будет записываться в css
        content.style.maxHeight = content.scrollHeight + "px";
      } // если он добавлен то true и мы должны его показать
      else {
        content.style.maxHeight = "0px";
      } // если скрыт то false и мы его скрываем убирая высоту
    });
  });
}

export default accordion;

// Если не делать крутящуюся кнопку

// function accordion() {
//   const btns = document.querySelectorAll(".mobile-links__parent-btn"); // находим все кнопки которые открывают мобильную навигацию

//   // далее отслеживаем клик по каждый кнопке, для этого нам надо их обойти, каждую кнопку объявляю как btn
//   btns.forEach(function(btn) {
//     //обращаюсь к btn и по событию click запускаем функцию и внутри функции выводим
//     btn.addEventListener("click", function() {
//       console.log("click");

//       // обращаемся по свойству сиблинг (надо выбрать следующий элемент который мы будем раскрывать)
//       const content = btn.nextElementSibling;
//       console.log(content);
//       // СКРЫТИЕ
//       // к контенту делаем тоггл (добавление-удаление класса модификатора)
//       // когда работает toggle он возвращает true/false, поэтому записываем isOpen
//       const isOpen = content.classList.toggle("mobile-sub--open"); // мы нажимаем на кнопку и этот класс модификатор добавляется или убирается
//       if (isOpen) {
//         // ОТКРЫТИЕ
//         // мы будем раскрывать этот блок content (mobile-sub), изменяя его высоту. Задам транзишн в scss, чтобы высота менялась плавно
//         //   content.style.maxHeight = "200px";
//         // высота блока зависит от контента внутри и высота определяется через scroll height(возвращает просто число), поэтому надо добавить +px, потому что будет записываться в css
//         content.style.maxHeight = content.scrollHeight + "px";
//       } // если он добавлен то true и мы должны его показать
//       else {
//         content.style.maxHeight = "0px";
//       } // если скрыт то false и мы его скрываем убирая высоту
//     });
//   });
// }
