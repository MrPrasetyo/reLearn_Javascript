let number1 = 25;
let number2 = 30;

console.log((number1 + number2) - number1 * number2 / 2) // whatever operator inside () it will always be a priority, then times by, divided by, plus then minus

console.log(number1 += 5) // (Add and assign)
console.log(number1 -= 10) // (Minus and assign)
console.log(number1 *= 5) // (Times by and assign)
console.log(number1 /= 5) // (Divided and assign)
console.log(number1 %= 5) // (Modulo and assign)

console.log(number1 == "25") // (Same as) shows True because it just compare the value
console.log(number1 === "25") // (Same as - Strict) shows False because it compare the type of data too, not just value
console.log(number2 != 25) // (Not same as) shows True because its mean number2 variabel is not same as 25
console.log(number2 !== "25") // (Not same as - Strict) shows True because its mean number2 variabel and type of data is not same as 25
console.log(number1 > 20) // (Bigger than) shows True because number1 is bigger than 20
console.log(number1 < 20) // (Smaller than) shows False because number1 is not smaller than 20
console.log(number2 >= 30) // (Bigger or equal to) shows True because number2 is bigger or equal to 30
console.log(number2 <= 40) // (Smaller or equal to) shows True because number2 is smaller or equal to 40