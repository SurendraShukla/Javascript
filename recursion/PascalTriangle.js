var pascalRows = [];

getPascalTrinagleRows(5);
getPascalTrinagleRowsPrinted();

function getPascalTrinagleRows(row) {
	if(row<0)	return;
	getPascalTrinagleRows(row-1);

	pascalRows[row] = [];
	setCharToPascalRows(1, row);
	for (var i = 0; i < getLengthOfPreviousRow(row); i++) {
		var tmpChar = (pascalRows[row-1][i] + (undefined != pascalRows[row-1][i+1] ? pascalRows[row-1][i+1] : 0) );
		setCharToPascalRows(tmpChar, row);
	};
}

function getLengthOfPreviousRow(row) {
	return (undefined == pascalRows[row-1]) ? 0 : pascalRows[row-1].length;
}

function setCharToPascalRows(char, row) {
	var len=pascalRows[row].length;
	pascalRows[row][len] = char;
}

function getPascalTrinagleRowsPrinted() {
	console.log(pascalRows);
}