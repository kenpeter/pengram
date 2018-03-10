// Make the array with zero, with len is 26 alphabet chars

function initArray() {
	let len = 26;
	let buf = [];
	let letterA = 97; // ascii
	for(let i = 0; i< len; i++) {
		let mychar = String.fromCharCode(letterA + i);	
		buf[mychar] = 0;
	}

	return buf;
}


module.exports = initArray;
