# A Tool for Solving Systems of Equations

```
let eqns = [ "10-x^2-y+11", "sin(x)+2*y-20" ];
let guesses = { x: 0, y: 0 };
const test = solveSystem(eqns, guesses, { epsilon: 0.00001 })
```

The library first parses the equations and then uses automatic differentiation and the levenberg-marquardt algorithm 
to numerically find a minimum in a cost function constructed of the equations.

The cost function takes the form of eq0^2 + eq1^2 + ... and o=absolute minima occur at zero if inital
equations are set equal to 0. The levenberg-marquardt algorithm is esstially a modified Newton's method
with a relaxtion term.

This project was originally made to make geometric constraint solvers. You can see a demo of this with a linkage mechanism 
here.
