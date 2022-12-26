
let myname = "sachin";

var firstChar = myname.charAt(0);
firstChar = firstChar.toUpperCase();

console.log(firstChar);

var newName = firstChar + myname.toLocaleLowerCase((myname.slice(1, 6)));
console.log(newName);