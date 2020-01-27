/*Imagine, we have an arbitrary object obj, 
created by a constructor function – 
we don’t know which one, 
but we’d like to create a new object using it.
Can we do it like that?
*/
let obj2 = new obj.constructor(); // Answer: yes, if we are sure that constructor property has the correct value

/*
Give an example of a constructor function for obj which 
lets such code work right. And an example that makes it
 work wrong.
 */

 function Obj(){}

 Obj.prototype = {name: 'James'} // this will make it work wrong since the constructor is overwritten

 Obj.prototype.name = 'James' // this will add property name to the dafault prorotype keeping the default constructor


