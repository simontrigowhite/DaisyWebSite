
function setCookie(name, value, days) {
    localStorage.setItem(name, value);
}

function getCookie(name) {
    return localStorage.getItem(name);
}

function deleteCookie(name) {
    localStorage.removeItem(name);
}
