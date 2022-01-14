/* comentario de
multiplas linhas */

// comentario de uma linha


// ------VARIAVEIS-----------

// var preco = 2;
var desconto = 0.2;
const PRECO = 2;

var total = PRECO - desconto;
// PRECO = PRECO-desconto;


// ---------FUNCAO----------

function soma(a, b) {
    return a + b; //8
}

soma(3, 5); //8

console.log("Hello word");


function returnEvenValues (array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par`);
        }
    }
    console.log('Os numeros pares são: ',evenNums);
}

var array = [1,52,64,13,21,4,6,8,9,4,2,525,35,26,54];

returnEvenValues(array);
