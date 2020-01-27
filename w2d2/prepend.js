(function () {
    "use strict"
     /**
      *
      * @param number
      * @param list
      * @returns {{}}
      */
     function prepend(number, list) {
       let obj = {};
       obj.value = number;
       obj.rest = list;
       return obj;
     }
   
     console.log(prepend(100, prepend(50, null)).value);
   
     describe("prepend", function () {
       it("prepend(10, prepend(20, null))", function () {
         assert.equal(prepend(100, prepend(50, null)).value, 100);
       });
   
     });
   
   }());