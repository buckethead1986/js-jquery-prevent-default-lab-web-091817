$(document).ready(function() {
  addItemToList();
});

function addItemToList() {
  $("form").on("submit", function(event) {
    var listItem = $("#item").val();
    $("ol").append("<li>" + listItem + "</li>");
    event.preventDefault();
  });
}

// document.addEventListener("DOMContentLoaded", function() {
//   javascriptAddItemToList();
// });
//
// javascriptAddItemToList = ev => {
//   const jsList = document.getElementsByTagName("ol")[0];
//   document.getElementById("form").addEventListener("submit", ev => {
//     ev.preventDefault();
//     const item = document.getElementById("item").value;
//     const newList = document.createElement("li");
//     newList.innerText = item;
//     jsList.appendChild(newList);
//   });
// };
