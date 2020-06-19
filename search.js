$( document ).ready(function() {
   
    //get search exercise names from database
    
    $('.search-submit').click(function(){
        var query = $('.search-query').val();
        if (query.trim().length > 0){
            window.location.replace("main-page/search_result.html?query=" + query);
        }
        
    });

    $('.search-query').keydown(function(){
        if (event.keyCode === 13) {
            event.stopImmediatePropagation();
            $(".search-submit").trigger('click');
          }
        
    });

});