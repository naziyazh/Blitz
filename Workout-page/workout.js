
//retrieve info from url
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

var id;
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
    firebase.database().ref().child(name).child("id").once("value").then(function(ds){
        id = name;
        console.log(name);

    })
    firebase.database().ref(name+"/Day1").once('value', function( snapshot){
        
        var myValue = snapshot.val();
        var KeyList = Object.keys(myValue);

        var table1 = document.getElementById("table1")
        if(number_of_tables==1){
            document.getElementById("table1-title").innerHTML = "Training Day"
            document.getElementById("table1-title").className = "filt_table-title"
        }
        else{
            document.getElementById("table1-title").className = "filt_table-title"
            document.getElementById("table1-title").innerHTML = "Day#1";
        }
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
            if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("Circuit") || hist[i]["first"].includes("AMRAP")){
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
            document.getElementById("table2-title").className = "filt_table-title"
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
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("Circuit") || hist[i]["first"].includes("AMRAP")){
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
            document.getElementById("table3-title").className = "filt_table-title"
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
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("Circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
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
            document.getElementById("table4-title").className = "filt_table-title"
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
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("Circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
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
            document.getElementById("table5-title").className = "filt_table-title"
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
                if(hist[i]["first"].includes("Superset") || hist[i]["first"].includes("Circuit") || hist[i]["first"].includes("AMRAP")){
                    cell1.className="bold-texted-td";
                    cell2.className='time-for-ex-or-set';
                }
            }
            for(let i=0;i<hist.length;i++){hist.splice(i)}
        })
    }
}
function FillSento(name){
    document.getElementById("titleofworkout").innerHTML = name;
    firebase.database().ref(name+"/Duration").once('value', function(snapshot){
        let myValue = snapshot.val();    
        document.getElementById("Durasyon").innerHTML = "Duration: "+myValue;
    })
    firebase.database().ref(name+"/Frequency").once('value', function(snapshot){
        let myValue = snapshot.val();    
        document.getElementById("Frekansi").innerHTML ="Frequency: " + myValue;
    })
    if(name=="Zac Efron's \"Baywatch\" Workout"){
        document.getElementById("fotka").innerHTML = "<img class=\"profile-photo-of-role-model\"src=\"./images/Zac.jpg\" alt=\"Photo\">"
    }
    else{document.getElementById("fotka").innerHTML = "<img class=\"profile-photo-of-role-model\"src=\"./images/"+name+".jpg\" alt=\"Photo\">"}
}
var freq = 0;
function get_freq(){
    return firebase.database().ref(name+"/Frequency").once('value',function(snapshot){
        let myValue = snapshot.val();
        freq = myValue;
        console.log(freq);
    })
};
var buton = document.getElementById("atml");
var buto = document.getElementById("gtml");

get_freq();
//FillSento("Zac Efron's \"Baywatch\" Workout");
FillSento("Woodley's UFC title workout");
//FillSento("Cristiano Ronaldo's workout routine");
//FillSento("Alexanda Daddario's Full-Body Workout");
//FillSento("Travis Stevens' Weight Lifting Program");
//FillTables("Zac Efron's \"Baywatch\" Workout", 3);
FillTables("Woodley's UFC title workout", 1);
//FillTables("Cristiano Ronaldo's workout routine", 5);
//FillTables("Alexanda Daddario's Full-Body Workout", 1);
//FillTables("Travis Stevens' Weight Lifting Program", 3);


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
                buton.innerHTML = "Added to my list";
                buton.className = "addedbut"
                buton.disabled = true;
                buto.innerHTML = "Go to my list";
                buto.style.display = "block";
            }
        })
    }
})