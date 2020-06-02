day1=[];
let e ={
    'first':'exercise1',
    'second': 'x sets',
    'third': "y reps"
}
day1.push(e);
let g ={
    'first':'exercise2',
    'second': '10 sets',
    'third': "2 reps"
}
day1.push(g);
function FillTables(day1,day2,day3, category, description, rating){
    var table1 = document.getElementById("table3")
    for(let i=0;i<day1.length;i++){
        var row = table1.insertRow(-1)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = day1[i]["first"]
        cell2.innerHTML = day1[i]["second"]
        cell3.innerHTML = day1[i]["third"]
    }
}
FillTables(day1);