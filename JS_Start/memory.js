//in this we will know about stack and heap for memory allocation
// all the primitive datatypes in js are stored in stack(means that they are stored in copies)
//all the non primituve datatypes in js are stored in heap(means they are reference based)

// example for stack storage
let myname="Adwiteek";
console.log(myname);
let duplicate_name=myname;
console.log(duplicate_name);
duplicate_name="Advtik";
console.log(myname);
console.log(duplicate_name);
/*the duplicate name was stored in another stack space where it was a 
copy of myname that's why changing duplicate name had no effect on original name*/

//example for a heap storage
let naruto={
    email: "naruto@gmail.com",
    ID: "011"
}
console.log(naruto.email);
let sasuke=naruto;

sasuke.email="sasuke@gmail.com";
console.log(naruto.email);
/*here the email that was assigned to naruto got changed when we applied changes to sasuke's email
this is because object work on reference based memory that is heap, when we changed sasuke's email we were also 
also changing naruto's email because they were stores in the same heap space at the same time*/
