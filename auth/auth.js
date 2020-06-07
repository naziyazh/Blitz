var signup = document.getElementById("btn1");
var signin = document.getElementById("btn2");
var signout = document.getElementById("btn3");
var profile = document.getElementById("btn4");



  
function closeForm(form) {
    form = document.getElementById(form);
    document.getElementById(form).setAttribute('aria-hidden', 'true');
}

function signUp(){
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email1 = document.getElementById("email1");
    var password1 = document.getElementById("password1");
    var repeat = document.getElementById("confirm-password");
    if (password1.value == repeat.value){
        auth.createUserWithEmailAndPassword(email1.value, password1.value).then(function(){
            firebase.database().ref().child("users").child(firebase.auth().currentUser.uid).set({
                email: email1.value,
                firstName: firstName.value,
                lastName: lastName.value
            })
            email1.value = "";
            password1.value = "";
            repeat.value = "";
            email1.focus();
            document.getElementById("closeReg").click();
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            email1.value = "";
            password1.value = "";
            repeat.value = "";
            email1.focus();
        });
    }else{
        console.log("Passwords do not match")
        password1.value = "";
        repeat.value = "";
        password1.focus();
    }
}

function signIn(){
    var email2 = document.getElementById("email2");
    var password2 = document.getElementById("password2");
    firebase.auth().signInWithEmailAndPassword(email2.value, password2.value).then(function(){
        email2.value = "";
        password2.value = "";
        email2.focus();
        document.getElementById("closeLog").click();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        email2.value = "";
        password2.value = "";
        email2.focus();
        // ...
      });
}
function signOut(){
    firebase.auth().signOut();
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var email = user.email;
      var uid = user.uid;
      console.log("Welcome " + email);
      signin.style.display = "none";
      signup.style.display = "none";
      signout.style.display = "block";
      profile.style.display = "block";
      // ...
    } else {
        signin.style.display = "block";
        signup.style.display = "block";
        signout.style.display = "none";
        profile.style.display = "none";
        
        console.log("You are signed out")
      // User is signed out.
      // ...
    }
  });

