let navicon = document.querySelector('.nav-user-icon');
let settings_menu = document.querySelector('.settings-menu');
let displaycolorbtn = document.querySelector('#dark-btn');
const hidechat = document.querySelector('.hidechat');
const conversation = document.querySelectorAll('.conversion')

navicon.addEventListener('click', settings_menu_toggle);


function settings_menu_toggle() {
    settings_menu.classList.toggle('settings-menu-hight');

}
displaycolorbtn.onclick = () => {
    displaycolorbtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.setItem('theme', 'light')
    }

}

if (localStorage.getItem('theme') == 'light') {
    displaycolorbtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if (localStorage.getItem('theme') == 'dark') {
    displaycolorbtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else {
    localStorage.setItem('theme', 'light')
}
let toggletracker = true;
hidechat.onclick = function () {
    conversation.forEach(function (item) {
        item.classList.toggle('conversion-hight');

    })
    if (toggletracker) {

        hidechat.innerText = 'Hide Chat';
        toggletracker = false;
    }
    else {
        hidechat.innerText = 'Show Chat';
        toggletracker = true;

    }
}