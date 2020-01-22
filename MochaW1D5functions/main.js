"use strict";
//mocha test structure here ------------
describe("W1D5 Function Tests", function () {
  //max
  it("Expected output of max(20,10) is 20  ", function () {
    assert.equal(max(20, 10), 20)
  });

  //maxOfThree
  it("Expected output of maxOfThree(5,4,44) is 44  ", function () {
    assert.equal(maxOfThree(5, 4, 44), 44)
  });

  //isVowel
  it("Expected output of isVowel(z) is false ", function () {
    assert.equal(isVowel("Z"), false)
  });

  //sum
  it("Expected output of sum([1,2,3,7]) is 13", function () {
    assert.equal(sum([1, 2, 3, 7]), 13)
  });

  //multiply
  it("Expected output of multiply([2,3]) is 6 ", function () {
    assert.equal(multiply([2, 3]), 6)
  });

  //reverse
  it("Expected output of reverse('jim is a boy') is 'yob a si mij' ", function () {
    assert.equal(reverse("jim is a boy"), 'yob a si mij')
  });

  //findLongestWord
  it("Expected output of findLongestWord(['go', 'come', 'stay', 'going']) is 5 ", function () {
    assert.equal(findLongestWord(['go', 'come', 'stay', 'going']), 5)
  });

  //filterLongWords
  it("Expected output of filterLongWords(['go', 'come', 'stay', 'going']) is ['come', 'stay', 'going'] " , function(){
    const output = "come,stay,going";
    const input = new Array('go', 'come', 'stay', 'going');
    assert.equal(filterLongWords(input, 3).toString(), output)
  });
});

describe("Mapper", function () {
  //mapper
  it("Expected output of mapper(animals, alen) is '3,4,3'  ", function () {
    assert.equal(mapper(animals, alen), '3,4,3')
  });
});

describe("myFilter", function () {
  //myFilter
  it("Expected output of myfilter(animals, alen) is '0,4'  ", function () {
    assert.equal(myfilter(arraie, filtie), '0,4')
    
  });
});


/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

/* maxOfThree takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

/*isVowel takes a character and returns true if its a vowel and false if otherwise*/
function isVowel(x) {
  const vowels = new Array("a", "e", "i", "o", "u");
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === x.ignoreCase) { return true; }
    return false;
  }
}

/*Define a function sum() and a function multiply() that sums and multiplies
   (respectively) all the numbers in an array of numbers. For example, 
  sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24./
*/
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}

/*Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".*/
function reverse(string) {
  let reversed = "";
  for (let i = string.length; i >= 0; i--) {
    reversed = reversed + string.charAt(i);
  }
  return reversed;
}

/*Write a function findLongestWord() that takes an array of words 
and returns the length of the longest one.*/
function findLongestWord(words) {
  let longest = words[0].length;

  for (let i = 0; i < words.length; i++) {
    if ((words[i].length) > longest) {
      longest = words[i].length
    }
  }
  return longest;
}

/*Write a function filterLongWords() that takes an array of words and 
an integer i and returns the array of words that are longer than i.*/
function filterLongWords(words, i) {
  return words.filter(w => w.length > i);
}

//creating a mapper function.
const mapper = function (array, func) {
  const newArray = new Array();

  array.forEach(q => {
    newArray.push(q);
  });

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = func(newArray[i]);
  }

  return newArray;

}

// using the mapper to map an array of animals to an array of each of the element's lengths
const animals = ["cat", "goat", "hen"];
console.log(animals);

const alen = function (s) {
  return s.length;
}

console.log(mapper(animals, alen));

// note that the array is unchanged at the end of the call.
console.log(animals);


// creating a filter function my filter.
const myfilter = function (theArray, theFunc) {
  const innerArray = new Array();
  let returnArray = [];
  theArray.forEach(e => innerArray.push(e));

  for (let i = 0; i < innerArray.length; i++) {
    if (theFunc(innerArray[i]) === true) {
      returnArray.push(innerArray[i]);
    }
  }
  return returnArray;
}

// testing the myfilter function
const arraie = [7, 5, 0, 4, 5, 6];

const filtie = function (y) {
  return y < 5;
}
console.log(
  myfilter(arraie, filtie)
);

// initial array remains the same
console.log(arraie);