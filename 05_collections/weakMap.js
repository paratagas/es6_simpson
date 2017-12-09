let ws = new WeakMap();
let obj = {};
//  We can add in WeakMap only objects as a key
console.log(ws.set(obj, "some val")); // WeakMap {{…} => "some val"}
console.log(ws.set("key", "some val")); // Uncaught TypeError: Invalid value used as weak map key
