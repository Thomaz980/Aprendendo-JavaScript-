//

var a = 5
let b = 7
var c = 4
d = false
e = true // a = 5, b = 7, c = 4, d = false, e = true

a = a - b + (2 * c) // a = 5 - 7 + (2 * 4) == 5 - 7 + (8) == -2 + 8 == 6 
b = c - b - b + a // b = 4 - 7 - 7 + 6 == -3 - 7 + 6  == -10 + 6 == -4
c = a >= b // true
d = (a % 2) == 1 // d = (6 % 2) == 3 == false
e = (a + b) < (a * b) // e = (6 + -4) < (6 * -4) == 2 < -24 == false

console.log(a,b,c,d,e) // 6, -4, true, false, false 