// Primitive (STACK)
/*
string
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

const firstname = "Nitesh"
const age = 34
const score = 200
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNumber = 9007133442334455666n

// Reference (Non-primitive) - Objects (HEAP)

/*

Arrays
Objects
Functions

*/
const numbers = [1,2,3,4,5]
const heroes = ["superman", "batman", "flash", true, 123]

const userObject = {
    name: "hitesh",
    age: 20,
    isLoggedIn: true
}

//function
const sayHello = function(){
    console.log("nitesh")
}
sayHello()

