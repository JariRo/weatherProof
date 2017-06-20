var setItUp = (function(){

    var doEvents = function(){
        $('#quote-carousel').carousel({
          pause: true, interval: 6000,
        });

        $(window).scroll(function(){
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrinkNav');
                $('#brandLogo').addClass('shrinkLogo')
                $('#contactInfo').addClass('shrinkContactInfo');
            }
            else{
                $('nav').removeClass('shrinkNav');
                $('#brandLogo').removeClass('shrinkLogo');
                $('#contactInfo').removeClass('shrinkContactInfo');
            }
        });

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

        $('.theMaps').on('click', function(){
            $('.theMaps > iframe').css("pointer-events", "auto");
        });

        $('.theMaps').on('mouseleave', function(){
            $('.theMaps > iframe').css('pointer-events', 'none');
        });

        $('.contact-button').on('click', function(){
            $('.contact-slide').fadeIn(700);
            $('.opacity-overlay').fadeIn(300);
        });

        $('.opacity-overlay, .contact-close-button').on('click', function(){
            $('.contact-slide').fadeOut(700);
            $('.opacity-overlay').fadeOut(300);
        });

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
    };

    var setAngleColor = function(){
        var theTopAngle = $('.triangles-top');
        var theBottomAngle = $('.triangles-bottom');

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
        setAngleColor:setAngleColor,
        doOffert:doOffert,
    }

}());

var init = function(){
    setItUp.doEvents();
    setItUp.setAngleColor();
    setItUp.doOffert();
}

window.onload = init;