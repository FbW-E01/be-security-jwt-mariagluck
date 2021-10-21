
const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
});

window.onload = () => {
    if(localStorage.username){
        location.href = '/';
    }
};

// form validation

const username = document.querySelector('.username') || null;
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');
// const email = document.querySelector('.email');

if(username == null){ //or return, it means value is open
    submitBtn.addEventListener('click', () => {
        const config = {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                // email: email.value,
                password: password.value
            })
        };
        fetch('/login', config)
          .then(res => res.json())
          .then(data => {
              validateData(data);
          })
    })
} else {  //or return

    submitBtn.addEventListener('click', () => {
        const config = {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: username.value,
                // email: email.value,
                password: password.value
            })
        };
        fetch('/register', config)
          .then(res => res.json())
          .then(data => {
            validateData(data);
        })
    })
}