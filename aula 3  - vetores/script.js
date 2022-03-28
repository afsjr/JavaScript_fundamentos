// o que sao vetores e arrays

// como declarar um array
//let array = ['string', 1, true];
//console.log(array);

let array = ['string',1,true,['array1'], ['array2'],['array3']];
console.log(array[3]);

// forEach
array.forEach(function(item,index){console.log(item,index)});

// push
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

console.log(array.indexOf(true));

//splice
array.splice(0,3);
console.log(array);

var novoarray = array;
novoarray.slice(0,3);
console.log(novoarray);

// objetos e arrays

let object ={
    
}