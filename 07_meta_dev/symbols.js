function Foo() {}
Foo.prototype[Symbol.toStringTag] = "Foo func";
let obj = new Foo();
console.log(obj.toString()); // [object Foo func]
console.log(obj); // Foo.proto: Foo func
