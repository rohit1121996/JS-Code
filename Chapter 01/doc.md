# Javascript

1. Everything in javascript happens inside an execution conxtext

2. Javascript is a sychronous single-threaded language

3. Single thread mean javascript can execute one cammand at a time in specific order

# What happens when you run javascript code

1. An Execution context is created when javascript programs run

` var num = 2;

function square(x) {
var ans = x \* x;
return ans;
}

var result = square(num);

var result2 = square(5);

console.log(result);

console.log(result2);`

- How this program run explaining
  - first of all global execution conect is created
  - Memory allocation phase
  - Memory allocation is the first phase of the program running and it allocate memory accordingly for each and everyt variable and function like that for variable it's store the undefined and for function it's store the whole function body
    ` num: undefined 
square : {....}
result : undefined 
result2 : undefined`

  - Code Execution Phase
    - when it's start execution from starting and saw the code num have value 2 it's replace the undefined to 2 now
    - When it's move to next line and it saw it's function defination so there is nothing to execute so it moves directly to the var result line
    - And now it saw that it's function invocation. When it saw the function invocation that means it's now a mini program so it's create new whole execution context
    - Now same process for this function execution context memeory and code component's same process memory createion and then code execution phase
    - when it saw the return it will return the context where it was called and the value is added in result and it's move on to next line now and function execution context was discarded and deleted now and now again see the new function invocation same process again.

# How javascript engine manage the execution context

- It have call stack and it like a stack
  - whenever execution context created it has put into the call stack
- Call stack is only for managing the execution cantext once everything is done callstack is empty and we have done with javascript program.

- Call stack maintain the order of execution of execution context
  - Names of call stack
    - Execution of context stack
    - Program stack
    - Control stack
    - Runtime stack
    - Machine Stack
