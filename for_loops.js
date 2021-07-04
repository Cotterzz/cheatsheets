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