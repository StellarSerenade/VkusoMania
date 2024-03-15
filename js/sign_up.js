// Получаем ссылку на поля ввода имени и пароля
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Получаем ссылку на кнопку "Войти"
const loginButton = document.querySelector('.login_form_btn');

// Добавляем обработчик события click для кнопки "Войти"
loginButton.addEventListener('click', function(event) {
    // Проверяем, если одно из полей пустое, то предотвращаем действие кнопки
    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Ошибка: Введите имя и пароль.');
        event.preventDefault();
        return;
    }

    // Получаем введенные значения имени и пароля
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    // Проверяем длину имени
    if (usernameValue.length === 0) {
        alert('Ошибка: Имя не должно быть пустым.');
    } else if (passwordValue.length < 8) {
        // Проверяем длину пароля
        alert('Ошибка: Пароль должен содержать не менее 8 символов.');
    } else if (/[^a-zA-Z0-9]/.test(passwordValue)) {
        // Проверяем, содержит ли пароль специальные символы
        alert('Ошибка: Пароль не должен содержать специальные символы.');
    } else if (/[а-яА-ЯЁё]/.test(passwordValue)) {
        // Проверяем, содержит ли пароль русские символы
        alert('Ошибка: Пароль должен содержать только латинские символы.');
    } else {
        // Если все проверки пройдены, выполняем вход
        alert('Вход выполнен успешно!');
    }
});







// ПЕРЕХОД НА ПОЛЕ РЕГИСТРАЦИИ_________________________________

// Функция для переключения между формами
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var registrationForm = document.getElementById("registrationForm");

    // Переключаем видимость форм
    loginForm.classList.toggle("registration_form");
    registrationForm.classList.toggle("registration_form");
}

// Находим элемент "Зарегистрироваться" и добавляем обработчик события при клике
var toggleLogin = document.getElementById("toggleLogin");
toggleLogin.addEventListener("click", toggleForm);

// Находим элемент "Войти" и добавляем обработчик события при клике
var toggleRegistration = document.getElementById("toggleRegistration");
toggleRegistration.addEventListener("click", toggleForm);








// Получаем ссылку на поля ввода имени, пароля и телефона
const usernameInput2 = document.getElementById('username2');
const passwordInput2 = document.getElementById('password2');
const phoneInput2 = document.getElementById('phone2');

// Получаем ссылку на кнопку "Зарегистрироваться"
const registerButton = document.querySelector('.reg_form_btn');

// Добавляем обработчик события click для кнопки "Зарегистрироваться"
registerButton.addEventListener('click', function(event) {
    // Проверяем, если одно из полей пустое, то предотвращаем действие кнопки
    if (usernameInput2.value.trim() === '' || passwordInput2.value.trim() === '' || phoneInput2.value.trim() === '') {
        alert('Ошибка: Введите имя, пароль и телефон.');
        event.preventDefault();
        return;
    }

    // Получаем введенные значения имени, пароля и телефона
    const usernameValue = usernameInput2.value.trim();
    const passwordValue = passwordInput2.value.trim();
    let phoneValue = phoneInput2.value.trim();
    
   // Проверяем длину имени
   if (usernameValue.length === 0) {
    alert('Ошибка: Имя не должно быть пустым.');
} else if (passwordValue.length < 8) {
    // Проверяем длину пароля
    alert('Ошибка: Пароль должен содержать не менее 8 символов.');
} else if (/[^a-zA-Z0-9]/.test(passwordValue)) {
    // Проверяем, содержит ли пароль специальные символы
    alert('Ошибка: Пароль не должен содержать специальные символы.');
} else if (/[а-яА-ЯЁё]/.test(passwordValue)) {
    // Проверяем, содержит ли пароль русские символы
    alert('Ошибка: Пароль должен содержать только латинские символы.');
} else if (!/^\d{11}$/.test(phoneValue)) {
    // Проверяем, корректность номера телефона
    alert('Ошибка: Введите корректный номер телефона (11 цифр без пробелов и разделителей).');
} else {
    // Добавляем 7 в начало номера телефона, если его нет
    if (!phoneValue.startsWith('7')) {
        phoneValue = '7' + phoneValue;
    }
    // Если все проверки пройдены, выполняем регистрацию
    alert('Регистрация выполнена успешно!');
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
  