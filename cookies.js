
// Actually uses local storage instead of cookies, because it is more modern

function setCookie(name, value, days) {
    localStorage.setItem(name, value);
}

function getCookie(name) {
    return localStorage.getItem(name);
}

function resetCookie(name) {
    localStorage.removeItem(name);
}
