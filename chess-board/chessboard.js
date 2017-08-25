var chessBoard = function(){
	var size = 8;
	function getSize() {
		return size;
	}

	function displayBoard() {
		var row;
		for (var i = getSize().length - 1; i >= 0; i--) {
			row+='<span></span>';
		};
		return row;
	}

	function getColumnGenerated() {
		var row;
		for (var i = getSize().length - 1; i >= 0; i--) {
			row+='<span></span>';
		};
		return row;
	}

	return {
		getSize: getSize
	}
}();

console.dir(chessBoard);