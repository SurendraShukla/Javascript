// {id: 6, name : "Pen", cost : 50, units : 70, category : 1}
// {id: 9, name : "Hen", cost : 80, units : 40, category : 2}

// Want a function which accepts a property_name as input and it return a method.
// The return method will accept an object and return property value if object has it

// Function should return getter methods
// var getProductName=get('name');
// getProductName(obj);

// var getProductId=get('id');
// getProductId(obj);

function get(prop) {
  return function(obj) {
    return obj[prop]
  }
}