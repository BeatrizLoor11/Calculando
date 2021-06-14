"use strict";
(() => {

    const suma = (a, b) => a + b;
    
    console.log(suma(2,8));


})();
var a = 1;
var b = 1;
const c=81;

function calcular(){
    suma(a,b)
    resta(a,b)
    division(a,b)
    RaizCuadrada(c)
    multiplica(a,b)
}

function suma(numeroA, numeroB){
    console.log(numeroA + numeroB);
}
function multiplica(numeroA,numeroB){
    console.log(numeroA * numeroB)
}

function resta(numeroA, numeroB){
    console.log(numeroA - numeroB);
}

function division(numeroA, numeroB){
    console.log(numeroA / numeroB);
}

function RaizCuadrada(constc){
    const raizCuadrada = Math.sqrt(constc);
    console.log(raizCuadrada);
}

calcular();

