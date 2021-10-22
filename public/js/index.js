const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!localStorage.getItem("username")){
        location.href = '/login.html';
    } else {
        location.href = '/index.html';
        greeting.innerHTML = `Hi ${localStorage.getItem("username")}!`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    localStorage.clear();
    location.reload();
}