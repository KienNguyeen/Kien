var button = document.getElementById('login');
button.addEventListener('click', function() {
})
document.getElementById('loginForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    if (username === 'username' && password === 'password') {
        localStorage.setItem('username', username);
        var greetingElement = document.createElement('p');
        greetingElement.textContent = 'xin chào, ' + username + '!';
        document.body.appendChild(greetingElement);
    } else {
        alert('sai tên người dùng hoặc mật khẩu. Vui lòng thử lại');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    if (username) {
        var greetingElement = document.createElement()
    }
});