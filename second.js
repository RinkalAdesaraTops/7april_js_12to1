// Variable declaration method
// 1)Nothing
a=10
b=20
c=a+b
document.getElementById('demo').innerHTML = "Addition is "+c
document.write('<br> Minus is ',a-b)
document.write('<br> Multiply is '+(a*b))
// 2)var keyword = redeclare & reassign both are possible
var str = "Hello"
document.write('<br>String is '+str)
var str = 1562
document.write('<br>String is '+str)
// 3)const - constant  - cant possible redeclare & reassign
const pi=3.14
document.write('<br>Pi is ',pi)
// const pi="djfgiueryt"
// document.write('<br>Pi is ',pi)
// 4)let keyword = cant redeclare but reassign is possible
let x=56
document.write('<br>X is '+x)
x="rtiy"
document.write('<br>X is '+x)
