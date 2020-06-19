$( document ).ready(function() {
    $('#logo').click(function(){
        window.location.replace('../index.html');
    });

    function retrieve_from_database(){
        var result = [];
        return firebase.database().ref().once('value', function(snapshot) {
            var myValue = snapshot.val();
            var keyList = Object.keys(myValue);
            for (i = 0; i < keyList.length; i++){
                var key = keyList[i];
                if (key !== "alternatives" && key !== "users"){
                    result.push(key.substring(0, key.indexOf("'")));
                }
            }
            show_role_models(result);
        });
    }

    /* <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-3">
                    <div>
                    <img src="img/ecma.png" class="card-img-top" alt="Vivianne">
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Ecma Hufflepuff</h5>
                    <p class="card-text">Programming enthusiast and teacher at Treehouse.</p>
                    </div>
                </div>
                </div>
                </div> */

    function show_role_models(result){
        
        for (i = 0; i < result.length; i++){
            var col = document.createElement("div");
            var card = document.createElement("div");
            var img = document.createElement("img");
            var card_body = document.createElement("div");
            var heading  = document.createElement("a");

            col.className = "col-md-6 col-lg-4";
            card.className = "card mb-3";
            img.className = "card-img-top";
            card_body.className = "card-body";
            heading.className = "card-title";

            $(img).attr("src", "img/" + result[i].toLowerCase() + ".jpg");
            $(heading).attr("href", "../main-page/search_result.html?query=" + result[i]);
            heading.textContent = result[i];

            $(card_body).append(heading);
            $(card).append(img);
            $(card).append(card_body);
            $(col).append(card);
                 
            $('#featured-container .row').append(col);
        }
    }

    retrieve_from_database();  
});