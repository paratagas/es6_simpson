//console.log(2 ** 4);

// -----
// instead of:
/*let vals = [ "foo", "bar", 42, "baz" ];
if (vals.indexOf( 42 ) >= 0) {
    console.log("42 in vals");
}*/

// use:
let vals = [ "foo", "bar", 42, "42", "baz" ];
if (vals.includes( 42 )) {
    console.log("42 in vals");
}

