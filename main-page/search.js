$( document ).ready(function() {
    //database credentials
    // var firebaseConfig = {
    //     apiKey: "AIzaSyBs5aJhECS8s1bspUxdVk-hJH7FrlasDwc",
    //     authDomain: "hci-project-817b4.firebaseapp.com",
    //     databaseURL: "https://hci-project-817b4.firebaseio.com",
    //     projectId: "hci-project-817b4",
    //     storageBucket: "hci-project-817b4.appspot.com",
    //     messagingSenderId: "1084392647243",
    //     appId: "1:1084392647243:web:b8d31ad3108e563cd23bce",
    //     measurementId: "G-D6VMGFT1W2"
    //   };
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);

    //get search exercise names from database
    function readFromDatabase(query){
        var search_result = [];
        return firebase.database().ref('/hci-project-817b4/').once('value', function(snapshot) {
            var myValue = snapshot.val();
            var keyList = Object.keys(myValue);
            for (i = 0; i < keyList.length; i++){
                var key = keyList[i];
                if (key.contains(query)){
                    search_result.append(key);
                }
            }
            show_search_results(search_result);
        });
    }

    
    function show_search_results(search_result){
        console.log(search_result);

    }
    function search(){
        var query = $('.search-query').val();
        readFromDatabase(query);
    }
    $('.search-submit').click(function(){
        search();
    })

});