$(document).ready(function () {
    // password visibility
    $('.form-group__toggle-password').on('click', function () {
        var $input = $(this).siblings('input');
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text');
            $(this).attr('aria-label', 'Hide password');
            $(this).addClass('active');
        } else {
            $input.attr('type', 'password');
            $(this).attr('aria-label', 'Show password');
            $(this).removeClass('active');
        }
    });

    // Smooth scroll to top when ".totop" is clicked
    $('.totop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // menu btn

    $('.burger').click(function () {
        $('.menu-col').toggleClass('active');
        $('.header__overlay').toggleClass('active');
    });

    // close menu
    $(document).on('click', '.header__overlay, .closemenu', function () {
        $('.menu-col').removeClass('active');
        $('.header__overlay').removeClass('active');
    });





})