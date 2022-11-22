'use strict';

function BinarioADecimal(num){ /*
1. convertir el str que nos pasan en un numero para poder hacer operaciones
2.posicionar los numeros en un array para iterar sobre cada uno y realizar la transformacion
3. sumar el resultado para devolverlo como solucion
*/
let array= num.split("")

let j=0;
let suma = 0;
for (let i = array.length-1; i >=0 ;i--) { 

    const element = array[i]
    console.log(element);
    suma+= element*Math.pow(2,j)
     j++
}
console.log(suma);
return suma;
}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
