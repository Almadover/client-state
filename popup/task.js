function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + "=" + value + ';' + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

const closeBtn = document.querySelector('.modal__close_times');
const popup = document.getElementById('subscribe-modal');

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    setCookie('popupShow', 'true', 1);
});

if (getCookie('popupShow') !== 'true') {
    popup.style.display = 'block';
}