function x() {
  let a = 10;

  function y() {
    let b = 20;
    console.log(a + b);
  }
  y();
}

x();

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
    return a;
  }
  return inner;
}
const innerFunction = outer()();
console.log("test", innerFunction); // 10

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
    return a;
  }
  a = 100;
  return inner;
}

outer()(); // 100

function outest() {
  var b = 190;
  function outer() {
    var a = 10;
    function inner() {
      console.log(a, b);
      return a;
    }
    a = 100;
    return inner;
  }
  return outer;
}

const innerFunction = outest()()();

function outer() {
  var a = 10;
  setTimeout(function inner() {
    console.log(a);
  }, 1000);
  console.log("outer function");
}

outer(); // 10

function outer() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function inner() {
      console.log(i);
    }, i * 1000);
  }
  console.log("outer function");
}

outer();

// To fix that above issue, we can use let insted of var

function outer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function inner() {
      console.log(i);
    }, i * 1000);
  }
  console.log("outer function");
}
outer();

// with out using let i need fix with var

function outer() {
  for (var i = 1; i <= 5; i++) {
    function inner(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    inner(i);
  }
  console.log("outer function");
}
outer();
function outest() {
  function outer() {
    function inner() {
      console.log(a);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

outest()()();

var a = 18;
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

outer()(); // 10

function counter() {
  var count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment;
}

const incrementCounter = counter();
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());

const incrementCounter2 = counter();
console.log(incrementCounter2());
console.log(incrementCounter2());

function counter() {
  var count = 0;
  this.increment = function () {
    count++;
    return count;
  };
  this.decrement = function () {
    count--;
    return count;
  };
}

const counter1 = new counter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.decrement()); // 1
