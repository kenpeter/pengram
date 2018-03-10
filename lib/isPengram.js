// Is pengram, which is 26 alphabet chars

function isPengram(inputString, buf) {
	// buf array with 0, 26 len

	let returnCondi = false;
	let fullLen = 26;
	inputString.split(" ").map(function(currItem, index){
		currItem = currItem.trim();
		//console.log(currItem);
		let currItemArr = currItem.split();
		let letter;
		for(let i = 0; i < currItemArr.length; i++) {
			ter = currItemArr[i];
			if(buf[letter] === 0) {
				// Letter is not there, insert 1
				buf[letter] = 1;
			} else {
				// Letter is there, skip
			}
		}


		// test
		console.log(buf);

		if(buf.length === fullLen) {
			returnCondi = true;
		} else {
			returnCondi = false;
		}
	});

	return returnCondi;
}

module.exports = isPengram;
