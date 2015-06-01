function Identifier() { 
	var privateVar = "PrivateVar";
	this.publicVar = "PublicVar";

	this.objMethod = function() { 
    	return privateVar + ' ' + this.publicVar;
   }

}


// Prototype methods can't access private members of function
Identifier.prototype.protoMethod = function() { 
    	return privateVar + ' ' + this.publicVar;
   };




 var child = Object.create(parent);