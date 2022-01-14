// O que são vetores e arrays

// Array
let array = ['string', 1, true, ['array1', 'array2'], ['array3']];
console.log(array[2]);


//forEach

array.forEach(function (item, index) {
    console.log(item, index);
})

//push

array.push('novo item');
console.log(array);

//pop

array.pop();
console.log(array);

//shift

array.shift();
console.log(array);

//unshift

array.unshift('novo item no inicio');
console.log(array);

//indexOf

console.log(array.indexOf(true));

//splice

array.splice(0 , 3);
console.log(array);

//slice

var novoArray = array.slice(0, 3);
console.log(novoArray)


//objeto

let object = {
    string: 'azul',
    numberho: 1,
    boolean: true,
    array: [array],
    minuto 10===

}












