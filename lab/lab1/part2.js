/* =====================
# Lab 1, Part 2 — Functions as Values
Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function() {
  return 1;
};
console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(num) {
  return num%2===0;
};
console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(num) {
    if (justOne(num)&&isEven(num)) {
      return true;
    }
    else{
      return false;
    }

};
console.log('justFalse success:', justFalse(4) === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(boolean) {
  if(boolean){
    return false;
  }
  else{
    return true;
  }
};
console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num) {
  if(!isEven(num)){
    return true;
  }
  else{
    return false;
  }
};
console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(array) {
  /*var arrayFiltered=[];*/
  for (var i=0; i<array.length;i++){
    /*if (array[i]>10){
      arrayFiltered.push(array[i]);
    }*/
    if(array[i]<10){
      array.splice(i,1);
    }
  }
  /*return arrayFiltered;*/
  return array;
};
console.log('filterOutLessThan10 success:', _.isEqual(filterOutLessThan10([4, 11]),[11]));

/* =====================
Stretch goal
Instructions: Let's bring it all together. Write a function that filters a list with a predicate you provide. It takes:
              1. a list of values (to be filtered)
              2. a function that takes a value and returns true (to keep a number) or false (to toss it out)
===================== */

var filter = function(array, func) {
  var arrayFiltered=[];
  for (var i=0; i<array.length; i++){
    if(func(array[i])){
      arrayFiltered.push(array[i]);
    }
  }
  return arrayFiltered;

};
console.log('filter success:', _.isEqual(filter([4, 11], isOdd),[11]));
