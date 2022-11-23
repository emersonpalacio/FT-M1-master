# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.



```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);  //es el var x=10 en la linea 26  (2)
   console.log(a);  //  (3) 8 es el primer parametro que se pasa en linea 28 en c(8,9,10)
   var f = function (a, b, c) {
      b = a;    //al hacer b=a es lo mismo que decir 9=8 por lo que b toma el valor de 8 a partir de aqui
      console.log(b); // (5) muestra 8
      b = c;
      var x = 5;
   };
   f(a, b, c);  //(4) se ejecuta esta lina con los valores de a,b,c que corresponden a los argumentos pasados en c(a,b,c)
   console.log(b); // toma como referencia le valor de b mas cercano que es el que almacena en la llamada c en la argumento "b" que es 9
};
c(8, 9, 10); //(1) 
console.log(b);//(6) luego de ejecutar c(a,b,c) y salir de todo ese bloque de codigo ejecuta este log en global
console.log(x); //(7) y por ultimo ejecuta este console.log
```

```javascript
console.log(bar); // undefined
console.log(baz); //error ,  not defined por que al no tener la palara reservada let,const o var ,busca la variable en el objeto global y no la encuentra 
foo();  //  Hola , debido a que las funciones declaradas se elevan al comienzo del programa al comienzo de la ejecucion
function foo() {
   console.log('Hola!');  //esta funcion declarada va a ejecutarse aun estando debado de su llamado
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
// }
console.log(instructor); // // al estar declarado con VAR dentro del statement if 
// y  con la condicion true, significa siempre va a entrar en el condicional 
// por lo que modifica el valor de instructor a "franco"


```

```javascript
var instructor = 'Tony';  //variable global de la linea de codigo 57
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco'; // se modifica el valor de intructor dentro de la funcion auto invoclable
      // esta modificacion del nombre solo es valida dentro de este bloque de codigo
      // console.log(instructor);  
      console.log(instructor);  //franco
   }
})();
console.log(instructor); //al estar en el contexto global sigue teniendo el mismo valor de la linea 57
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);  // The flash por que es el valor que se le re asigno dentro del condicional
   console.log(pm); // al estar declarada con let la variable pm = reverse solo va a tener el este valor dentro de los corchetes de el condicional
}
console.log(instructor); //al estar trabajando esta variable con var , la modificacion del bloque del if le afecta por lo tanto el valor de intructor aquí es the flash y no tony
console.log(pm); // franco ya que al trabajar con let el scope es de bloque por lo que la asignacion dentro del if de pm = reverse no afecta a la variable que está por fuera de su bloque 
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 2 , javascript interpreta que debido a que hay un numero y se está realizando una division convierte el tipo de dato tring en number para poder entregar el resultado 
"2" * "3"  // 6 tanto la multiplicacion como la division tienen la particularidad de convertir el string en number para realizar la operacion 
4 + 5 + "px"  //"9px" realiza primero la suma y concatena el string
"$" + 4 + 5 //"$45" al ser el primer valor a sumar un string js convierte toda la operacion a string y concatena los alos
"4" - 2  // 2 evalua 4string - 2 numer y hace la conversion de 4 a number para hacer la operacion de resta 
"4px" - 2  //NaN , al ser el primer operando un numero unido a un string js no sabe si a que tipo de dato convertir el elemento dado 2 tipos
7 / 0   // segun yo da error de js  perro al probarlos envio un mensaje "infinity" ni idea que es 
{}[0]  // dio como resultado undefined , tampoco se por que 
parseInt("09") //9 number convierte el string en numero
5 && 2  //2   && tiende a falso
2 && 5   //5
5 || 0  // 5  or tiende a true
0 || 5 // 5 
[3]+[3]-[10]  // ni idea por que es 23
3>2>1  // pensé que daba true, dío false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined no se ha inicializado la variable en este momento, solo está siendo declarada
   console.log(foo()); // retorna 2 ya que las funciones declaradas se cargan al incio del archivo

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
// regresa undefined ya que al pasar por parametro false a la funcion food, nunca se ejecuta el condicional if que es donde vive la variable snack con el valor de friskies, no regresa meoew mix, por que al ser una variable global no tiene acceso al entorno de la fucnion getfood
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //muestra por consola aurelio de rosa por que el this hace referencia al objeto donde se declara el metodo

var test = obj.prop.getFullname;  //al asignar el metodo getfullname a un variable se está cambiando hacia donde apunta this, por lo cual dice undefined

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);  //(1) es el primer elemento del call stack se resuelve inmediatamente
   setTimeout(function () {
      console.log(2);
   }, 1000);      //         //estos dos set time out, al simular un asincronismo no son resueltos en el call stack sino que se envian al webApi, transcurrido el tiempo definido
                              //en los set time out, primero entra log(2) demora 1 segundo , pero estar log(1)estipulado en 1 segundo este se resuelve mas rapido
                              //por que los pasa al callback que primero para ser enviados por el event loop al call stack
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);  // (2) al no estar simulando un asincronismo estos logs llegan al  call stack y se resuelven en el acto
}

printing(); 
```
