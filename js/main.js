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

    // order list - btns
    $('.sort-btns button').click(function () {
        $('.sort-btns button').removeClass('active');
        $(this).addClass('active');
    })

    // ===========ask the designer - attach files===========
    var $fileInput = $('.file-input');
    var $droparea = $('.file-drop-area');

    // highlight drag area
    $fileInput.on('dragenter focus click', function () {
        $droparea.addClass('is-active');
    });

    // back to normal state
    $fileInput.on('dragleave blur drop', function () {
        $droparea.removeClass('is-active');
    });

    // change inner text
    $fileInput.on('change', function () {
        var filesCount = $(this)[0].files.length;
        var $textContainer = $(this).prev();

        if (filesCount === 1) {
            // if single file is selected, show file name
            var fileName = $(this).val().split('\\').pop();
            $textContainer.text(fileName);
        } else {
            // otherwise show number of files
            $textContainer.text(filesCount + ' files selected');
        }
    });

    // selects
    if ($('.askdesselect').length) {
        $('.askdesselect').select2({
            placeholder: "",
            minimumResultsForSearch: Infinity,
            dropdownParent: $('#askdesigner')
        });

    }

    // show modification tool
    $('.explain-btn').click(function () {
        $('.uploadfromtel').removeClass('hide');
        $('.explain-box').hide();
    })
    $('.uploadfromtel .hideblock').click(function () {
        $('.uploadfromtel').addClass('hide');
        $('.explain-box').show();
    })



})