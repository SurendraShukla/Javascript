var plates = 6;

var tower1 = getRangeFilledInDescendingOrder(1, plates),
	tower2 = [],
	tower3 = [];

console.log("Before Movement");
console.log(tower1);
console.log(tower2);
console.log(tower3);
toh(tower1, tower3, plates);
console.log("After Movement");
console.log(tower1);
console.log(tower2);
console.log(tower3);


function toh(source, destination, noOfPlates) {

	if(1 == noOfPlates) {
		movePlate(source, destination);
		return;
	}
	var midTower = getMidTower(source, destination);
	toh(source, midTower, noOfPlates-1);
	movePlate(source, destination);
	toh(midTower, destination, noOfPlates-1);
}


function getMidTower(source, destination) {
	var towerList = [tower1, tower2, tower3];
	for (var i = 0; i < towerList.length; i++) {
		var tower = towerList[i];
		if( (tower!= source) && (tower != destination) ) {
			return tower;
		}
	};
}

function movePlate(source, destination) {
	destination.push(source.pop());
}

function getRangeFilledInDescendingOrder(start, end) {
	var rangeArray = [];
	while(start <= end) {
		rangeArray[rangeArray.length] = end--;
	}
	return rangeArray;
}
