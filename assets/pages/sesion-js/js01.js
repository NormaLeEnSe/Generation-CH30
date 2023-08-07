console.log("Bienvendido a la sesion JS01");

//Los 7 Datos primitivos
//numbers, string, boleaan, undefinend, null, bigint, symbol

//Tipos de datos en js
//Primitivos y no primitivos

//No primitivos: object

//Primitivos: symbol, undefined, null, boolean, string, number

//Tipo de dato string
//Para un salto de linea se puede usar \n, pero en template string no es necesario console.log(--\n--);
const stringData = 'Holi crayoli'
console.log(stringData);

//Tipo de dato number: positivos, negativos, decimales, negativos, NaN, +infinity, -infinity
console.log(`Tipos de datos number: ${12} ${-6} ${0.456} ${5*"hola"} ${45/0} ${-45/0}`);

console.log('-- \n  "texto entre comilas"--')
console.log(`Valor máximo representable en js: ${ Number.MAX_VALUE}`);
console.log(`Si es valor es mayor a MAX.VALUE:${1.79e310}`)

console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER}`);
console.log(`Valor máximo entero: ${9007199254740991}`)
//cuando se realizar operaciones que exceden los limites de MAX.SAFE.INTEGER
//Se produce una perdida de presición
console.log(`Max.SAFE.INTEGER + 1 ${Number.MAX_SAFE_INTEGER + 1}`)//9007199254740992
console.log(`Max.SAFE.INTEGER + 1 ${Number.MAX_SAFE_INTEGER + 2}`)//9007199254740993
console.log(`Max.SAFE.INTEGER + 1 ${Number.MAX_SAFE_INTEGER + 3}`)//9007199254740994
console.log(`Max.SAFE.INTEGER + 1 ${Number.MAX_SAFE_INTEGER + 4}`)//9007199254740995
console.log(`Max.SAFE.INTEGER + 1 ${Number.MAX_SAFE_INTEGER + 5}`)//9007199254740996

//tipos de datos BigInt
//sirven para representar valor númericos enteros, de los que el tipo number
//no puede representar o no es seguro

console.log(`Operaciones con bigInt`);
const myBigInt = 9007199254740991n;
console.log(`Max.SAFE.INTEGER + 1 ${myBigInt + 1n}`)//9007199254740992
console.log(`Max.SAFE.INTEGER + 1 ${myBigInt+ 2n}`)//9007199254740993
console.log(`Max.SAFE.INTEGER + 1 ${myBigInt + 3n}`)//9007199254740994
console.log(`Max.SAFE.INTEGER + 1 ${myBigInt + 4n}`)//9007199254740994
console.log(`Max.SAFE.INTEGER + 1 ${myBigInt + 5n}`)//9007199254740996

//tipo de dato Boolean
//se tiene 2 estados: true / false
console.log(`tipo de dato verdadero ${true}`);
console.log(`tipo de dato falso ${false}`);

//tipo de dato undefined
//una variable que es declarada pero el tipo de dato no es definido
let myVar = undefined
console.log (`tipo de dato undifined ${myVar}`)