console.log(String.fromCodePoint( 0x1d49e ));
console.log("foo".repeat( 3 )); // "foofoofoo"


let palindrome = "step on no pets";
console.log(palindrome.startsWith( "step on" ));        // true
console.log(palindrome.startsWith( "on", 5 ));          // true
console.log(palindrome.endsWith( "no pets" ));          // true
console.log(palindrome.endsWith( "no", 10 ));           // true
console.log(palindrome.includes( "on" ));               // true
console.log(palindrome.includes( "on", 6 ));            // false
