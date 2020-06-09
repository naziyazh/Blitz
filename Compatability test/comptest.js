
var firebaseConfig = {
    apiKey: "AIzaSyBs5aJhECS8s1bspUxdVk-hJH7FrlasDwc",
    authDomain: "hci-project-817b4.firebaseapp.com",
    databaseURL: "https://hci-project-817b4.firebaseio.com",
    projectId: "hci-project-817b4",
    storageBucket: "hci-project-817b4.appspot.com",
    messagingSenderId: "1084392647243",
    appId: "1:1084392647243:web:b8d31ad3108e563cd23bce",
    measurementId: "G-D6VMGFT1W2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var routinee;
  window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    query = data.query;
    console.log(query);
    var novq = query.replace(/%20/g, " ");
    var ovqq = novq.replace(/%22/g,"\"");
    var nnovq = ovqq.replace(/%27/g, "'");
    console.log(nnovq);
    fillcomptest(nnovq);
}

var id;
var nofq=0;
var routine="";
function fillcomptest(workout){
    routine = workout;
    id=workout;
    firebase.database().ref(workout+"/Compatibility test").once('value', function( snapshot){
        document.getElementById("ti").innerHTML= "Compatibility test for <br>"+workout;
        var myValue = snapshot.val();
        var KeyList = Object.keys(myValue);
        var qq=0;
        var tablo = document.getElementById("tablo");
        for(let i=0; i<KeyList.length; i++){
            var current = KeyList[i];
            qq= i+1;
            document.getElementById("q"+qq).innerHTML=myValue[current];
            nofq++;
        }
        for(let i=0; i<5-qq;i++){
            tablo.deleteRow(-1);
        }
    })
}
document.getElementById("results").disabled = true;
var negresults=0;
var posresults=0;
var totclis =0;
function clik(id, c, u){
    if(c=="n"){
        negresults++;
        if(totclis>=nofq){posresults--;}
        totclis++;
    }
    else{
        posresults++;
        if(totclis>=nofq){negresults--;}
        totclis++;
    }
    document.getElementById(id+c).className="butcd";
    document.getElementById(id+u).className="falsebut";
    if (totclis >= nofq){
        document.getElementById("results").disabled = false;
    }
    console.log(posresults);
    console.log(negresults);
    console.log("Total: "+ totclis);
}
//fillcomptest("Zac Efron's \"Baywatch\" Workout");
//fillcomptest("Woodley's UFC title workout");
//fillcomptest("Cristiano Ronaldo's workout routine");
//fillcomptest(routinee);
//fillcomptest("Travis Stevens' Weight Lifting Program");

var addtmlb=document.getElementById("modbut")


var modal = document.getElementById("myModal");
var gotob = document.getElementById("gotob");

// Get the button that opens the modal
var btn = document.getElementById("results");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  if(negresults>1){
  document.getElementById("modtek").innerHTML="For now, this program may be too difficult for you. It is recommended to try another workout."
  modal.style.display = "block";
  addtmlb.style.display = "none";
  gotob.style.display ="none"
  
}
  else{
    document.getElementById("modtek").innerHTML="Congratulations! You seem to be qualified enough to do "+routine;
    modal.style.display = "block";
    addtmlb.style.display = "block";
    if(addtmlb.disabled==true){gotob.style.display = "block"}
    else{gotob.style.display ="none"}
  }
}
span.onclick = function() {
    modal.style.display = "none";
  }
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
addtmlb.onclick = function(){
  async function f(){
    let user = await firebase.auth().currentUser;
    if (!user) return;
    return user.uid;
  }
  f().then(function(uid){
    addtmlb.innerHTML = "Added to my list"
    addtmlb.disabled = true;
    addtmlb.className = "addedtmlb"
    gotob.innerHTML = "Go to my list"
    gotob.style.display ="block"
    firebase.database().ref().child("users").child(uid).update({
      workout: id
    })
  });
}
buton.onclick= function(){
  async function f(){
      let user = await firebase.auth().currentUser;
      if (!user) return;
      return user.uid;
  }
  f().then(function(uid){
      if (!uid) return;
      buton.innerHTML = "Added to my list";
      buton.className = "addedbut"
      buton.disabled = true;
      buto.innerHTML = "Go to my list";
      buto.style.display = "block";
      firebase.database().ref().child("users").child(uid).update({
          workout: id
      })
  });
  
}
firebase.auth().onAuthStateChanged(function(user){
  if (user){
      firebase.database().ref().child("users").child(user.uid).child("workout").once("value").then(function(ds){
          console.log(ds.val());
          if (ds.val() == id){
              addtmlb.innerHTML = "Added to my list";
              addtmlb.className = "addedtmlb"
              addtmlb.disabled = true;
              gotob.innerHTML = "Go to my list";
              gotob.style.display = "block";
          }
      })
  }
})