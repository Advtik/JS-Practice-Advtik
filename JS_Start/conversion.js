//converting number to string
let score=3;
console.log(typeof(score));
console.log(score);
let score_to_int=String(score);
console.log(typeof score_to_int);
console.log(score_to_int);

//Converting null to number
let nullnum=null;
console.log(typeof(nullnum));
console.log(nullnum);
let nullnumchange=Number(null);
console.log(typeof(nullnumchange));
console.log(nullnumchange);

//converting string to number
let name="Advtik";
console.log(typeof(name));
console.log(name);
let namenum=Number(name);
console.log(typeof namenum);
console.log(namenum);

//Converting null to number
let undef=undefined;
console.log(typeof(undef));
console.log(undef);
let undefnum=Number(undef);
console.log(typeof(undefnum));
console.log(undefnum);
//both will print NaN which means not a number