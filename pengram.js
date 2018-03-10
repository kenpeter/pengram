// If a sentense contains all 26 chars, we call it pengram?

const initArray = require('./lib/initArray');
const isPengram = require('./lib/isPengram');

function main() {
	let input1 = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
	let input2 = "Not a pengram";
	let buf;
	let isPengramCondi;

	//
	buf = initArray();
	console.log(buf);


	/*
	input1 = input1.toLowerCase();
	isPengramCondi = isPengram(input1, buf); 
	console.log(isPengramCondi);		
	*/

	/*
	buf = initArray();
	input2 = input2.toLowerCase();
	isPengramCondi = isPengram(input2, buf);
  console.log(isPengramCondi);
	*/
}


// Run
main();
