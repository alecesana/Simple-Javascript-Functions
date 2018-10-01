
 

//map
let oldArr = [2,3,4,5,6];
let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});

//example 1
let arr = [1,2,3,4];

let plus5 = arr.map((val, i, arr) => {
    return val + 5;
  });

//example 2 

let arr = [1,2,3,4];
//This time however we’re going to return an object .This object will contain the index and the value at that index. To do this, we’ll utilize the i argument:

let newArr = arr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});
//This will create an array of objects for us within our newArr:

arr = [1,2,3,4];
newArr = [
  {value: 1, index: 0},
  {value: 2, index: 1},
  {value: 3, index: 2},
  {value: 4, index: 3}
]