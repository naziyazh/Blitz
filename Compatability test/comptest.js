
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
hist=[];
function fillcomptest(workout){
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
        }
        for(let i=0; i<5-qq;i++){
            tablo.deleteRow(-1);
        }
    })
}
function clik(id, c, u){
    document.getElementById(id+c).className="butcd";
    document.getElementById(id+u).className="falsebut";
}
//fillcomptest("Zac Efron's \"Baywatch\" Workout");
//fillcomptest("Woodley's UFC title workout");
//fillcomptest("Cristiano Ronaldo's workout routine");
fillcomptest("Alexanda Daddario's Full-Body Workout");
//fillcomptest("Travis Stevens' Weight Lifting Program");