

var user;
function editName(){
    var h1 = document.getElementById("profile-username");
    h1.contentEditable = "true";
    var editButton = document.getElementById("edit-profile");
    editButton.style.display = "none";
    var changeButton = document.getElementById("change-profile");
    changeButton.style.display = "block";
    h1.focus();
}
function signOut(){
    firebase.auth().signOut();
}
<<<<<<< HEAD
var routine;
var ex1 = "No";
var ex2 = "No";
=======
>>>>>>> 5fb8918d53685098a5b796fe6322cac83817480d
firebase.auth().onAuthStateChanged(function(user){
    user = user;
    if (user){
        
        var h1 = document.getElementById("profile-username");
        var workout;
        firebase.database().ref().child("users").child(user.uid).once('value').then(function(ds){
            h1.innerHTML = ds.val()["firstName"];
            var editButton = document.getElementById("edit-profile");
            editButton.style.display = "block";
            if (ds.child("workout").exists()){
                workout = ds.val()["workout"];
                var tables = [];
                firebase.database().ref().child(workout).once('value').then(function(ds){
                    
                    for (var i = 1; i < 8; i++){
                        if (ds.child("Day" + i).exists()){
                            tables.push(i);
                            
                        }
                    }
                    var body = document.getElementById("workouts");
                    var deleteButton = document.createElement("button");
                    deleteButton.type = "button";
                    deleteButton.innerHTML = "Remove this workout";
                    
                    deleteButton.onclick = function(){
                        firebase.database().ref().child("users").child(user.uid).update({workout: null});
                        body.innerHTML = "";
                        var nothing = document.createElement("p");
                        nothing.id = "nothing";
                        nothing.className = "mb-4";
                        nothing.innerHTML = "Nothing to see here...";
                        var explore = document.createElement("a");
                        explore.id = "explore";
                        explore.href = "../index.html";
                        explore.innerHTML = "Explore Workouts";
                        body.appendChild(nothing);
                        body.appendChild(explore);
                    }
                    body.appendChild(deleteButton);
                    var title = document.createElement("h1");
                    title.innerHTML = workout;
                    title.style.fontSize = "25px";
                    body.appendChild(title);
                    for (var i = 0; i < tables.length; i++){
                        
                        
                        
                        console.log(tables[i]);
                        
                        
                        firebase.database().ref().child(workout).child("Day" + tables[i]).once('value').then(function(ds){
                            var table = document.createElement("table");
                            var objects = Object.keys(ds.val());
                            var h = document.createElement("h2");
                            table.className = "simpleTable"

                            h.innerHTML = "Day#" + ds.key.charAt(3);
                            if (tables.length == 1){
                                h.innerHTML = "Training Day";
                            }
                            h.style.fontSize = "25px";
                            body.appendChild(h);
                            var j = 0;
                            objects.forEach(function(key){
                                var row = table.insertRow(j);
                                j++;
                                var cellFirst = row.insertCell();
                                cellFirst.className = "first";
                                var cellSecond = row.insertCell();
                                cellSecond.className = "second";
                                var exercise=ds.val()[key]["first"];
                                var alternative="No";
                                var altsor1;
                                var altsor2;
                                var exor1;
                                var exor2;
                                firebase.database().ref(workout).child("altsOrExs").once('value', function( snapshot){
                                    let myValue = snapshot.val();
                                    let KeyList=Object.keys(myValue);
                                    exor1 = KeyList[0];
                                    exor2 = KeyList[1];
                                    altsor1 = myValue[exor1];
                                    altsor2 = myValue[exor2];

                                })
                                if(ds.val()[key]["first"].includes("Superset") || ds.val()[key]["first"].includes("Circuit") || ds.val()[key]["first"].includes("AMRAP")){
                                    cellFirst.style.fontWeight = "bold";
                                    cellSecond.style.textAlign ="right";
                                    cellFirst.innerHTML = ds.val()[key]["first"];
                                }
                                else{
                                    firebase.database().ref("alternatives").once('value', function( snapshot){
                                    var myValue = snapshot.val();
                                    var KeyList = Object.keys(myValue);
                                    for(let i=0; i<KeyList.length; i++){
                                        var current = KeyList[i];
                                        if(current == exercise){alternative = myValue[current]}
                                    }
                                    
                                    if(alternative!="No"){
                                        if(exor1 == exercise & altsor1 != exercise){cellFirst.innerHTML = "<select class = \"class-of-dropdown\"name=\"variants\" id=\""+exercise+"\" onchange = \"DropDownChange("+"&quot;"+workout+"&quot,"+"&quot;" +exercise+"&quot)\"><option value=\""+altsor1+"\">"+altsor1+"</option><option value=\""+exercise+"\">"+exercise+"</option></select>";}
                                        else if(exor2 == exercise & altsor2 != exercise){cellFirst.innerHTML = "<select class = \"class-of-dropdown\"name=\"variants\" id=\""+exercise+"\" onchange = \"DropDownChange("+"&quot;"+workout+"&quot,"+"&quot;" +exercise+"&quot)\"><option value=\""+altsor2+"\">"+altsor2+"</option><option value=\""+exercise+"\">"+exercise+"</option></select>";}
                                        else{cellFirst.innerHTML = "<select class = \"class-of-dropdown\"name=\"variants\" id=\""+exercise+"\" onchange = \"DropDownChange("+"&quot;"+workout+"&quot,"+"&quot;" +exercise+"&quot)\"><option value=\""+exercise+"\">"+exercise+"</option><option value=\""+alternative+"\">"+alternative+"</option></select>";
                                        }
                                    }
                                    else{cellFirst.innerHTML = exercise}
                                    })
                                }
                                
                                cellSecond.innerHTML = ds.val()[key]["second"];
                            });
                            
                            document.getElementById("nothing").style.display = "none";
                            document.getElementById("explore").style.display = "none";
                            h.appendChild(table);
                        })
                        
                    }

                })

            }
        })
        

    }else{
        window.location.replace("../index.html");
    }
})
function DropDownChange(routine, key){
    console.log(key)
    let choice = document.getElementById(key).value;
    console.log(choice)
    firebase.database().ref(routine).child("altsOrExs").child(key).set(choice);

}

function changeName(){
    var h1 = document.getElementById("profile-username");
    var val = h1.innerHTML;
    var editButton = document.getElementById("edit-profile");
    var changeButton = document.getElementById("change-profile");
    firebase.database().ref().child("users").child(firebase.auth().currentUser.uid).update({
        firstName: val
    });
    editButton.style.display = "block";
    changeButton.style.display = "none";
    h1.contentEditable = "false";
}