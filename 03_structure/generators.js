/*function *foo(x) {
    if (x < 3) {
        x = yield *foo(x + 1);
    }

    return x * 2;
}

let it = foo(1);
console.log(it.next()); // { value: 24, done: true }*/


// -----
/*function *foo() {
    yield 1;
    yield 2;
    yield 3;
}

for (let v of foo()) {
    console.log(v);
}*/

// -----
/*function *foo() {
 yield 1;
 yield 2;
 yield 3;
 }

 let it = foo();
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());*/

// -----
/*
function *foo() {
    let x = yield 1;
    let y = yield 2;
    let z = yield 3;
    console.log( x, y, z );
}

let it = foo();
console.log(it.next());               // { value: 1, done: false }
console.log(it.next( "foo" ));        // { value: 2, done: false }
console.log(it.next( "bar" ));        // { value: 3, done: false }
console.log(it.next( "baz" ));        // "foo" "bar" "baz" // { value: undefined, done: true }*/

// -----
/*function *foo() {
    yield 1;
    yield 2;
    yield 3;
}
let it = foo();
console.log(it.next());                // { value: 1, done: false }
console.log(it.return(42));          // { value: 42, done: true }
console.log(it.next());                // { value: undefined, done: true }*/

// -----
/*function *foo() {
    try    {
        yield 1;
        yield 2;
        yield 3;
    }
    finally {
        console.log( "cleanup!" );
    }
}
for (let v of foo()) {
    console.log(v);
}
// 1 2 3
// очистка!

let it = foo();
console.log(it.next());              // { value: 1, done: false }
console.log(it.return(42));        // очистка! // { value: 42, done: true }*/

// -----
function *foo() {
    yield 1;
    yield 2;
    yield 3;
}
let it1 = foo();
console.log(it1.next());            // { value: 1, done: false }
console.log(it1.next());            // { value: 2, done: false }

let it2 = foo();
console.log(it2.next());            // { value: 1, done: false }
console.log(it1.next());            // { value: 3, done: false }
console.log(it2.next());            // { value: 2, done: false }
console.log(it2.next());            // { value: 3, done: false }
console.log(it2.next());            // { value: undefined, done: true }
console.log(it1.next());            // { value: undefined, done: true }
