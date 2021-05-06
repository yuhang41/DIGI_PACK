let user = document.querySelector('.userButton');
let navbar = document.querySelector('.navbar_icon');
let navbarTarget = document.querySelector('.navbar_target');
    navbarTarget.onclick = function(){
        navbar.classList.toggle('active')
    }
    user.onclick = function(){
        document.querySelector('.user_login').classList.toggle('active')
    }