var table = document.querySelector(".table");
var clicker = 1;
var isRunning = 0;
var clear = document.querySelector(".clear");
var count_rect = document.querySelector(".count_rect");
var count_circle = document.querySelector(".count_circle");
clear.onclick =  function() {
    for (var i = 0;i < tabs.length;i++) {
  var elem = tabs[i].children[0];
        if (tabs[i].classList.contains("rect")) {
  tabs[i].classList.remove("rect");
} else if(tabs[i].classList.contains("circle")){
    tabs[i].classList.remove("circle");
  }
     if (elem) {  
  elem.remove();
    }
  }
  clicker = 1;
  isRunning = 0;
 };
var refresh = document.querySelector(".refresh");
refresh.onclick =  function() {
   count_rect.innerHTML = "0";
   count_circle.innerHTML = "0";
 };
    var one = document.querySelector(".one");
   var two = document.querySelector(".two");
   var three = document.querySelector(".three");
   var four = document.querySelector(".four");
   var five = document.querySelector(".five");
   var six = document.querySelector(".six");
   var seven = document.querySelector(".seven");
   var eight = document.querySelector(".eight");
   var nine = document.querySelector(".nine");
   var tabs = document.querySelectorAll(".tab");
  
table.onclick = function(event) {
   if (isRunning == 1) { return}
   var target = event.target;
   if (target.classList.contains("tab") & !target.children[0]) { 
   if (clicker == 1) {
   var rect = document.createElement('div');
  target.appendChild(rect);
   rect.className = "close";
   target.classList.add("rect");
   clicker = 0;
   } 
     else  {
  var circle = document.createElement('div');
  target.appendChild(circle);
   circle.className = "round";
   target.classList.add("circle");
   clicker = 1;  
}
   }

start("rect");
start("circle");
  
  function start(pow) {
   if ((one.classList.contains(pow)&& two.classList.contains(pow)&& three.classList.contains(pow))||(one.classList.contains(pow)&& four.classList.contains(pow)&& seven.classList.contains(pow))||(one.classList.contains(pow)&& five.classList.contains(pow)&& nine.classList.contains(pow))||(two.classList.contains(pow)&& five.classList.contains(pow)&& eight.classList.contains(pow))||(three.classList.contains(pow)&& five.classList.contains(pow)&& seven.classList.contains(pow))||(three.classList.contains(pow)&& six.classList.contains(pow)&& nine.classList.contains(pow))||(four.classList.contains(pow)&& five.classList.contains(pow)&& six.classList.contains(pow))||(seven.classList.contains(pow)& eight.classList.contains(pow)&& nine.classList.contains(pow))) {
 function win() {
   alert(pow +" wins!!!");
   isRunning = 1;
 };

setTimeout(win,100);
setTimeout(function(){
    if (pow == "rect") {
    count_rect.innerHTML++;
} else {
  count_circle.innerHTML++;
}
},100);
   }
  }
};


