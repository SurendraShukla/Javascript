var tower1 = [4, 3, 2, 1]; var tower2 = []; var tower3 = [];

function move(n, source, target, auxiliary) {
	if (n <= 0) {
		return;
	}

	move(n-1, source, auxiliary, target);
	target.push(source.pop());
	console.log(tower1, tower2, tower3);
	move(n-1, auxiliary, target, source);
}
console.log(tower1, tower2, tower3);
move(tower1.length, tower1, tower3, tower2);
