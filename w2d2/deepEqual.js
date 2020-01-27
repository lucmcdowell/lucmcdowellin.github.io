function deepEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    if (typeof (obj1) !== typeof (obj2)) {
      return false;
    }

    if (typeof (obj1) === "object") {
      for(let key in obj1) {
        return deepEqual(obj1[key], obj2[key]);
      }
    } else {
      if (obj1 === obj2) {
        return true;
      }
      else
      {
        return false;
    }

  }
}

  let student = {
    here : {
      is : "Tom"
    },
    object : 2
  };

  describe("deepEqual", function () {
    it("deepEqual(obj, obj) -> true", function () {
      assert.equal(deepEqual(student, student), true);
    });

    it("deepEqual(obj, notequal) -> false", function () {
        assert.equal(deepEqual(student, {
          here : {
            is : "James"
          },
          object : 2
        }), false);
      });
});