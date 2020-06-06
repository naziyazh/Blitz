window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var query = data.query;
    search(query);
    
}

function search(query){
    $('.search-query').textContent = query;
    var search_result = [];
    return firebase.database().ref().once('value', function(snapshot) {
        var myValue = snapshot.val();
        var keyList = Object.keys(myValue);
        for (i = 0; i < keyList.length; i++){
            var key = keyList[i];
            if (key.toUpperCase().includes(query.toUpperCase())){
                var result = [];
                result.push(key, myValue[key].Description);
                search_result.push(result);
            }
        }
        show_search_results(query, search_result);
    });
}


function show_search_results(query, search_result){
    if (search_result.length === 0){
        var searchResult = document.createElement("div");
        searchResult.className = "search-result";
        var nothing = document.createElement("p");
        nothing.textContent = "Nothing matching " + query + " is in our system. Please try again." ;
        nothing.className += "text-center none-found";
        searchResult.append(nothing);
        $('#search-result-container').append(searchResult);
    }
    for (i = 0; i < search_result.length; i++){
        var searchResult = document.createElement("div");
        var see_more = document.createElement("button");
        var heading  = document.createElement("h5");
        var description = document.createElement("p");

        searchResult.className = "search-result";
        see_more.className += "btn btn-dark px-5 mb-2";
        see_more.className += "seemore";
        see_more.textContent = "See more";

        
        heading.textContent = search_result[i][0];
        description.textContent = search_result[i][1];
        searchResult.append(heading, description, see_more);
        if (i !== search_result.length - 1){
            searchResult.append(document.createElement("hr"));
        }
        $('#search-result-container').append(searchResult);
    }
}

$( document ).ready(function() {
    document.querySelector('.seemore').addEVentListener('click', function(){
        var program = this.parentElement.firstChild;
        console.log(program);
        window.location.replace("../Workout-page/site.html?query=" + program); 
    });

    $('.search-submit').click(function(){
        var query = $('.search-query').val();
        window.location.replace("search_result.html?query=" + query);
    });
});
    

