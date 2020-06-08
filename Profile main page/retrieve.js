

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

                            h.innerHTML = "Day " + ds.key.charAt(3);
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
                                if(ds.val()[key]["first"].includes("Superset") || ds.val()[key]["first"].includes("Circuit") || ds.val()[key]["first"].includes("AMRAP")){
                                    cellFirst.style.fontWeight = "bold";
                                }
                                cellFirst.innerHTML = ds.val()[key]["first"];
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