let ws = new WeakSet();
let obj = {};
console.log(ws.add(obj)); // we can add in WeakSet only objects
console.log(ws.add("val1")); // Uncaught TypeError: Invalid value used in weak set
