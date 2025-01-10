const person = {
  name: "RAMA",
  age: 23,
  email: "RAMA@example.com"
};

const jsonString = JSON.stringify(person); //لتحويل الكائن إلى نص
console.log("JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString); //لتحويل السلسلة النصية إلى كائن.
console.log("Parsed Object:", parsedObject);

console.log("Name:", parsedObject.name);  
console.log("Age:", parsedObject.age);    
console.log("Email:", parsedObject.email); 
