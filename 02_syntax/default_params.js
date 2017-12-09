var w = 1, z = 2;
function foo( x = w + 1, y = x + 1, zz = z + 1 ) {
    console.log( x, y, z );
}
foo();            // ReferenceError
