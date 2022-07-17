// -----------
// use let and const instead of var
// -------------

var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");


// -----------
// wrap the loop in a function
// -------------

for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}

/*
Where to Drop - ondragover
The ondragover event specifies where the dragged data can be dropped.
*/
let chosen = [];
dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('box');
  let srcId = ev.dataTransfer.getData("srcId");
  
  if (droppable) {
    ev.target.appendChild(document.getElementById(srcId));
  } 
});


const element = document.getElementById("myBtn");

element.addEventListener("click", j);


function j () {
    x = (document.getElementById(box2));
    console.log(box2);
    // x.className +=  " newClassName";
// chosen.push(x)

console.log(box2);
}
;








