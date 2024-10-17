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
            localStorage.setItem("loggedInUserId", data.user_id);
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