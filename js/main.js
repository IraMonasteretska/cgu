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
    // selects main page
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "",
            minimumResultsForSearch: Infinity,
        });

        $('#sort').select2({ dropdownAutoWidth: true, minimumResultsForSearch: Infinity, });
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




    // enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $('[data-bs-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });

    // show notifications
    $('.action--alerts').click(function () {
        $('.alerts-dropdown').toggleClass('active');
    })

    $('.alerts-dropdown__close').click(function () {
        $('.alerts-dropdown').removeClass('active');
    })

    $('.show-alerts__btn').click(function () {
        $(this).parents('.alerts__box').find('.alerts-wrap').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.alerts-dropdown').length && !$target.closest('.action--alerts').length) {
            $('.alerts-dropdown').removeClass('active');
        }
    });

    // Layout Elements popup
    $('.layout-result .close-button').click(function () {
        $('.layout-result').addClass('hide');
    })
    $('.show-result').click(function () {
        $('.layout-result').removeClass('hide');
    })

    $('.plcreate').click(function () {
        $('.planlayout-modal ').fadeIn();
        $('.planlayout-overlay').fadeIn();
    });
    $('.close-layout').click(function () {
        $('.planlayout-modal ').fadeOut();
        $('.planlayout-overlay').fadeOut();
    })




    // filter 
    $('.filter-btn').click(function () {
        $('.plans-bodysect').toggleClass('filter-hide');
        $('.showfilter').toggleClass('show');

        let $extraBlock = $('#extra-block');

        if ($extraBlock.length) {
            $extraBlock.remove();
        } else {
            $('body').append('<div id="extra-block" class="extra-block"></div>');
        }
    });

    $(document).on('click', '#extra-block', function () {
        $(this).remove();
        $('.plans-bodysect').toggleClass('filter-hide');
        $('.showfilter').toggleClass('show');
    });


    $('.filter-box__title').click(function () {
        $(this).toggleClass('open');
        $(this).next('.filter-box__body').slideToggle();
    });

    $('.close-filter').click(function () {
        $('#extra-block').remove();
        $('.plans-bodysect').toggleClass('filter-hide');
    });


    // Range slider
    if ($('.js-range-slider').length) {
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 500000,
            from: 10000,
            to: 300000,
            skin: 'round',
            hide_from_to: true,
            hide_min_max: true,

            onChange: function (data) {
                $('#slider-input-from').val(data.from);
                $('#slider-input-to').val(data.to);
            },
        });
    }

    $('.range-slider-input').change(function () {
        let inputId = $(this).attr('id');
        let inputValue = $(this).val();

        let my_range = $(".js-range-slider").data("ionRangeSlider");

        if (inputId === 'slider-input-from') {
            my_range.update({
                from: inputValue
            });
        } else {
            my_range.update({
                to: inputValue
            });
        }
    });

    // Filter - more btn
    $('.fiter-more_btn').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.checkboxes-item').toggleClass('active');
    });

    // Layout Elements
    $('.elements-title').click(function () {
        $('.elements-title').addClass('hide-box');
        $(this).removeClass('hide-box');

        $('.elements-box').addClass('hide');
        $(this).next($('.elements-box')).removeClass('hide');
    });

    $(".js-range-slider2").ionRangeSlider({
        type: "single",
        min: 0,
        max: 100,
        skin: 'round',
        hide_from_to: true,
        hide_min_max: true,
    });

    // toggle view plans
    $('.toggleviiew__btn').click(function () {
        $('.toggleviiew__btn').removeClass('active');
        $(this).addClass('active');
    });

    // show search dropdown
    $('.save-search__btn').click(function () {
        $(this).next('.pc-search__dropdown').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.save-search__btn').length && !$target.closest('.savedd').length) {
            $('.savedd').hide();
        }
    });

    $('.load-search__btn').click(function () {
        $(this).next('.pc-search__dropdown').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.load-search__btn').length && !$target.closest('.loaddd').length) {
            $('.loaddd').hide();
        }
    });

    // add to favorite
    $('.favorite').click(function () {
        $(this).toggleClass('active');
    });

    // card menu
    $('.menubtn').click(function () {
        $(this).next('ul').toggleClass('active');
    });

    // QUICK SEARCH
    $('.minus').click(function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count).change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1).change();
        return false;
    });


    // Recently viwed
    if ($('.swiper').length) {
        var swiper = new Swiper(".recently-plans", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    }

    // compare radio btn
    $('#switch1').on('change', function () {
        $('.compare-btn').toggleClass('show', this.checked);
    });

    // compare button
    // $('.compare-btn').on('click', function () {
    //     $(this).toggleClass('active');

    //     if ($(this).hasClass('active')) {
    //         $(this).find('.compare-btn__text').text('Remove Compare');
    //     } else {
    //         $(this).find('.compare-btn__text').text('Add to Compare');
    //     }
    // });



    // $(document).on('click', '.compare-btn', function () {
    //     $(this).toggleClass('active');

    //     const activeCount = $('.compare-btn.active').length;
    //     const $compareLink = $('.compareplans-link');

    //     if (activeCount >= 2) {
    //         $compareLink.addClass('show');
    //     } else {
    //         $compareLink.removeClass('show');
    //     }
    // });


    $('.compare-btn').on('click', function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).find('.compare-btn__text').text('Remove Compare');
        } else {
            $(this).find('.compare-btn__text').text('Add to Compare');
        }

        const activeCount = $('.compare-btn.active').length;

        const $compareLink = $('.compareplans-link');

        if (activeCount >= 2) {
            $compareLink.addClass('show');
            $('.compare-text').addClass('hide');
        } else {
            $compareLink.removeClass('show');
            $('.compare-text').removeClass('hide');
        }
    });

    // remove notification baner
    $('.notification-banner .close').click(function () {
        $('.notification-banner').remove();
    })





})