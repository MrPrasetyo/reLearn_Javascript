// Integer or BigInteger
const dataInteger = 12345;
const dataBigInt = 2550292930929230;

// Number
const dataNumber = 3.14;

// String
const dataString = "This is an example of String type of Data";

// Null
const dataNull = null;

// Boolean
const dataBoolean = true;

// Undefined
let dataUndefined;

// Object
let dataObject = {
    name : "Dwi",
    age : 24,
}

// Function
let dataFunction =  function showFunction() {
    return `Maybe this Works ${typeof 1234n}`
}

// to knowing which type of data in some variabel, you need to use typeof(x)
typeof 1234n;

// Tester
console.log(dataFunction()) // put any of Variabel above to show in console log how each type of data shown in log.
