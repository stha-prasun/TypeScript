"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(2);
function signUpUser(name, email, age) {
    console.log(name, email, age);
}
signUpUser("test", "email", 19);
function loginUser(name, email) {
    //function return type String
    return "Welcome Back User";
}
var heros = ["thor", "ironman", "cap"];
heros.map(function (hero) {
    return "Hello. ".concat(hero);
});
var handleError = function (err) {
    //return type void
    console.log(err);
};
function throwError(errorMsg) {
    //return type is never: The function will never return anything
    throw new Error(errorMsg);
}
