var f = function() {}

f.id =100;
f.display = function() {
	cosole.log("my id is ", this.id);
}

f.display();