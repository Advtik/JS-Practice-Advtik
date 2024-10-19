let array1 = [1,2,3,4,'adwiteek'];
console.log(array1[3]);
console.log(array1.length);
// slicing the
let array2=array1.slice(2,4);
console.log(array2);
console.log(array1);
//splicing the array
let arraydup=array1.splice(2,4);
console.log(arraydup);
console.log(array1);
//concatening or merging two arrays
array1=array1.concat(arraydup);
console.log(array1);
//... -> spread operator for array
array1.push(...array2);
console.log(...array1);
// .from in array
let array3=Array.from("greatness");
console.log(array3);
//.of() in array
let array4=Array.of(5,6,7);
console.log(array4.concat(array3));
array4.push(array2);
//flat(Infinity) in array
array4=array4.flat(Infinity);
console.log(array4.flat(Infinity));
