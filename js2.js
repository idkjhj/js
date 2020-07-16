//JavaScript 2

{ var abs = Math.abs(-36); //36 absolute valor
  var goUp = Math.ceil(.000001); //1 it rounds up
  var goDown = Math.floor(.9999);//0 it rounds down
  var powerUp = Math.pow(3, 2);  //9 3^2 = 9
  var round = Math.round(4,9);   //5 it rounds up or down
  var isPositive = Math.sign(-Infinity);//-1 (false) indicates de sign
  var getInt = Math.trunc(4.999);//4 chops off the decimals
}

console.log(Math.max(3, 5, 4, 7, 2, 5)); //it shows the biggest number (7) 
console.log(Math.min(4, 8)+ 50); //Math.min shows the smalles number (4) and then adds 50

{ let favAnimal= "Horse";
  console.log(favAnimal[4]);      //the letter e will be shown because it begins with 0
  //see code with \ to separate lines in the output
  console.log('My favourite animal is ${favAnimal}!');  //another way to display messages $ is used to put the variable
  
  let text= "Harry Potter es una serie de novelas fantásticas escrita por la autora británica\
J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería \
Harry Potter y sus amigos Hermione Granger y Ron Weasley," //with the \ the text is displayed with line breaks
}

var condition= false;
  if (condition) {
    console.log("1");
  }   else {
        console.log("2");
	}

var digit= prompt();
  if (digit > 4) {
	  console.log("Perfect");
  }     else {
	      console.log("Too Low");
    }

{ var username = prompt();
  if(username==="froggot.kd"){
	  console.log("Welcome, Daniel");
  } else if(username==="leafkd"){
	  console.log("Welcome, Ari");
  } else {
	  console.log("Username incorrect. Try Again");}
}

var counter = 1;
while (counter < 21) {
	console.log(counter); //it will show 1 2 3 4 5... until 20, the order matters
	counter++;
}

for (var i = 1; i < 5; i++){ //it is just easier to see 1,2,3,4
    console.log(i);}
for (var e = 5; e > 0; e--) { //5,4,3,2,1   >= to include 0
	console.log(e);
}

{
	let myString = "Welcome again to the best page ever"; //it will separate each letter do not count on the commented area
	let charToSearch = "a";
	for (let i = 0; i < myString.length; i++){
		//if(myString[i] === charToSearch) { //this is to find the index // console.log(myString[i] + " is found at index" + i);
	    console.log(myString[i])
		//break; to search the first "a"
		//}
	}
}

{
	let myStringTwo = "Welcome again to the best page ever"; 
	let charToSearchTwo = "a";
	for (let i = 0; i < myStringTwo.length; i++){
	    if(myStringTwo[i] === 'a' || myStringTwo[i] === 'e') //it will show each letter separated and hide the a and e  (w l c m)
		{
			continue; 
		}
		console.log(myStringTwo[i])
	}
}

{
	let d = document.getElementById("destination"); //we need to add an element in the HTML file
	for(let i = 0; i < 10; i++){
		for(let k = i; k >= 0; k--){
			d.append(k + " ");
		}
		var br = document.createElement('br');
		d.appendChild(br); //this will put a break between lines
	}
}

{
let password;
 do {
	 password = prompt("What is the password?"); //it will repeat the prompt until it is correct
 } while (password !== "0000");
 
}
{ let paragraph= "somebodyy once told me the world was gonna rock me i ain the sharpest tool in the sheeeed";
  let search1= "o";
  let search2= "shrek";
  console.log(paragraph.includes(search1));
  console.log(paragraph.includes(search2));
  
       console.log(paragraph.indexOf(search2)); //it will show which letter the word we are searching is if not found it will show -1
       console.log(paragraph.indexOf(search1, paragraph.indexOf(search1 + 1))); //to see the second "o"
       console.log(paragraph.lastIndexOf(search1));  //to see the last "o" 
	   
  console.log(paragraph.substring(26, 54)); //to see what this number of letters say
  console.log(paragraph.substr(26, 28)); //the second value sis the amount of letters we will go from the first one
  console.log(paragraph.trim()); //eliminates white spaces and \ modifiers can be trimLeft or trimRight
  console.log(paragraph.repeat(5)); 
  console.log(paragraph.split(" ")); //it puts the word into "" and between ,
}
 
{ var favColor = prompt("What is your favourite color?");
  var lastName = prompt("What is your last name?");  //the "&&" displays the console.log if both conditions are meet
  if(favColor==="blue" && lastName==="Jaramillo"){   //we can replace "&&" with "||"
	  console.log("Hi again!");                      //use "||" so the console.log i displayed with only one if correct
    } else {                                         //if we put && !(lastName==="Jaramillo") the console.log will be displayed if any other lastName is introduced
	console.log("Incorrect answer");}
}

{ let sport = prompt("Do you play any sport?");
  switch(sport){
	  case "Swimming":
	   console.log("You the real one")   //if we want the console to display the same to different cases, we put the two cases one above the other with a break when we want to stop
	   break;
	  case "Golf":
	   console.log("That aint a sport")
	   break;
	  default:
	   console.log("I guess you good...")
	   break;
  }
}

{ let color = prompt("What is the color of blood?");
  if(color === "red") console.log("Correct");
}

{ let question = prompt("What year WW2 ended?");
  let points = question==="1945" ? 5:0;    //if the condition is met, the value on the left (5) will be displayed, if it is not, the value on the right (0) will be displayed
  console.log("Your final score is " + points);
}

//ARRAYS
let ages = [12, 4, 6, 23]; //these are elements
console.log(ages.length);
//displays 4
let ages = [12, 4, 6, 23]; 
console.log(ages.length - 1);
//displays 3
let grades = [[54, 51, 10], [5, 1, 6], [96, 20, 41]]; 
console.log(grades[1][2]); //displays 6 //the [1] means element with index 1 [5, 1, 6] and the [2] displays the 6

{
	let notas = [12, 4, 6, 23];
    notas.length = 25;
    notas[8] = 52;

	
	for(let i = 0; i < notas.length; i++){
		if (notas[i] !== undefined) {  //this way the "undefined" elements won't show up in the console.log
			console.log(notas[i]);
		}
	}
}

{
	let gradesFirst = [12, 4, 6, 23, 4, 5 , 4];
    gradesFirst.length = 25;
    gradesFirst[8] = 52;
	let foundArray = false;
	let searchArray = 4;
	for(let i = 0; i < gradesFirst.length; i++){
		if(gradesFirst[i] === searchArray){  //this will search if there is a 4 in the array and its index
			console.log(gradesFirst[i] + " found at index " + i); //it will show every 4 unless a "break;" property is used at the end; in that case it will show only the first one
		}
	}
}

{
	let numberHouse = [16, 52, 10, 82, 100, 99, 105, 4]
	let largest = numberHouse[0]
	
	for(let i = 0; i < numberHouse.length; i++){ //to find the largest number in the array (105)
		if(numberHouse[i] > largest){
			largest = numberHouse[i];
		}
	}
	console.log(numberHouse.indexOf(largest)); //to see the index of the largest number (6)
	//console.log(largest) to display the largest number in the array (105)
}