let a = NaN, b = "NaN", c = 42;
console.log(isNaN( a ));                      // true
console.log(isNaN( b ));                      // true - ой!
console.log(isNaN( c ));                      // false
console.log(Number.isNaN( a ));               // true
console.log(Number.isNaN( b ));               // false - исправлено!
console.log(Number.isNaN( c ));               // false

console.log(Number.isInteger( 4 ));               // true
console.log(Number.isInteger( 4.2 ));             // false
console.log(Number.isInteger( NaN ));              // false
console.log(Number.isInteger( Infinity ));         // false

function isFloat(x) {
    return Number.isFinite( x ) && !Number.isInteger( x );
}

console.log(isFloat( 4.2 ));                       // true
console.log(isFloat( 4 ));                         // false
console.log(isFloat( NaN ));                       // false
console.log(isFloat( Infinity ));                  // false
