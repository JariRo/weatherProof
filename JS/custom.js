var setItUp = (function(){

    var doEvents = function(){
        $('#quote-carousel').carousel({
          pause: true, interval: 6000,
        });

        $(window).scroll(function(){
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrinkNav');
                $('#brandLogo').addClass('shrinkLogo')
                //$('#contactInfo').addClass('shrinkContactInfo');
            }
            else{
                $('nav').removeClass('shrinkNav');
                $('#brandLogo').removeClass('shrinkLogo');
                $('#contactInfo').removeClass('shrinkContactInfo');
            }
        });

        //The process-overlay
        $('.content-btn').on('click', function(event){
            event.preventDefault();
            showProcess();
        });


        $('.slider-section .slide-menu > input').on('click', function(){
            showSlide("no", "no");
        });


        $('.slider-section > article > .slides-holder > .slide-left').on('click', function(){
            var inputArray = $('.slider-section > article > .slide-menu > input:radio');
            var oldcheckedSlide = inputArray.index(inputArray.filter(':checked'));
            if(oldcheckedSlide == 0){
                newcheckedSlide = inputArray.length;
            }
            else{
                newcheckedSlide = oldcheckedSlide;
            }
            $('.slider-section > article > .slide-menu > input[type="radio"]:nth-of-type(' + newcheckedSlide + ')').prop('checked', true);
            showSlide(oldcheckedSlide, newcheckedSlide);
        });


        $('.slider-section > article > .slides-holder > .slide-right').on('click', function(){
            var inputArray = $('.slider-section > article > .slide-menu > input:radio');
            var oldcheckedSlide = inputArray.index(inputArray.filter(':checked'));
            if ( oldcheckedSlide == (inputArray.length - 1)){
                newcheckedSlide = 1;
            } else{
                newcheckedSlide = oldcheckedSlide + 2;
            }
            $('.slider-section > article > .slide-menu > input[type="radio"]:nth-of-type(' + newcheckedSlide + ')').prop('checked', true);
            showSlide(oldcheckedSlide, newcheckedSlide);
        });


        // MATERIALVÄLJAREN
        $('#matNav > .input-box > input').on('click', function(){
            showCategories();
        });


        /* PRODUKTER
        $('#productNavigation > .input-box > input').on('click', function(){
            showCategories();
        });
        */

        /* TAK och FASAD SYSTEM
        $('#systemsNavigation > .input-box > input').on('click', function(){
            showCategories();
        });


        $('#systemsNavigation-roof > .input-box > input').on('click', function(){
            showRoofs();
        });

        $('#systemsNavigation-facade > .input-box > input').on('click', function(){
            showFacade();
        });
        */

        var showSlide = function(prevCheck, newCheck){
            $('.slides-holder > .slide-content-holder > article').fadeTo('fast', 0);
            $('.slides-holder > .slide-content-holder > article').hide();
            var checkedSlide = $('.slider-section > article > .slide-menu > input:checked').attr('id');
            $('.slides-holder > .slide-content-holder > article[data-slide-nr="' + checkedSlide + '"]').show().fadeTo('fast', 1);
        }

        var showProcess = function(){
            if ($('.process-overlay').hasClass('showing')){
                $('.process-overlay').removeClass('showing');
                $('html, body').animate({
                    scrollTop: $('#workProcess').offset().top
                }, 400);
            }
            else{
                $('.process-overlay').addClass('showing');
            }
        };

        var showCategories = function(){
            if ( $('#matNav').length ){
                $('.material-text-content').hide();
                $('.type-holder').hide();
                var checkedRadio = $('#matNav > .input-box > input:checked').attr('id');
                $('.material-text-content[data-material-content="' +checkedRadio+ '"]').show();

                if ( checkedRadio == "type-0"){
                    $('.type-holder').show()
                }
                else{
                    $('.type-holder[data-material="' +checkedRadio+ '"]').show();
                }
            }
            else if ( $('#productNavigation').length ){
                $('.product-category').hide();
                var checkedRadio = $('#productNavigation > .input-box > input:checked').attr('id');
                $('.product-category[data-category-type="' +checkedRadio+ '"]').show();

                if ( checkedRadio == "category-0" ){
                    $('.product-category').show();
                }
                else{
                    $('.product-category[data-category-type="' +checkedRadio+ '"]').show();
                }
            }
            else if ( $('#systemsNavigation').length ){
                $('.system-category').hide()
                $('.triangles-bottom > h1').fadeTo('fast', 0);
                var checkedRadio = $('#systemsNavigation > .input-box > input:checked').attr('id');
                $('.system-category[data-systems="' +checkedRadio+ '"]').show()
                $('.'+checkedRadio).fadeTo('fast', 1);
            }
        };

        var showRoofs = function(){
            $('.roof-system').fadeTo('fast', 0);
            $('.roof-system').hide();
            var checkedRoofSystem = $('#systemsNavigation-roof > .input-box > input:checked').attr('id');
            $('.roof-system[data-roof-system="' +checkedRoofSystem+ '"]').show().fadeTo('fast', 1);
        }

        var showFacade = function(){
            $('.facade-system').fadeTo('fast', 0);
            $('.facade-system').hide();
            var checkedFacadeSystem = $('#systemsNavigation-facade > .input-box > input:checked').attr('id');
            $('.facade-system[data-facade-system="' +checkedFacadeSystem+ '"]').show().fadeTo('fast', 1);
        }


        /* SUBMENY on HOVER
        $('.productList').hover(function(){
            $('> .subNav', this).stop().fadeIn(270);
        }, function(){
            $('> .subNav', this).stop().fadeOut(270);
        });

        $('.servicesList').hover(function(){
            $('> .subNav', this).stop().fadeIn(270);
        }, function(){
            $('> .subNav', this).stop().fadeOut(270);
        });
        */


        $('.theMaps').on('click', function(){
            $('.theMaps > iframe').css("pointer-events", "auto");
        });

        $('.theMaps').on('mouseleave', function(){
            $('.theMaps > iframe').css('pointer-events', 'none');
        });

        $('.contact-button').on('click', function(event){
            event.preventDefault();
            var contactSlide = $('.contact-slide');
            $(contactSlide).addClass('display-contact');


            //$('.contact-slide').addClass('display-contact').fadeIn(700);
            //$('.contact-slide').fadeIn(700);
            $('.opacity-overlay').fadeIn(300);
        });

        $('.opacity-overlay, .contact-close-button').on('click', function(){
            $('.contact-slide').removeClass('display-contact');

            //$('.contact-slide').fadeOut(700);
            $('.opacity-overlay').fadeOut(300);
        });


        /* OFFERT */
        $('.advancedOptions').on('click', function(event){
            event.preventDefault();
            $('.offert-advanced-content').show(300);
        })

        $('.countOffert').on('click', function(event){
            event.preventDefault();
            $('.offert-section').show(400);
        });

        $('#close-offert').on('click', function(){
            $('.offert-section').hide(400);
        })

        //showCategories();
        //showRoofs();
        //showFacade();
        showSlide();
    };

    /*
    var setAngleColor = function(){
        var theBottomAngle = $('.triangles-bottom');
        var theTopAngle = $('.triangles-top');

        $(theTopAngle).each(function(index){
            var thePrevColor = $(this).closest('section').prev().children('.container').css('background-color');
            $(this).find('.triangle-left-top').css('border-color', thePrevColor + " transparent transparent transparent");
            $(this).find('.triangle-right-top').css('border-color', "transparent " + thePrevColor + " transparent transparent");
        });


        $(theBottomAngle).each(function(index){
            var theNextColor = $(this).closest('section').next().children('.container').css('background-color');
            $(this).find('.triangle-left-bottom').css('border-color', "transparent transparent " + theNextColor + " transparent");
            $(this).find('.triangle-right-bottom').css('border-color', "transparent transparent transparent " + theNextColor);
        });

    };
    */

    var doOffert = function(){

        // Progressbar Navigation
         $('.offert-section  #offertSystem .stages label').on('click', function(){
             var radioButtons = $('#offertSystem input:radio');
             var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
             selectedIndex = selectedIndex + 1;
         });

         // Next button
         $('.offert-content-pages .nextButton').on('click', function(event){
             event.preventDefault();
             var radioButtons = $('#offertSystem input:radio');
             var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
             selectedIndex = selectedIndex + 2;

             $('#offertSystem input[type="radio"]:nth-of-type(' + selectedIndex + ')').prop('checked', true);
         });

        // Preview button
         $('.offert-content-pages .prevButton').on('click', function(event){
             event.preventDefault();
             var radioButtons = $('#offertSystem input:radio');
             var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));

             $('#offertSystem input[type="radio"]:nth-of-type(' + selectedIndex + ')').prop('checked', true);
         })
    };

    return{
        doEvents:doEvents,
        //setAngleColor:setAngleColor,
        doOffert:doOffert,
    }

}());

var init = function(){
    setItUp.doEvents();
    //setItUp.setAngleColor();
    setItUp.doOffert();
}

window.onload = init;
