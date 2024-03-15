const loadingMessages = [
    "Ещё чуть-чуть...",
    "Уже загружаем...",
    "Пожалуйста, подождите...",
    "Мы работаем над этим...",
    "Осталось немного...",
    "Всё скоро будет готово...",
  ];
  
  function getRandomLoadingMessage() {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }
  
  function displayLoadingMessage() {
    const loadingMessageDiv = document.createElement('div');
    loadingMessageDiv.textContent = getRandomLoadingMessage();
    loadingMessageDiv.classList.add('loading-message');
    const container = document.querySelector('.encouragement-container');
    container.innerHTML = ''; // Очищаем содержимое контейнера перед добавлением нового сообщения
    container.appendChild(loadingMessageDiv);
  }
  
  window.addEventListener('load', function() {
    let contentLoaded = false;
  
    setTimeout(function() {
      contentLoaded = true;
      checkContentLoaded();
    }, 2000);
  
    function checkContentLoaded() {
      if (contentLoaded) {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        clearInterval(loadingInterval); // Останавливаем бесконечное добавление сообщений
      }
    }
    
    const loadingInterval = setInterval(displayLoadingMessage, 500); // Инициализируем интервал добавления сообщений
  });



    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var glavBar = document.querySelector('.glav_bar');

        if (scrollPosition > 1000) {
            glavBar.classList.add('scrolled');
        } else {
            glavBar.classList.remove('scrolled');
        }
    });








document.getElementById('phoneInput').addEventListener('focus', function() {
    this.placeholder = '';
});

document.getElementById('phoneInput').addEventListener('blur', function() {
    this.placeholder = 'Введите номер телефона';
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
