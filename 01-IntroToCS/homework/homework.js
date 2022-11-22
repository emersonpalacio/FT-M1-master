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

    suma+= element*Math.pow(2,j)
     j++
}

return suma;
}

function DecimalABinario(num) {
     if(num<=0) return "0"
     let arr =[]
     while(num>0){
          arr.unshift(num%2)
          num = Math.floor(num/2)

     }
     return arr.join("")
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
