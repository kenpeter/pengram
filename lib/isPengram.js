// Is pengram, which is 26 alphabet chars

function isPengram(inputString, buf) {
	// buf array with 0, 26 len

	let returnCondi = false;
	let fullLen = 26;
	inputString.split(" ").map(function(currItem, index){
		currItem = currItem.trim();
		let currItemArr = currItem.split("");
		let letter;
		for(let i = 0; i < currItemArr.length; i++) {
			letter = currItemArr[i];
			if(buf[letter] == 0) {
				// Letter is not there, insert 1
				buf[letter] = 1;
			} else {
				// Letter is there, skip
			}
		}
	});


	// Count
	let total = 0;
	//console.log(buf);
	for(let i in buf) {
		total = total + buf[i];
	}

	//console.log(total);

	if(total == fullLen) {
		return true;
	} else {
		return false;
	}
}

module.exports = isPengram;
