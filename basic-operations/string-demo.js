var str1;										//declaring a variable
var str2 = "String 2";							//defining a variable	
var str3 = 'String 3';
var str4 = str2 + " 4";							//assigning a variable
let str5 = "Let 1";								//defining a local variable	
const str6 = 4455;								//defining a constant


console.log("Direct String");					//printing a string directly
console.log(str1);								//printing a variable 
console.log(str2);
console.log(str4);
console.log(str5);								//printing a local variable
console.log(str6);								//printing a constant	

str1 = 8877;									//assigning a value to a variable

console.log(str1);

str5 = 8809;									//assigning a value to a local variable

console.log(str5);

//str6 = false;									//assigning a value to a constant throws an exception	

console.log(str6);

console.log(str3 + ' : ' +str4);				//string concatenation of variables using '+' operator
console.log('${str2} ${str5} ${str6}'); 		//string concatenation of variables 'Interpolation'

/*
-------------------------------
STARTING THE STRING OPERATIONS
-------------------------------
*/

str4 = '                       Some Text                 '; 

console.log('String x: ' + str4.trim());
console.log('Trim x' + str4.trim());
console.log('Length of x' + str4.length);
console.log('Length of trimmed x' + str4.trim().length);

console.log("String 3: " + str3);

console.log('Lower case of String 3' + str3.toLowerCase());
console.log('Upper case of String 3' + str3.toUpperCase());

const str = "Please locate where 'locate' occurs!";

console.log("Constant str: " + str);
console.log("Constant str: " + str.lastIndexOf("locate"));
console.log("Constant str: " + str.indexOf("locate"));
console.log("Constant str: " + str.indexOf("dance"));
console.log("Constant str: " + str.indexOf("locate",15));
console.log("Constant str: " + str.search("locate"));
console.log(str.indexOf("dance"));
console.log(str.indexOf("dance"));
console.log(str.indexOf("dance"));
console.log(str.indexOf("dance"));







