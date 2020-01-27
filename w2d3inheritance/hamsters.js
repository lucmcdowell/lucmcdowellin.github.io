/*We have two hamsters: speedy and lazy inheriting
 from the general hamster object..

 let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

When we feed one of them, the other one is also full. Why?
How can we fix it?
*/
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  alert( lazy.stomach ); // apple

  /*Answer: 
  Because when speedy calls the eat method, it is found in hamster and 
  executed with speedy, when it lloks for stomach property to call push,
  it is not in speedy, therefore it looks through the inheritance hierachy
  and finds it in hamster. When push is called, food is added to the 
  stomach of the prototype, hence can be accessed by lazy.

  This can be solved by adding the food with this.stomach.
  in this case, the food is written directly into "this" object
  */


