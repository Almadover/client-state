window.onload = function() {
    const userCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('loggedInUserId='));
    
    if (userCookie) {
        const userId = userCookie.split('=')[1];
        document.getElementById("user_id").textContent = userId;
        document.getElementById("welcome").classList.add("welcome_active");
        document.getElementById("signin").classList.remove("signin_active");
    }
};

document.getElementById("signin__btn").addEventListener("click", function(event) {
    event.preventDefault();
  
    const formData = new FormData(document.getElementById("signin__form"));
  
    fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Сохраним информацию о пользователе в куки
            document.cookie = `loggedInUserId=${data.user_id}; expires=Sun, 31 Dec 2024 12:00:00 UTC; path=/`;
            document.getElementById("user_id").textContent = data.user_id;
            document.getElementById("welcome").classList.add("welcome_active");
            document.getElementById("signin").classList.remove("signin_active");
        } else {
            document.getElementById("signin__form").reset();
            alert("Неверный логин/пароль");
        }
    })
    .catch(error => {
        console.error('Произошла ошибка при выполнении запроса:', error);
    });
});