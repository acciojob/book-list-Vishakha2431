//your JS code here. If required.

let btn = document.getElementById("submit");

btn.onclick = function() {

  let t = document.getElementById("title").value;
  let a = document.getElementById("author").value;
  let i = document.getElementById("isbn").value;

  let tbody = document.getElementById("book-list");

  tbody.innerHTML += 
  "<tr>" +
  "<td>" + t + "</td>" +
  "<td>" + a + "</td>" +
  "<td>" + i + "</td>" +
  "<td><button  class=`delete` onclick='deleteRow(this)'>Clear</button></td>" +
  "</tr>";
}


function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
}
