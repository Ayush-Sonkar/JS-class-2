console.log("Ayush developer");
// Objects in JS - collection of a key value pair

let myrect = {
  length: 4,
  breadth: 5,

  area: function () {
    console.log("area is 20");
  },
};

console.log(myrect.area());

// Object creating methods in JS
//factory function-used to create a single function and then call it for using anytime
//

function createRectangle(len, bre) {
  len;
  bre;
  return len, bre;
}
console.log(createRectangle(4, 5));

function MRectangle(len, bre) {
  return (rectangle = {
    lenght: len,
    breadth: bre,

    draw() {
      console.log("drawing rectangle");
    },
  });
}
let mrect = MRectangle(8, 5);
console.log(mrect);

// constructor function
function Rectangle(len, bre) {
  this.lambai = len;
  this.chaudhai = bre;
  this.draw = function () {
    console.log("Lets draw rectangle");
  };
  this.area = function (len, bre) {
    return len * bre;
  };
}

let rec = new Rectangle(4, 5);
console.log(rec);
console.log(rec.area(90, 5));
// adding and deleting in object

rec.color = "red";
delete rec.color;
console.log(rec);

// Reference type
// array, object, function

let a = 190;
a++;
let b = a;
console.log(b);

let c = { value: 10 };
let d = c;
c++;
console.log(d);

let z = 55;
function incr(z) {
  z++;
}
incr(z);

console.log(incr(z));

let x = { value: 50 };
function inc(x) {
  x.value++;
}
inc(x);

console.log(x.value);

let rectanglex = {
  len: 67,
  bre: 89,
  height: 90,
};
console.log(rectanglex);
// for in loop
for (let k in rectanglex) {
  console.log(k, rectanglex[k]);
}

// Array methods

let mx = [1, 2, 3, 4, 5, 6, 7];
mx.pop();
mx.pop();
mx.shift();
mx.slice(2, 4);
console.log(mx);

// Empty an Array
mx.length = 0;
console.log(mx);

// combining an array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// slicing an array
let array4 = [1, 4, 6, 8, 9, 3, 456, 890];
let sliced = array4.slice(2);
console.log(sliced);
// spread coperator
let array1 = [3, 6, 8, 9, 0];
let array2 = [6, 789, 3, 4, 5];
let combined = [...array1, ...array2, true, false, "Ayush"];
console.log(combined);

// iterating an array
let arrayx = [1, 6, 9, 3, 5, 8, 0];
for (let elements of arrayx) {
  console.log(elements);
}

let numbers = [1, 2, 3, 4, 5];
let joined = numbers.join("");
console.log(joined);


let numbers2 =[2,56,24,78,96,90];
let sored = numbers2.sort();
console.log(sored);