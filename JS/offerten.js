
var setOffertUp = (function(){

    var eventHandelers = function(){


        var offertNavItems = document.querySelectorAll("#offert-nav > li > a");
        for (var i = 0; i < offertNavItems.length; i++){
            offertNavItems[i].addEventListener("click", function(event) {
                event.preventDefault();
                console.log(this)
                var oldTarget = document.querySelector('.activated');
                console.log(oldTarget)
                oldTarget.classList.remove('activated')
                this.classList.add('activated');

            })
        }


        var firstNavItem = document.querySelector('.menu-1 > a');
        firstNavItem.focus();
    }

    return {
        eventHandelers:eventHandelers,
    }

}());


var init = function(){
    setOffertUp.eventHandelers();
}

window.onload = init;
