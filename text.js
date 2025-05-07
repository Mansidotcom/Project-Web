
var newElement = document.createElement("h2");
var newText = document.createTextNode("this is just text");
var target = document.getElementById("abc");
target.insertAdjacentElement("beforebegin",newElement);