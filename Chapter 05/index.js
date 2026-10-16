function a() {
  function c() {
    console.log(b);
  }
  c();
}
var b = 10;

a();

function x() {
  var z = 20;
}
console.log(z);
