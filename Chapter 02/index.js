// Hoisting in JavaScript

var x1 = 7;

function getName() {
  console.log("Javascript course is awesome");
}

getName();
console.log(x1);

getName1();
console.log(x2);

var x2 = 7;
function getName1() {
  console.log("Javascript course is awesome");
}

console.log(getName1);

//suppose we have a getname as a arrow function

console.log(genName2);
console.log(genName2());

var genName3 = function () {
  console.log("Javascript course is awesome and arrow function");
};
var genName2 = () => {
  console.log("Javascript course is awesome and arrow function");
};
