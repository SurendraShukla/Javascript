
function Gadget(name, color) { 
   this.name = name; 
   this.color = color; 
   this.whatAreYou = function(){ 
     return 'I am a ' + this.color + ' ' + this.name; 
   }
}

// Prototype property/methods are like Class property/methods

/// Dynamicaly adding property and method 
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() { 
   return 'Rating: ' + this.rating + ', price: ' + this.price;
};

// Other way : Providing other object
Gadget.prototype = { 
   price: 100, 
   rating: 3, 
   getInfo: function() { 
     return 'Rating: ' + this.rating + ', price: ' + this.price; 
   }
};