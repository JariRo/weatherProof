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

$('#matNav > .input-box > input').on('click', function(){
    showCategories();
});
