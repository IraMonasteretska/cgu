$(document).ready(function () {
    // password visibility
    $('body').on('click', '.form-group__toggle-password', function () {
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
    $('body').on('click', '.totop', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // menu btn
    $('body').on('click', '.burger', function () {
        $('.menu-col').toggleClass('active');
        $('.header__overlay').toggleClass('active');
    });

    // close menu
    $(document).on('click', '.header__overlay, .closemenu', function () {
        $('.menu-col').removeClass('active');
        $('.header__overlay').removeClass('active');
    });

    // order list - btns
    $('body').on('click', '.sort-btns button', function () {
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
    $('body').on('click', '.explain-btn', function () {
        $('.uploadfromtel').removeClass('hide');
        $('.explain-box').hide();
    })
    $('body').on('click', '.uploadfromtel .hideblock', function () {
        $('.uploadfromtel').addClass('hide');
        $('.explain-box').show();
    })

    // enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    // show notifications
    $('body').on('click', '.action--alerts', function () {
        $('.alerts-dropdown').toggleClass('active');
    })

    $('body').on('click', '.alerts-dropdown__close', function () {
        $('.alerts-dropdown').removeClass('active');
    })

    $('body').on('click', '.show-alerts__btn', function () {
        $(this).parents('.alerts__box').find('.alerts-wrap').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.alerts-dropdown').length && !$target.closest('.action--alerts').length) {
            $('.alerts-dropdown').removeClass('active');
        }
    });

    // Layout Elements popup
    $('body').on('click', '.layout-result .close-button', function () {
        $('.layout-result').addClass('hide');
    })
    $('body').on('click', '.show-result', function () {
        $('.layout-result').removeClass('hide');
    })
    $('body').on('click', '.plcreate', function () {
        $('.planlayout-modal ').fadeIn();
        $('.planlayout-overlay').fadeIn();
    });
    $('body').on('click', '.close-layout', function () {
        $('.planlayout-modal ').fadeOut();
        $('.planlayout-overlay').fadeOut();
    })

    // filter 
    $('body').on('click', '.filter-btn', function () {
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

    $('body').on('click', '.filter-box__title', function () {
        $(this).toggleClass('open');
        $(this).next('.filter-box__body').slideToggle();
    });

    $('body').on('click', '.close-filter', function () {
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

    $('body').on('change', '.range-slider-input', function () {
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
    $('body').on('click', '.fiter-more_btn', function () {
        $(this).toggleClass('active');
        $(this).parent('.checkboxes-item').toggleClass('active');
    });

    // Layout Elements
    $('body').on('click', '.elements-title', function () {
        $('.elements-title').addClass('hide-box');
        $(this).removeClass('hide-box');

        $('.elements-box').addClass('hide');
        $(this).next($('.elements-box')).removeClass('hide');
    });

    if ($('.js-range-slider2').length) {
        $(".js-range-slider2").ionRangeSlider({
            type: "single",
            min: 0,
            max: 100,
            skin: 'round',
            hide_from_to: true,
            hide_min_max: true,
        });
    }

    // toggle view plans
    $('body').on('click', '.toggleviiew__btn', function () {
        $('.toggleviiew__btn').removeClass('active');
        $(this).addClass('active');
    });

    // show search dropdown
    $('body').on('click', '.save-search__btn', function () {
        $(this).next('.pc-search__dropdown').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.save-search__btn').length && !$target.closest('.savedd').length) {
            $('.savedd').hide();
        }
    });

    $('body').on('click', '.load-search__btn', function () {
        $(this).next('.pc-search__dropdown').toggle();
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.load-search__btn').length && !$target.closest('.loaddd').length) {
            $('.loaddd').hide();
        }
    });

    // add to favorite
    $('body').on('click', '.favorite', function () {
        $(this).toggleClass('active');
    });

    // card menu
    $('body').on('click', '.menubtn', function () {
        $(this).next('ul').toggleClass('active');
    });

    // QUICK SEARCH
    $('body').on('click', '.minus', function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count).change();
        return false;
    });

    $('body').on('click', '.plus', function () {
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
    $('body').on('change', '#switch1', function () {
        $('.compare-btn').toggleClass('show', this.checked);
    });

    // compare button
    $('body').on('click', '.compare-btn', function () {
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
    $('body').on('click', '.notification-banner .close', function () {
        $('.notification-banner').remove();
    })

    // plan details - gallery
    if ($('.swiper').length) {
        var swiper = new Swiper(".gallery2", {
            loop: true,
            spaceBetween: 12,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            speed: 700,
            breakpoints: {
                768: {
                    spaceBetween: 20,
                },
            },
        });
        var swiper2 = new Swiper(".gallery1", {
            loop: true,
            spaceBetween: 10,
            speed: 700,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    // Recently plans - plan detaisl
    if ($('.swiper').length) {
        var swiper = new Swiper(".recently-plans2", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 700,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
    }

    if ($('.images-group').length) {
        document.querySelectorAll('.images-group img').forEach(img => {
            img.addEventListener('click', () => {
                const popup = document.querySelector('.img-popup');
                const popupImg = popup.querySelector('img');
                popupImg.src = img.src;
                popup.classList.add('active');
            });
        });

        document.querySelector('.img-popup .close').addEventListener('click', () => {
            document.querySelector('.img-popup').classList.remove('active');
        });

        document.querySelector('.img-popup').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.classList.remove('active');
            }
        });
    }

    // message
    if ($('.attach').length) {

        const attachBtn = document.querySelector('.attach');
        const fileInput = document.querySelector('#fileInput');
        const attachedFilesContainer = document.querySelector('.attached-files');
        const chatSection = document.querySelector('.chat-section');

        let selectedFiles = [];

        attachBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            const files = Array.from(fileInput.files);
            selectedFiles.push(...files);
            renderPreviews();
        });

        // Drag & drop
        ['dragenter', 'dragover'].forEach(eventName => {
            chatSection.addEventListener(eventName, (e) => {
                e.preventDefault();
                chatSection.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            chatSection.addEventListener(eventName, (e) => {
                e.preventDefault();
                chatSection.classList.remove('dragover');
            });
        });

        chatSection.addEventListener('drop', (e) => {
            const files = Array.from(e.dataTransfer.files);
            selectedFiles.push(...files);
            renderPreviews();
        });

        function renderPreviews() {
            attachedFilesContainer.innerHTML = '';

            selectedFiles.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.classList.add('file-item');

                // img
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = e => {
                        fileItem.innerHTML = `
          <img src="${e.target.result}" alt="preview">
          <button class="remove">&times;</button>
        `;
                        addRemoveHandler(fileItem, index);
                    };
                    reader.readAsDataURL(file);
                }
                // not img
                else {
                    fileItem.classList.add('non-image');
                    fileItem.innerHTML = `
        <span>${file.name}</span>
        <button class="remove">&times;</button>
      `;
                    addRemoveHandler(fileItem, index);
                }

                attachedFilesContainer.appendChild(fileItem);
            });
        }

        function addRemoveHandler(fileItem, index) {
            fileItem.querySelector('.remove').addEventListener('click', () => {
                selectedFiles.splice(index, 1);
                renderPreviews();
            });
        }

    }

    // test tour
    $('body').on('click', '.tourbtn', function () {
        const isFilterHidden = $('.plans-bodysect').hasClass('filter-hide');
        const windowWidth = $(window).width();
        let filterStepElement;

        if (windowWidth <= 991) {
            filterStepElement = isFilterHidden
                ? document.querySelector('.filter')
                : document.querySelector('.showfilter');
        } else {
            filterStepElement = isFilterHidden
                ? document.querySelector('.showfilter')
                : document.querySelector('.filter');
        }

        introJs().setOptions({
            steps: [
                {
                    title: 'Start the Tour',
                    intro: "This Tour button will help you discover the most popular and helpful features of our site and the tools to find your perfect house plan design.",
                    tooltipClass: 'customTooltip'
                },
                {
                    element: document.querySelector('.header__search'),
                    title: 'Search or Browse Plans',
                    intro: "Start here by searching or browsing the available plans we have to offer."
                },
                {
                    element: filterStepElement,
                    title: 'Filter Plan Search',
                    intro: 'Select from dozens of filters to reduce the search results to exactly what you are looking for.'
                },
                {
                    element: document.querySelector('.compare-tour'),
                    title: 'Compare Plans',
                    intro: "The Compare Plans feature lets you select several plans to compare features and details side-by-side."
                },
                {
                    element: document.querySelector('.plan-card'),
                    title: 'View Plan Details & Pricing',
                    intro: "Click to see full details, features, and pricing for this plan."
                }
            ]
        }).start();
    });



})

