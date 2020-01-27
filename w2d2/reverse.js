(function () {
    "use strict";
  
    /**
     *
     * @param arr
     * @returns {[]}
     */
    function reverseArray(arr) {
      let newArray = [];
      for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[arr.length - i - 1];
      }
      return newArray;
    }
  
    /**
     *
     * @param arr
     * @returns {*}
     */
    function reverseArrayInPlace(arr) {
      for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
      }
      return arr;
  
    }
  
    /**
     *
     */
    Array.prototype.reverseArray = function () {
      let i = 0;
      let middle = Math.floor(this.length / 2);
      let temp = null;
  
      for (let i = 0; i < middle; i += 1) {
        temp = this[i];
        this[i] = this[n - 1 - i];
        this[n - 1 - i] = temp;
      }
    };
  
    describe("reverse", function () {
      it("reverseArray(Z,Y,X) returns XYZ", function () {
        assert.equal(reverseArray(["Z","Y","X"]).toString(), ["X","Y","Z"]);
      });
  
      it("reverseArrayInPlace(Z,Y,X) returns XYZ", function () {
        assert.equal(reverseArrayInPlace(["Z","Y","X"]).toString(), ["X","Y","Z"]);
      });
  
    });
  
  }());