//SEARCHING ALGORITHM.
/*
Given the following objects:-
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
*/

/* 1. Use __proto__ to assign prototypes in a way that any 
property lookup will follow the path:
 pockets → bed → table → head. 
 For instance, pockets.pen should be 3 (found in table), 
and bed.glasses should be 1 (found in head). */
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  //optionally included to test the assignments

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined

  /*
  2. Question: is it faster to get glasses as pockets.glasses 
  or head.glasses? Benchmark if needed.

  Answer:
  glasses is a direct property of head but glasses can 
  be accessed anywhere at the same perfomance.
  Modern engines will remember where the property was found and reuse it
  */





