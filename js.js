document.getElementById("vermas").onclick = function(){
    document.getElementById("registrate").innerHTML = "Registro Confirmado";
    }
var username = prompt("¿Cuál es tu nombre?");	
alert("Buen día " + username);

(function(){ var age = 5;
  //IIFE
  //function with that syntax hides the code from the windows object in the browser and it is not global
    })();
	
var age = 10;
let y = 20;
  //let means it is still global but hidden in the windows object
const x = 15;
  //curly braces create blocks and those can be nested
  
console.log("apple" === "orange")
console.log(10 === 10) //to see if it is the same
console.log(15 <= 35)  //to see if 15 is less than 35

var age1 = 14
var age2 = 15
console.log(age1 + age2)
console.log(age1 !== age2)  //this one to check if it is not the same called inequity operator

if (true) {
console.log("if conditionals")}; //if the value of IF is true the consolelog is displayed, otherwise is skipped

{ let myName= "Daniel";
     myName = myName.toUpperCase();  //this makes the string turn into an object and then into a string again ig 
      console.log(myName);
  let yourName= new String("Ana");  //the "new xxxxx" turns the primitive into an object
  console.log(typeof(myName));      //using typeof we see what kind of variable it is 1=string 2=object
  console.log(typeof(yourName));}
  
  { console.log(Number.MAX_SAFE_INTEGER); //to see what is the max and min of the numbers we can express safely, decimals can be seen
    console.log(Number.MIN_SAFE_INTEGER);
	let x = 9007199254740995              //9007199254740991 is the top  -9007199254740991 is bottom
	console.log(Number.isSafeInteger(x))} //this way we know which number is safe
	
/*var answer = 1946;
if (answer !== 1945);
console.log( answer + " is not it")
   var answer = 1945;
   if (answer === 1945);
   console.log( answer + " is correct");*/
   
{ let numberOfDays = 5;
  numberOfDays++;   // 5 + 1 = 6 or it can be ++numberOfDays and the ++ happens first
  numberOfDays--;   // 6 - 1 = 5  or it can be --numberOfDays 
  numberOfDays *= 5; //5*5 = 25 in this method every operator can be used ( + - * / %)
  }
  
  { let a = 5;
    let b = "10";
	let bInt = Number.parseInt(b);  //parseFloat can use decimals int can not
    console.log( a + bInt);   } //parseInt turns the string b into a number 
	
{ let dada = 11;
  console.log("Dec:", dada)
  console.log("Binary:" , Number.parseInt(dada, 2));
  console.log("Oct:" , Number.parseInt(dada, 8));
  console.log("Hex:" , Number.parseInt(dada, 16));
}