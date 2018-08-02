$(document).ready(function () {
    window.onscroll = function () {
        stickyNav();
    }

    var navbar = document.getElementById('navigation');
    var offset = navbar.offsetTop + 1;

    function stickyNav() {
        if (window.pageYOffset >= offset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
});