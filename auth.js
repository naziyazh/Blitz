var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var signout = document.getElementById("signout");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var repeat = document.getElementById("repeatDiv");

function openUpForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementsByTagName("h1")[0].innerHTML = "Sign Up";
    signup.style.display = "block";
    signin.style.display = "none";
    repeat.style.display = "block";
  }
function openInForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementsByTagName("h1")[0].innerHTML = "Sign In";
    signup.style.display = "none";
    signin.style.display = "block";
    repeat.style.display = "none";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function signUp(){
    if (pwd.value == repeat.value){
        auth.createUserWithEmailAndPassword(email.value, pwd.value).then(function(){
            email.value = "";
            pwd.value = "";
            repeat.value = "";
            email.focus();
            closeForm();
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            email.value = "";
            pwd.value = "";
            repeat.value = "";
            email.focus();
        });
    }else{
        console.log("Passwords do not match")
        pwd.value = "";
        repeat.value = "";
        pwd.focus();
    }
}

function signIn(){
    firebase.auth().signInWithEmailAndPassword(email.value, pwd.value).then(function(){
        email.value = "";
        pwd.value = "";
        email.focus();
        closeForm();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        email.value = "";
        pwd.value = "";
        email.focus();
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
      signout.style.display = "block";
      // ...
    } else {
        signout.style.display = "none";
        console.log("You are signed out")
      // User is signed out.
      // ...
    }
  });

