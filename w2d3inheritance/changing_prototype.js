/*
In the code below we create new Rabbit, 
and then try to modify its prototype.

In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
*/

//We added one more string (emphasized). What will alert show now?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; //does not affect existing objects

alert( rabbit.eats ); // ? --- Answer 1: true


//…And if the code is like this (replaced one line)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; //eats has been changed from  true to false

alert( rabbit.eats ); // ? --- Answer 2: false


//And like this (replaced one line)?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; //delete operation fails because object rabbit doesnt have eats property

alert( rabbit.eats ); // ? --- Answer: true


//The last variant:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // eats property successfully deleted from the prototype

alert( rabbit.eats ); // ? ---Answer: undefined.
