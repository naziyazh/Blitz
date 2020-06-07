
function signOut(){
    firebase.auth().signOut();
    window.location.replace("../main-page/index.html");
}

firebase.auth().onAuthStateChanged(function(user){
    if (user){
        var h1 = document.getElementById("profile-username");
        firebase.database().ref().child("users").child(user.uid).once('value').then(function(ds){
            h1.innerHTML = ds.val()["firstName"];
        })
    }else{
        window.location.replace("../main-page/index.html");
    }
})