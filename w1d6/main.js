/* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
          return "TEST SUCCEEDED";
        } else {
          return "TEST FAILED.  Expected " + expected + " found " + found;
        }
      }

      /*Define a function sum() and a function multiply() that sums and multiplies
         (respectively) all the numbers in an array of numbers. For example, 
        sum([4,2,3,4]) should return 13, and multiply([4,2,3,4]) should return 96./
      
     */
      function sum(array) {
        return array.reduce(
          (init, num ) => init + num
        );
      }
      console.log("Expected output of sum([4,2,3,7]) is 16 " + myFunctionTest(16, sum([4, 2, 3, 7])));
      function multiply(array) {
        return array.reduce(
          (init, num) => init * num
        );
      }
      console.log("Expected output of multiply([4,3]) is 12 " + myFunctionTest(12, multiply([4, 3])));
  
      /*Define a function reverse() that computes the reversal of a string. 
      For example, reverse("jag testar") should return the string "ratset gaj".*/
      function reverse(string) {
        return string.split("").reverse().reduce(
          function(accumulator,currentValue){
            return accumulator + currentValue;
          },''
          );
      }
      console.log("Expected output of reverse('javascript is good') is 'doog  si tpircsavaj' " + myFunctionTest('doog  si tpircsavaj', reverse("javascript is good")));
  
      /*Write a function filterLongWords() that takes an array of words and 
      an integer i and returns the array of words that are longer than i.*/
      function filterLongWords(words, i) {
        return words.filter(w => w.length > i);
      }
      const output = new Array('come', 'stay', 'going');
      const input = new Array('go', 'come', 'stay', 'going');
      console.log("Expected output of filterLongWords(['go', 'come', 'stay', 'going'])[0] is 'come'" + 
      myFunctionTest(output[0], (filterLongWords(input, 3))[0]));
  
      /*Using console.assert */
      console.log("/*--using console.assert--*/");

      /* runs test to see if expected argument is === to value returned by function2test argument */
     function myFunctionTest2(expected, found) {
      if (expected === found) {
        return true;
      } else {
        return false;
      }
    }
    console.assert(myFunctionTest2(16, sum([4, 2, 3, 7])), 'Expected output of sum([4, 2, 3, 7]) is 16');
    console.assert(myFunctionTest2(12, multiply([4, 3])), 'Expected output of multiply([4, 3]) is 12');
    console.assert(myFunctionTest2('doog  si tpircsavaj', reverse('javascript is good')), "Expected output of reverse('javascript is good') is 'doog  si tpircsavaj'");
    console.assert(myFunctionTest2(output[0], filterLongWords(input, 3)[0]), "Expected output of filterLongWords(['go', 'come', 'stay', 'going'])[0] is 'come'");