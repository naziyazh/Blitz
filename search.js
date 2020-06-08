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
    
    $('.search-submit').click(function(){
        var query = $('.search-query').val();
        if (query.trim().length > 0){
            window.location.replace("main-page/search_result.html?query=" + query);
        }
        
    });

});