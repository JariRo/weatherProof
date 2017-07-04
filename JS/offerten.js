
var setOffertUp = (function(){

    var eventHandelers = function(){
        var menuNavItems = document.querySelectorAll("#side-bar-nav > li > a");
        var checkoutContent = document.querySelector('#checkout-wrapper');
        var extrasButton = document.querySelector('.extra-roof-dropBtn');
        var firstNavItem = document.querySelector('.menu-1 > a');
        var backForthNavButton = document.querySelectorAll('.back-forth-menu > a');

        var setActivated = function(element){
            var oldTarget = document.querySelector('.activated');
            oldTarget.classList.remove('activated')
            element.classList.add('activated');
            setCheckoutUp(element);
        }

        var setCheckoutUp = function(element){
            if( element.id == "checkoutMenuItem" ){
                addClass('showing', checkoutContent);
            }
            else{
                if ( hasClass(checkoutContent, 'showing' )){
                    $(checkoutContent).removeClass('showing');
                }
            }
        }

        for (var i = 0; i < menuNavItems.length; i++){
            menuNavItems[i].addEventListener('click', function(event) {
                event.preventDefault();
                setActivated(this);
            });
        };

        for ( var i = 0; i < backForthNavButton.length; i++){
            backForthNavButton[i].addEventListener('click', function(event){
                event.preventDefault();
                var clickedThis = this;
                var theData = this.dataset.where;
                var newPage = document.querySelector('#side-bar-nav > .' + theData + ' > a');
                setActivated(newPage);
            })
        }

        if ( extrasButton !== null){
            extrasButton.addEventListener('click', function(event){
                event.preventDefault();
                var theCaret = document.querySelector('.extra-roof-dropBtn > span');
                var theExtras = document.querySelector('.extras');

                if ( hasClass(this, 'showing') ){
                    $(this).removeClass('showing');
                    $('.extras').removeClass('showing');
                    theCaret.className = 'caret';
                }
                else {
                    addClass('showing', this);
                    addClass('showing', theExtras);
                    theCaret.className = "caret-up";
                }
            });
        };

        firstNavItem.focus();
    }

    var validateForm = function(){

    }

    var addClass = function(classToAdd, theElement){
        var existingClass = theElement.className;

        if (existingClass !=""){
            classToAdd = " " + classToAdd;
        }
        theElement.className = existingClass + classToAdd;
    }

    var hasClass = function(element, theClass){
        return (" " + element.className + " ").indexOf( " " + theClass + " " ) > -1;
    }


    return{
        eventHandelers:eventHandelers,
    }

}());


var init = function(){
    setOffertUp.eventHandelers();
}

window.onload = init;
