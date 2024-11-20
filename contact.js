// Код для изменения цвета фона (существующий функционал)
const colorButton = document.getElementById('changeColorBtn');

if (colorButton) { // Проверка наличия кнопки
    document.body.style.backgroundColor = localStorage.getItem('bgColor') || 'rgb(140, 139, 139)';

    colorButton.addEventListener('click', () => {
        const colors = ["purple", "pink", "green", "red", "blue", "#231414"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        localStorage.setItem('bgColor', randomColor);
    });
}

// Код для формы логина
const loginPopupBtn = document.getElementById('loginPopupBtn');
const loginPopup = document.getElementById('loginPopup');
const closeLoginPopup = document.getElementById('closeLoginPopup');
const loginForm = document.getElementById('loginForm');

function toggleLoginPopup() {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    if (isLoggedIn) {
        logout();
    } else {
        loginPopup.style.display = 'flex';
    }
}

if (loginPopupBtn) {
    loginPopupBtn.addEventListener('click', toggleLoginPopup);
}

if (closeLoginPopup) {
    closeLoginPopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (username === registeredUsername && password === registeredPassword) {
            localStorage.setItem('loggedInUser', username);
            loginPopupBtn.textContent = `Logout ${username}`;
            loginPopup.style.display = 'none';
            showLogoutButton();
        } else {
            alert("Invalid username or password.");
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('loggedInUser');
    if (savedUsername) {
        loginPopupBtn.textContent = `Logout ${savedUsername}`;
        showLogoutButton();
    }
});

window.addEventListener('click', function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Код для регистрации пользователя
function registerUser() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("Registration successful! You can now log in.");
}

// Функции для входа и выхода
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const registeredUsername = localStorage.getItem("registeredUsername");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (username === registeredUsername && password === registeredPassword) {
        localStorage.setItem("loggedInUser", username);
        loginPopupBtn.textContent = `Logout ${username}`;
        loginPopup.style.display = 'none';
        showLogoutButton();
    } else {
        alert("Invalid username or password.");
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully.");
    hideLogoutButton();
    loginPopupBtn.textContent = 'Login';
}

function showLogoutButton() {
    document.getElementById("logoutButton").classList.remove("d-none");
    document.getElementById("loginForm").classList.add("d-none");
    document.getElementById("registrationForm").classList.add("d-none");
}

function hideLogoutButton() {
    document.getElementById("logoutButton").classList.add("d-none");
    document.getElementById("loginForm").classList.remove("d-none");
    document.getElementById("registrationForm").classList.remove("d-none");
}

// Валидация формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        this.querySelectorAll('input, textarea').forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        if (!isValid) event.preventDefault();
    });
}

// Всплывающее окно подписки
const subscribeBtn = document.getElementById('subscribeBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.getElementById('closeBtn');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });
}

// Код для отображения текущей даты и времени
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = now.toLocaleString('en-US', options);
    const dateTimeElement = document.getElementById('dateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = formattedDate;
    }
}

setInterval(displayDateTime, 1000);

// Код для показа текущего времени
const showTimeBtn = document.getElementById("showTimeBtn");
const timeDisplay = document.getElementById("timeDisplay");

if (showTimeBtn && timeDisplay) {
    showTimeBtn.addEventListener("click", function() {
        const currentTime = new Date().toLocaleTimeString();
        timeDisplay.textContent = "Current Time: " + currentTime;
    });
}

// Код для проверки электронной почты
const emailForm = document.getElementById('emailForm');
const emailError = document.getElementById('emailError');

if (emailForm && emailError) {
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
            alert('Form has been sent');
        }
    });
}

// Код для переключения темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Применение сохраненной темы
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        themeToggleBtn.textContent = 'Switch to Light Theme';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.navbar').classList.toggle('dark-mode');

            // Сохранение текущей темы
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);

            // Изменение текста кнопки
            themeToggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
        });
    }
});
