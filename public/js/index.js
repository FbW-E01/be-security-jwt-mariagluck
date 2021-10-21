const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!localStorage.getItem("username")){
        location.href = '/login.html';
    } else{
        greeting.innerHTML = `hello ${localStorage.getItem("username")}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    localStorage.clear();
    location.reload();
}