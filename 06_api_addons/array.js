/*let a = Array(3);
console.log(a.length);                        // 3
console.log(a[0]);                            // undefined

let b = Array.of(3);
console.log(b.length);                        // 1
console.log(b[0]);                            // 3

let c = Array.of(1, 2, 3);
console.log(c.length);                        // 3
console.log(c);                               // [1,2,3]*/


// -----
/*let obj = {
    prop1: "val1",
    prop2: "val2",
    prop3: "val3"
};

console.log(obj.length); // undefined

/!*for (let item of obj) { // Uncaught TypeError: obj is not iterable
    console.log(item);
}*!/

for (let item in obj) {
    console.log(item); // prop1 ... prop3
}*/

// -----
/*let arr = [1, 2, 3];
let obj = {};

obj = Array.from(arr);
console.log(obj); // (3) [1, 2, 3]
console.log(Array.isArray(obj)); // true*/

// -----
/*console.log([1,2,3,4,5].copyWithin(3, 0));
console.log([1,2,3,4,5].copyWithin(-4, 0));*/

// -----
/*let arr = [ null, null, null, null ].fill( 42, 1, 3 );
console.log(arr); // [null,42,42,null]*/

// -----
/*let arr = [1,2,3,4,5];
console.log((arr.indexOf( 3 ) != -1));        // true
console.log((arr.indexOf( 7 ) != -1));        // false
console.log((arr.indexOf( "2" ) != -1));    // false*/

/*let a = [1,2,3,4,5];
a.some( function matcher(v){
    return v == "2";
} );                                // true
a.some( function matcher(v){
    return v == 7;
} );                                // false*/

/*let arr = [1,2,3,4,5];

let res1 = arr.find( function matcher(v){
    return v == "2";
} );

let res2 = arr.find( function matcher(v){
    return v === "2";
} );

let res3 = arr.find( function matcher(v){
    return v == 7;
});

//let res4 = arr.find(4);

console.log(res1); // 2
console.log(res2); // undefined
console.log(res3); // undefined
//console.log(res4); // TypeError: 4 is not a function*/

// -----
let arr = [1,2,3];
//console.log([...arr.values()]);                    // [1,2,3]
console.log([...arr.keys()]);                      // [0,1,2]
console.log([...arr.entries()]);                   // [ [0,1], [1,2], [2,3] ]
console.log([...arr[Symbol.iterator]()]);          // [1,2,3]
