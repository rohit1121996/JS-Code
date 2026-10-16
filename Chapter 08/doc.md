# Closures

- Closure: A function binds with their lexical scope forms a closure

- If you return a function so that is function bundled together return that is closure only.

`function outer() {
var a = 10;
function inner() {
console.log(a);
return a;
}
a = 100;
return inner;
}
outer()();`

- For this a refers there reference not value so it's return 100

- Uses of closures
  - Module Design Pattern
  - Currying
  - Function like once
  - Memoize
  - maintaining state in async world
  - setTimeouts
  - iterators
  - Data hiding and encapsulations
  - and many more...

- Disadvantage of closures
  - Over consumption of memory
  - Not Garbage collected so memory leak
