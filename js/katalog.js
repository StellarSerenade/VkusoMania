filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





 // Обработчик событий сближения
 window.addEventListener('zoom', function(event) {
  // Ваш код для изменения порядка элементов при сближении
  // Пример: перемещение элементов на одну строку вниз
  // Получите все элементы категорий и продуктов
  var categories = document.querySelectorAll('.left_side .btn');
  var products = document.querySelectorAll('.right_site .filterDiv');

  // Переместите первый элемент категории вверх
  var firstCategory = categories[0];
  var lastProduct = products[products.length - 1];

  // Переместите последний продукт вниз
  lastProduct.parentNode.insertBefore(lastProduct, lastProduct.nextSibling);

  // Переместите первый элемент категории вверх
  lastProduct.parentNode.insertBefore(firstCategory, lastProduct);
});




// Проверка для телефона в футер_________________________________________________
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное действие отправки формы

  var phone = document.getElementById('phoneInput').value.trim();

  // Проверяем, содержит ли номер телефона только цифры и имеет правильную длину
  if (!/^\d{11,}$/.test(phone)) {
      alert('Пожалуйста, введите корректный номер телефона (не менее 11 цифр).');
  } else {
      alert('Сообщение со ссылкой успешно отправлено вам на телефон.');
      // Здесь можно добавить код для отправки сообщения на телефон
  }
});




document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('.menu');
  var menuClose = document.querySelector('.menu-close');

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  menuClose.addEventListener('click', function() {
    menu.classList.remove('active');
  });
});
