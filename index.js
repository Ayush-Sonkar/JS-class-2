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


let x ={value: 50};
function inc(x) {
	x.value++;
}
inc(x);

console.log(x.value);
