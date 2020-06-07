
function signOut(){
    firebase.auth().signOut();
    window.location.replace("../main-page/index.html");
}

firebase.auth().onAuthStateChanged(function(user){
    user = user;
    if (user){
        
        var h1 = document.getElementById("profile-username");
        var workout;
        firebase.database().ref().child("users").child(user.uid).once('value').then(function(ds){
            h1.innerHTML = ds.val()["firstName"];
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
                    var title = document.createElement("h1");
                    title.innerHTML = workout;
                    title.style.fontSize = "20px"
                    body.appendChild(title);
                    for (var i = 0; i < tables.length; i++){
                        var table = document.createElement("table");
                        console.log(tables[i]);
                        firebase.database().ref().child(workout).child("Day" + tables[i]).once('value').then(function(ds){
                            var objects = Object.keys(ds.val());
                            var j = 0;
                            objects.forEach(function(key){
                                var row = table.insertRow(j);
                                j++;
                                var cellFirst = row.insertCell();
                                var cellSecond = row.insertCell();
                                cellFirst.innerHTML = ds.val()[key]["first"];
                                cellSecond.innerHTML = ds.val()[key]["second"];
                            });
                            
                            document.getElementById("nothing").style.display = "none";
                            document.getElementById("explore").style.display = "none";
                            body.appendChild(table);
                        })
                        
                    }

                })

            }
        })
        

    }else{
        window.location.replace("../main-page/index.html");
    }
})


