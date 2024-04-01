const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var userName = event.target.name.value;
    sessionStorage.setItem("userName", userName);
    window.location.href = "home.html";
});