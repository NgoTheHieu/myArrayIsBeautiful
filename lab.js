const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  //All name starts with A

  let nameStartWithA = []
  nameStartWithA = inventors.filter((name)=>{
	  if(name[0] == "A"){
		  return true;
	  }
  })
  console.log(nameStartWithA);
  //All inventors name contains "n"
  let nameContainsN = []
  nameContainsN = inventors.filter((name)=>{
	  for(i=0; i < name.length; i++){
		  if(name[i] == "n" || name[i]== "N"){
			  return true;
		  }
	  }
  })
  console.log(nameContainsN);
  //Letter twice in a row
  let twiceInARow = []
  twiceInARow = inventors.filter((name)=>{
	  for(i=0;i < name.length; i++){
		  if(name[i]==name[i+1]){
			  return true;
			  
		  }
		  
	  }
  })
  console.log(twiceInARow);
  //Array of numbers which are ood
  let numbersAreOdd = []
  numbersAreOdd = numbers.filter((number)=>{
	  if(number%2 == 1){
		  return true;
	  }
  })
  console.log(numbersAreOdd);
  //Array of the numbers that have two digits
  let numbersAreTwoDigit = []
  numbersAreTwoDigit = numbers.filter((number)=>{
	  if(number/10>=1){
		  return true;
	  }
  })
  console.log(numbersAreTwoDigit);
  //Array of numbers that are prime.
  let numbersArePrime = []
  numbersArePrime = numbers.filter((number)=>{
	if(number > 2){
		  for(i=0;i<number;i++){
			  if(number%i == 0){
				  return false
			  }
		  }
		  } 
	  }
);
  console.log(numbersArePrime);
//Print out the first name of each inventor.
  let firstNameInventor = []
  firstNameInventor = inventors.map((name) => {
	  let nameSplit = name.split(" ");
		return nameSplit[0];
  });
  console.log(firstNameInventor)
//Print out the length of every inventor's full name.
let inventorLength = []
	inventorLength = inventors.map((name)=>{
		let nameLength = name.length;
		return nameLength
	});
console.log(inventorLength);
//Print out all the inventors' names in uppercase.
let upperCaseInventor = []
	upperCaseInventor = inventors.map((name) =>{
		let upperCase = name.toUpperCase();
		return upperCase;
	});
	console.log(upperCaseInventor);
//Print out initials of all inventors(e.g. A.E., I.N., ...)
let initialInventor = []
	initialInventor = inventors.map(
	(name)=>{
		let nameSplit=name.split(" ");
		let initial = ".";
		for(i=0;i<nameSplit.length;i++){
			initial +=(nameSplit[i][0] + ".")
		}
		return initial
		
	}); 
	
console.log(initialInventor);
//Print out an array of every number multiplied by 100.
let multiply100 = []
multiply100 = numbers.filter((number)=>{
	if(number%100 != 0)
		return true;}
)
console.log(multiply100);
//Sort all the inventors in alphabetical order, A-Z.
let sortedInventors = [];
sortedInventors = inventors.sort();
console.log(sortedInventors);
//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let reverseInventors = [];
reverseInventor = inventors.sort()
//Sort all the inventors by length of name, shortest name first.
let sortLength = [];
let nameLength = [];

sortLength = inventors.sort(
(name)=>{
	for(i=0;i<inventors.length;i++){
		return inventors[i].length - inventors[i+1].length
}
});
console.log(sortLength);
//Sort all the inventors by length of name, longest name first. Do not use the reverse method.



//Find the sum of all the numbers.
let sum = numbers.reduce((total,num)=>{
	return total+num;
});
console.log(sum);
//Find the sum of all the even numbers.
let evenNumber = []
for(i=0;i<numbers.length;i++){
	if(numbers[i]%2 == 0){
		evenNumber.push(numbers[i]);
	}
}
let sumEven = evenNumber.reduce((total,num)=>{
		return total + num;
})
console.log(sumEven);
//Create a string that has the first name of every inventor.
let atlas = []
for(i=0;i<inventors.length;i++){
	let splitName = inventors[i].split(" ");
	atlas.push[splitName[1]];
}
let atlasName = atlas[1];
//for(i=0;i<atlas.length;i++){
	//let atlasName += atlas[i];
	//return atlasName
//}
console.log(atlasName);
//Does any inventor have the letter 'y' in their name?
let haveYInTheirName = [];
haveYInTheirName = inventors.some(
(name)=>{
	for(i=0;i<name.length;i++){
		if(name[i]=="y"|| name[i]=="Y"){
			return true;
		} 
	}
});
console.log(haveYInTheirName);
//Does every inventor have the letter 'e' in their name?
let haveEInTheirName = [];
haveEInTheirName = inventors.some(
(name)=>{
	for(i=0;i<name.length;i++){
		if(name[i]=="e" || name[i]=="E"){
			return true;
		} 
	}
});
console.log(haveEInTheirName);
//Does every inventor have first name that's longer than 4 characters?
let have4InTheirName = [];
have4InTheirName = inventors.some(
(name)=>{
	for(i=0;i<name.length;i++){
		if(name[i].length >4){
			return true;
		} 
	}
});
console.log(have4InTheirName);

//Find the inventor that has a middle name.
let inventorMiddle = [];
inventorMiddle = inventors.find(
(name)=>{
for(i=0;i<name.length;i++){
	if(name[i]=="."){
		return name[i]
	}
}
});
console.log(inventorMiddle);

//Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

let veryNewArray = {}
//Find the number divisible by 7.
let divisibleSeven = numbers.find((number)=>{
	if(number%7 == 0){
		return true
	}
})
console.log(divisibleSeven);
//Bonus: Return a new array, that only has the numbers that are not divisible by 7.
