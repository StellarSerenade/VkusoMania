document.getElementById('submitButton').addEventListener('click', function(event) {
    var email = document.getElementById('emailInput').value.trim();

    // Проверяем, содержит ли адрес электронной почты символ @
    if (!email.includes('@')) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        event.preventDefault(); // Отменяем отправку формы
    } else if (/[^a-zA-Z0-9@._-]/.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        event.preventDefault(); // Отменяем отправку формы
    } else if (!email) {
        alert('Пожалуйста, введите ваш e-mail.');
        event.preventDefault(); // Отменяем отправку формы
    } else {
        alert('Спасибо, что подписались!');
        // Здесь можно добавить код для отправки формы на сервер
    }
});








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
  