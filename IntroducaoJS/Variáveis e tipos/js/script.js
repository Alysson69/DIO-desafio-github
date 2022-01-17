//variavel hoisting - apenas 'var' !let
varHoisting = 1;

console.log(varHoisting);

var varHoisting;

// let jun to com if
var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    let lastName = 'Silva';
    var firstName = 'Pedro';
    lastName = 'Robson';
    console.log(firstName, lastName);
}

console.log(firstName, lastName);

//constantes const
// //errados
// FIRST_NAME   = "Alysson";
//
// console.log(FIRST_NAME);
//
// //errado
//
// const FIRST_NAME = "Alysson";
//
// console.log(FIRST_NAME);
// const FIRST_NAME;

//CERTO
const FIRST_NAME = "Alysson";

console.log(FIRST_NAME);
