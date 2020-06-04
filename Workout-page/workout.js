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
let e ={
    'first':'exercise1',
    'second': 'x sets',
    'third': "y reps"
}
let g ={
    'first':'exercise2',
    'second': '10 sets',
    'third': "2 reps"
}
function FillTables(name, number_of_tables, category, description, rating){
    firebase.database().ref(name+"/Day1").once('value', function( snapshot){
        var myValue = snapshot.val();
        var KeyList = Object.keys(myValue);
        var table1 = document.getElementById("table1")
        document.getElementById("table1-title").innerHTML = "Day#1"
        for(let i=0; i<KeyList.length; i++){
            var current = KeyList[i];
            let e = {
                "first": myValue[current].first,
                "second": myValue[current].second,
            };
            hist.push(e);
        }
        for(let i=0;i<hist.length;i++){
            var row = table1.insertRow(-1)
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            //var cell3 = row.insertCell(2);
            cell1.innerHTML = hist[i]["first"]
            cell2.innerHTML = hist[i]["second"]
            //cell3.innerHTML = hist[i]["third"]
            let tempo = String(hist[i]["first"]);
            if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("circuit") || hist[i]["first"].includes("AMRAP")){
                cell1.className="bold-texted-td";
                cell2.className='time-for-ex-or-set';
            }
        }
        for(let i=0;i<hist.length;i++){hist.splice(i)}

    })
    if(number_of_tables>1){
        firebase.database().ref(name+"/Day2").once('value', function( snapshot){
            var myValue = snapshot.val();
            var KeyList = Object.keys(myValue);
            var table1 = document.getElementById("table2")
            document.getElementById("table2-title").innerHTML = "Day#2"
            for(let i=0; i<KeyList.length; i++){
                var current = KeyList[i];
                let e = {
                    "first": myValue[current].first,
                    "second": myValue[current].second,
                };
                hist.push(e);
            }
            for(let i=0;i<hist.length;i++){
                var row = table1.insertRow(-1)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                //var cell3 = row.insertCell(2);
                cell1.innerHTML = hist[i]["first"]
                cell2.innerHTML = hist[i]["second"]
                //cell3.innerHTML = hist[i]["third"]
                let tempo = String(hist[i]["first"]);
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
                }
            }
            for(let i=0;i<hist.length;i++){hist.splice(i)}
        })
    }
    if(number_of_tables>2){    
        firebase.database().ref(name+"/Day3").once('value', function( snapshot){
            var myValue = snapshot.val();
            var KeyList = Object.keys(myValue);
            var table1 = document.getElementById("table3")
            document.getElementById("table3-title").innerHTML = "Day#3"
            for(let i=0; i<KeyList.length; i++){
                var current = KeyList[i];
                let e = {
                    "first": myValue[current].first,
                    "second": myValue[current].second,
                };
                hist.push(e);
            }
            for(let i=0;i<hist.length;i++){
                var row = table1.insertRow(-1)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                //var cell3 = row.insertCell(2);
                cell1.innerHTML = hist[i]["first"]
                cell2.innerHTML = hist[i]["second"]
                //cell3.innerHTML = hist[i]["third"]
                let tempo = String(hist[i]["first"]);
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
                }
                else{
                    cell1.className="td-aligned-to-sento"
                }
            }
            for(let i=0;i<hist.length;i++){hist.splice(i)}
        })
    }
    if(number_of_tables>3){    
        firebase.database().ref(name+"/Day4").once('value', function( snapshot){
            var myValue = snapshot.val();
            var KeyList = Object.keys(myValue);
            var table1 = document.getElementById("table4")
            document.getElementById("table4-title").innerHTML = "Day#4"
            for(let i=0; i<KeyList.length; i++){
                var current = KeyList[i];
                let e = {
                    "first": myValue[current].first,
                    "second": myValue[current].second,
                };
                hist.push(e);
            }
            for(let i=0;i<hist.length;i++){
                var row = table1.insertRow(-1)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                //var cell3 = row.insertCell(2);
                cell1.innerHTML = hist[i]["first"]
                cell2.innerHTML = hist[i]["second"]
                //cell3.innerHTML = hist[i]["third"]
                let tempo = String(hist[i]["first"]);
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
                }
                else{
                    cell1.className="td-aligned-to-sento"
                }
            }
            for(let i=0;i<hist.length;i++){hist.splice(i)}
        })
    }
    if(number_of_tables>4){    
        firebase.database().ref(name+"/Day5").once('value', function( snapshot){
            var myValue = snapshot.val();
            var KeyList = Object.keys(myValue);
            var table1 = document.getElementById("table5")
            document.getElementById("table5-title").innerHTML = "Day#5"
            for(let i=0; i<KeyList.length; i++){
                var current = KeyList[i];
                let e = {
                    "first": myValue[current].first,
                    "second": myValue[current].second,
                };
                hist.push(e);
            }
            for(let i=0;i<hist.length;i++){
                var row = table1.insertRow(-1)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                //var cell3 = row.insertCell(2);
                cell1.innerHTML = hist[i]["first"]
                cell2.innerHTML = hist[i]["second"]
                //cell3.innerHTML = hist[i]["third"]
                let tempo = String(hist[i]["first"]);
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
                }
                else{
                    cell1.className="td-aligned-to-sento"
                }
            }
            for(let i=0;i<hist.length;i++){hist.splice(i)}
        })
    }
}
var freq = 0;
function get_freq(){
    return firebase.database().ref(name+"/Frequency").once('value',function(snapshot){
        let myValue = snapshot.val();
        freq = myValue;
        console.log(freq);
    })
};
get_freq();
//FillTables("Zac Efron's \"Baywatch\" Workout", 3);
//FillTables("Woodley's UFC title workout", 1);
//FillTables("Cristiano Ronaldo's workout routine", 5);
FillTables("Alexanda Daddario's Full-Body Workout", 1);
