let s = new Set();
let x = { id: 1 },
    y = { id: 2 };

console.log(s.add( x )); // Set(1) {{…}}
console.log(s.add( y )); // Set(2) {{…}, {…}}
console.log(s.add( x )); // Set(2) {{…}, {…}}
console.log(s.size); // 2
console.log(s.has(x)); // true

let keys = [...s.keys()];
let vals = [...s.values()];
let entries = [...s.entries()];
console.log(keys); // Array - [{…}, {…}] - 0: {id: 1}
console.log(vals); // [{…}, {…}]
console.log(entries); // [Array(2), Array(2)] - [{…}, {…}]

console.log(s.delete( y )); // true
console.log(s.size); // 1
console.log(s.clear()); // undefined
console.log(s.size); // 0
