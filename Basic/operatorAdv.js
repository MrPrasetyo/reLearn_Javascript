// This is Lesson about Logical Operator which result always shows as Boolean

let a = 20;

let b = (a == 20) && (a % 2 == 0) // && is operator AND, which is both must be true to show True value, otherwise it will show false
let c = (a == 30) || (a % 2 == 0) // || is operator OR, which is if one condition is show True value, result always be True
let d = !(a == 20) // ! is operator NOT, which is condition must wrong to show True value
let e = (a % 2 == 0) ? "Even" : "Odd"; // Conditional Operator it just like "If Else"


console.log(b) // it will show you True since both condition is right
console.log(c) // it will show you True since one condition is met to shows True value
console.log(d) // it will show you False since condition is not met
console.log(e) // it will show Even since the Condition is right