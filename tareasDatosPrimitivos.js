/**
 * Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos undefined utilizando (siempre que sea posible) literales y funciones constructoras.

Imprime todos los valores y todos los tipos de esos valores usando console.log. 

Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número].

Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String. Comienza con el valor "1234". ¿Es posible?

Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.

Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1)

 */

let isOpenTheDoor =true;
let tel = 3328103640;
let bigNum = 30n;
let nombre = "Omar";
let tipo1;

console.log(`${isOpenTheDoor} [${typeof(isOpenTheDoor)}]`);
console.log(`${tel} [${typeof(tel)}]`);
console.log(`${bigNum} [${typeof(bigNum)}]`);
console.log(`${nombre} [${typeof(nombre)}]`);
console.log(`${tipo1} [${typeof(tipo1)}]`);
//crear un tipo de dato mediante un constructor
let name = "Omar";
let name1 = String("Omar");
let number = Number(1000)

console.log(name1, typeof(name1), number, typeof(number));

let firstConv = "1234"+"12345";            //str
let secConv =Number(firstConv)+Number(firstConv);     //num
let thirdConv = BigInt(secConv)+BigInt(secConv);   //bigint
let fourthConv = Boolean(thirdConv)+Boolean(thirdConv);        //bool
/*
console.log(firstConv ,typeof(firstConv));
console.log(secConv ,typeof(secConv));
console.log(thirdConv ,typeof(thirdConv));
console.log(fourthConv ,typeof(fourthConv));
*/

console.log(firstConv ,typeof(firstConv));
console.log(secConv ,typeof(secConv));
console.log(thirdConv ,typeof(thirdConv));
console.log(fourthConv ,typeof(fourthConv));


/**ULTIMO EJERCICIO */

let str1 = 42 + "1";

//console.log(str1);

let a = parseInt(str1.slice(0,2));
console.log(a);

let b = parseInt(str1.slice(2,3));
console.log(b);

let suma = a+b;
console.log(suma);












