//this is tast 1
let imgee = document.getElementById("imge");
let show_src = imgee.getAttribute("src");
console.log(show_src);

//this is task 2
let pic3 = document.getElementById("pic3");
let storesrc = pic3.getAttribute("src");

let scondpi = document.getElementById("scnd");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  scondpi.setAttribute("src", storesrc);
});

//this is 3
let inputt = document.getElementById("inpu");
inputt.setAttribute("placeholder", "Enter your name");

//this is 4
let inpu2 = document.getElementById("inpue2");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  inpu2.removeAttribute("disabled");
  inpu2.style.border = "solid blue 2px";
});
