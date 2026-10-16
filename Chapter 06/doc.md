# Let and const, temporal dead zone, Reference Error, Syntax Error, Type Error

- Let and const declarations are hoisted
- These are the temporal dead zone in time being.
- Even before the single line code is executed we have a and b both have assigned the value undefined but in different memory space. And you can not access that memory space befor putting any value inside that variable so these varaible are hoised but we are not able access them from that memory space before initilization
- Temporal dead zone is the time since let and const varaible are hoisted and since before initialized that between time called temporal dead zone.
- When you tried to access value of the variable which in temporal dead zone it gives the Reference Error
- If you are redeclaring same variable name in let and const it's upfront say's that it's a syntax error you can not redeclare
- Type Error you can't reasign the value in const type varaible
