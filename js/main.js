function toggleMenu() {
    let menu = document.querySelector('#headerMenu');
    let closeIcon = document.querySelector('#close-icon');
    let menuIcon = document.querySelector('#menu-icon');

    if (menu.classList.contains('active') == true) {
        menu.classList.remove('active');

        menuIcon.style.display='block';
        closeIcon.style.display='none';

    } else {
        menu.classList.add('active');
        menuIcon.style.display='none';
        closeIcon.style.display='block';
    }
}

function validateForm(event) {
    event.preventDefault();
    let email = document.querySelector('#email');
    if (email.value == "") {
        document.querySelector('#emailerror').style.display = "block";
        return false;
    }
    let password = document.querySelector('#password');
    if (password.value == "") {
        document.querySelector('#passworderror').style.display = "block";
        return false;
    }
    return true;
}

function emailChange() {
    document.querySelector('#emailerror').style.display = "none";
}

function passwordChange() {
    document.querySelector('#passworderror').style.display = "none";
}