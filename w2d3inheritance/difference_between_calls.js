
//Let’s create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

//These calls do the same thing or not?

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined

/*Answer: No, they don't do the same thing because in the first, "this"
    references the object rabbit, whereas the rest references
    Rabbit.prototype (whic does not have "name").
    */