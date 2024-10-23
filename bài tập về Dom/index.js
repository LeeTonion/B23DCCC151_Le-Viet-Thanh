document.getElementById("title").textContent = "Hello, DOM!";
document.getElementById("text").style.color = "red";
var ul = document.getElementById("list");
var li = document.createElement("li");
li.textContent = "New list item";
ul.appendChild(li);
var remove = document.getElementById("remove-me");
remove.style="none"
document.getElementById("image").src = "https://th.bing.com/th/id/OIP.U0D5JdoPkQMi4jhiriSVsgHaHa?rs=1&pid=ImgDetMain";
document.getElementById("btn").addEventListener("click", function() {
    alert("Nút được nhấp!");
});
function bai7(){
    var a= document.querySelectorAll("p");
a.forEach(function(a) {
    a.textContent = "Updated paragraph";
});
}

var table = document.createElement("table");

for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    
    
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement("td");
        cell.style="border: 1px solid black;padding: 10px;"
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.getElementById("table-container").appendChild(table);
var div = document.querySelectorAll("div");
alert(div.length);
var items = document.querySelectorAll(".item");
items.forEach(function(item) {
    item.textContent = "Updated item";
});