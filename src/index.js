module.exports = function toReadable (number) {
   if (number < 20)
		return convert0_19(number);
	if (number < 100) {
		let str = "" + convert20_90(get20_90(number));
		let lastDig = getLastDig(number);
		if(lastDig > 0) str = str + " " + convert0_19(lastDig);
		return str;
	}
	if (number < 1000) {
		let str = "" + convertHandred(getHandred(number));
		let tens = get20_90(number);
		if (tens > 1) str = str + " " + convert20_90(tens);
		let lastDig = getLastDig(number);
		if(lastDig > 0) str = str + " " + convert0_19(lastDig);
		return str;
	}
}

function convert0_19 (number) {
	switch(number) {
		case 0 : return "zero";
		case 1 : return "one";
		case 2 : return "two";
		case 3 : return "three";
		case 4 : return "four";
		case 5 : return "five";
		case 6 : return "six";
		case 7 : return "seven";
		case 8 : return "eight";
		case 9 : return "nine";
		case 10 : return "ten";
		case 11 : return "eleven";
		case 12 : return "twelve";
		case 13 : return "thirteen";
		case 14 : return "fourteen";
		case 15 : return "fifteen";
		case 16 : return "sixteen";
		case 17 : return "seventeen";
		case 18 : return "eighteen";
		case 19 : return "nineteen";
	}
}

function convert20_90(number) {
	switch(number) {
		case 2 : return "twenty";
		case 3 : return "thirty";
		case 4 : return "forty";
		case 5 : return "fifty";
		case 6 : return "sixty";
		case 7 : return "seventy";
		case 8 : return "eighty";
		case 9 : return "ninety";
	}
}

function convertHandred(number) {
	return convert0_19(number) + " hundred";
}

function getLastDig(number) {
	let str = number.toString();
	let res = parseInt(str[str.length - 1]);
	let d2 = str[str.length - 2];
	if(d2 == 1) res = res + 10;
	return res;
}

function get20_90 (number) {
	let str = number.toString();
	return parseInt(str[str.length - 2]);
}

function getHandred (number) {
	let str = number.toString();
	return parseInt(str[str.length - 3]);
}

