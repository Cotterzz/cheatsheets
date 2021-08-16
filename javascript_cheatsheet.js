// Javascript Cheatsheet By John Cotterell johnmdcotterell@gmail.com www.johnc.pro  github.com/cotterzz/

// COMMENTS. This is a single line comment

	/* This is a
	        multi line
	               comment */
	
// ASSIGNMENT
	var x;  // this declares variable x, without assigning it a value.
	x = 42; // this assigns a value to x, without declaring it first.
	var x = 42; // this declares variable x and assigns it a numerical value, in one line.
	var x, y, z; // this declares several variables in one go.
	var x=42, y=53, z=67; // this declares several variables and assigns them values.

// THE FOR LOOP
  // PART 1, The standard for loop.
  
  // A basic for loop. for (initialize; test; increment){ This statement block will be executed 10 times while i is 0 to 9 }
  for (var i = 0; i < 10; i++){
    console.log(i);
  }
  
  // A more up to date version of the above. Using let instead of var and i+=1 instead of i++ are considered best practice
  for (let i = 0; i < 10; i += 1){
    console.log(i);
  }
  
  // You can declare the variable before the loop:
  let i;
  for (i = 0; i < 10; i += 1) {
    console.log(i);
  }
  
  // You can even take the declaration out completely, as it's only needed once:
  let i = 0;
  for (; i < 10; i += 1) {
    console.log(i);
  }
  
  // In fact, only the semicolons and round brackets are mandatory.
  // This is the simplest for loop, and it causes an infinite loop:
  for (;;);
  
  // This is because leaving out the test in the middle field will always cause an infinite loop:
  for (let i = 0; ; i += 1) {
    console.log(i);
  }
  
  // Unless you break on another condition:
  for (let i = 0; ; i += 1) {
    console.log(i);
    if(i>30){
      break;
    }
  }
  
  // PART 2, The for-in loop.
  
  // PART 3, The for-of loop.
  
  // PART 4, The for-await loop.
  
  // PART 5, The Array.forEach() function, and other functional, declarative ways of iterating through arrays
  
  // Array.forEach() isn't a for loop, but it provides an alternative if you just want to iterate through an array and apply a function per each element, a very common use of the for loop.
  // Array.reduce(), Array.map() and Array.filter() also iterate through an array and provide different ways of functionally processing arrays.

// CLASSES
	class ClassName {
	
		constructor(value) {
			this.value = value;
			console.log(`You passed ${this.value} to this Class constructor`);
	  }

	  click = () => {alert(this.value);}
  	/*The class field click = () => {...} is created on a per-object basis,
  	there’s a separate function for each Button object, with this inside it referencing that object.
  	We can pass button.click around anywhere, and the value of this will always be correct.
		That’s especially useful in browser environment, for event listeners.*/
	
		methodName(anotherValue){
			console.log(`You passed ${anotherValue} to this method`);
		}
	}
	
	class ChildClassName extends ClassName{
		constructor(value) {
			super( value );
		}
	
		methodName(anotherValue) {
			super.methodName(anotherValue);
	  }
	}

// MODULES
	// The Module Pattern Using IIFE
	// CommonJS
	// AMD
	// UMD
	// Node Modules
		// Node Exports
		// Node Imports
	// ES6 Modules
		// ES6 Exports
		// ES6 Imports
			//Dynamic Imports
				let modulePath = "module.js";
				import(modulePath).then((module) => { let moduleClass = new module.default() });

// ES12 or 2021 New Features
	const strD = strA.replaceAll(strB, strC); // String replaceAll() replaces all occurrences of strB with strC in strA, and returns a new strD, leaving strA unchanged
	// WeakRef
	// weakRef.deref()
	// FinalizationRegistry
	// Promise.any() resolves as soon as one promise is resolved, ignoring others, and returning an aggreggate Error if they all fail
	// Logical assignment operators, combining &&, || and ?? with =
	x &&= y; // if x is truthy, assign to y
	x ||= y; // if x is falsy, assign to y
	x ??= y; // using the nullish coalescing operator, if x is null or undefined only, assign to y
	const billion = 1000_000_000; // Underscores as Numeric separators