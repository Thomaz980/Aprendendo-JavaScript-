//

let a = 4 
let b = -1
let c = false
var d = false
var e = true  // a = 4, b = -1, c = false, d = false, e = true, 

a = a + b - (a * a) // a = 4 + -1 - (4 * 4) == 3 - 16 == -13
b = b - b + a - a // -1 - -1 + -13 - -13 == -1 + 1 + -13 + 13 == 0 + 0 == 0
c = d != c // c = false != false == false
d = (a % 3) == 0 // d = (-13 % 3) == 0 == false
e = (a + b) >= (a * b) // e = (-13 + 0) >= (-13 * 0) == -13 >= 0 == false

console.log(a,b,c,d,e) // -13, 0, false, false, false